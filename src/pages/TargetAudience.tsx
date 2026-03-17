import React, { useState, useEffect } from 'react';
import { influenceTechniques } from '../data/influenceTechniques';
import { psychologyData } from '../data/psychologyData';
import { syndromes } from '../data/syndromes';
import { User, Plus, Trash2, BookOpen, AlertTriangle, ShieldCheck } from 'lucide-react';

interface TargetAudience {
  id: string;
  name: string;
  age: string;
  gender: string;
  profession: string;
  religion: string;
  politicalSystem: string;
  syndrome: string;
  savedTechniques: string[];
}

const religions = ['Phật giáo', 'Ấn độ giáo', 'Thiên chúa giáo', 'Không tôn giáo', 'Đạo giáo', 'Do thái giáo', 'Hồi giáo'];
const genders = ['Nam', 'Nữ', 'Khác'];
const professions = ['Sales', 'Marketing', 'Customer Service', 'Management', 'Kỹ thuật', 'Giáo dục', 'Y tế', 'Khác'];
const politicalSystems = ['Xã hội chủ nghĩa', 'Tư bản', 'Quân chủ lập hiến', 'Phiến quân/Loạn lạc'];

export const TargetAudience: React.FC = () => {
  const [targets, setTargets] = useState<TargetAudience[]>([]);
  const [newTarget, setNewTarget] = useState({ name: '', age: '', gender: 'Nam', profession: 'Sales', religion: 'Không tôn giáo', politicalSystem: 'Tư bản', syndrome: '' });

  useEffect(() => {
    const saved = localStorage.getItem('target-audiences');
    if (saved) setTargets(JSON.parse(saved));
  }, []);

  const saveTargets = (updatedTargets: TargetAudience[]) => {
    setTargets(updatedTargets);
    localStorage.setItem('target-audiences', JSON.stringify(updatedTargets));
  };

  const addTarget = () => {
    if (!newTarget.name) return;
    const target: TargetAudience = {
      ...newTarget,
      id: Date.now().toString(),
      savedTechniques: []
    };
    saveTargets([...targets, target]);
    setNewTarget({ name: '', age: '', gender: 'Nam', profession: 'Sales', religion: 'Không tôn giáo', politicalSystem: 'Tư bản', syndrome: '' });
  };

  const getAnalysis = (target: TargetAudience) => {
    const age = parseInt(target.age || '0');
    const profession = target.profession.toLowerCase();
    const religion = target.religion;
    const politicalSystem = target.politicalSystem;

    const techniques = influenceTechniques.filter(t => 
      (t.targetDemographics.professions.includes(target.profession) || t.targetDemographics.professions.includes('All')) &&
      (t.targetDemographics.religions.includes(target.religion) || t.targetDemographics.religions.includes('All')) &&
      (t.targetDemographics.politicalSystems.includes(target.politicalSystem) || t.targetDemographics.politicalSystems.includes('All'))
    );

    // Automatic Syndrome Suggestion Logic
    const suggestedSyndromes: { name: string, instruction: string }[] = [];
    const suggest = (name: string, instruction: string) => {
      if (!suggestedSyndromes.find(s => s.name === name)) {
        suggestedSyndromes.push({ name, instruction });
      }
    };

    if (age > 0 && age < 25) {
      suggest("Imposter Syndrome", "Khen ngợi nỗ lực cá nhân để giảm bớt sự tự ti.");
      suggest("FOMO", "Tạo ra các sự kiện giới hạn.");
    } else if (age >= 25 && age <= 45) {
      suggest("Dunning-Kruger Effect", "Để họ tin rằng họ là chuyên gia.");
    }

    if (profession.includes('management') || profession.includes('sales')) {
      suggest("Halo Effect", "Xây dựng hình ảnh chuyên nghiệp.");
    }

    if (religion && religion !== 'Không tôn giáo') {
      suggest("Authority Bias", "Trích dẫn các giáo lý uy tín.");
    }

    if (politicalSystem === 'Xã hội chủ nghĩa') {
      suggest("Bandwagon Effect", "Nhấn mạnh vào lợi ích tập thể.");
    }
    
    const getLocalized = (field: any) => {
      if (typeof field === 'string') return field;
      if (field && typeof field === 'object') {
        return field['en'] || field['vi'] || '';
      }
      return '';
    };

    const articles = psychologyData.filter(a => 
      getLocalized(a.category).toLowerCase().includes(target.profession.toLowerCase()) || 
      getLocalized(a.title).toLowerCase().includes(target.profession.toLowerCase())
    );

    return { techniques, articles, suggestedSyndromes };
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Quản lý Đối tượng Mục tiêu</h1>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">Thêm đối tượng mới</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input placeholder="Tên đối tượng" className="p-3 rounded-xl border" value={newTarget.name} onChange={e => setNewTarget({...newTarget, name: e.target.value})} />
          <input type="number" placeholder="Độ tuổi" className="p-3 rounded-xl border" value={newTarget.age} onChange={e => setNewTarget({...newTarget, age: e.target.value})} />
          <select className="p-3 rounded-xl border" value={newTarget.gender} onChange={e => setNewTarget({...newTarget, gender: e.target.value})}>
            {genders.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
          <select className="p-3 rounded-xl border" value={newTarget.profession} onChange={e => setNewTarget({...newTarget, profession: e.target.value})}>
            {professions.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          <select className="p-3 rounded-xl border" value={newTarget.religion} onChange={e => setNewTarget({...newTarget, religion: e.target.value})}>
            {religions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          <select className="p-3 rounded-xl border" value={newTarget.politicalSystem} onChange={e => setNewTarget({...newTarget, politicalSystem: e.target.value})}>
            {politicalSystems.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          <select className="p-3 rounded-xl border" value={newTarget.syndrome} onChange={e => setNewTarget({...newTarget, syndrome: e.target.value})}>
            <option value="">Chọn hội chứng</option>
            {syndromes.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <button onClick={addTarget} className="bg-indigo-600 text-white p-3 rounded-xl flex items-center justify-center gap-2">
            <Plus size={20} /> Thêm
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {targets.map(target => {
          const { techniques, articles, suggestedSyndromes } = getAnalysis(target);
          return (
            <div key={target.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{target.name}</h3>
                <button onClick={() => saveTargets(targets.filter(t => t.id !== target.id))} className="text-red-500"><Trash2 size={20} /></button>
              </div>
              <p className="text-sm text-slate-500 mb-2">{target.gender} | {target.age} tuổi | {target.profession} | {target.religion} | {target.politicalSystem}</p>
              {target.syndrome && <p className="text-sm font-bold text-indigo-600 mb-4">Hội chứng thủ công: {target.syndrome}</p>}
              
              {suggestedSyndromes.length > 0 && (
                <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-3 flex items-center gap-2">
                    <Plus size={16} /> Hội chứng đề xuất tự động:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {suggestedSyndromes.map((s, idx) => (
                      <div key={idx} className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-emerald-100 dark:border-emerald-800/50">
                        <p className="font-bold text-xs text-emerald-600">{s.name}</p>
                        <p className="text-[10px] text-slate-500 italic mt-1">{s.instruction}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-indigo-600"><AlertTriangle size={18} /> Kỹ thuật thao túng thường gặp:</h4>
                  <div className="space-y-3">
                    {techniques.map(tech => (
                      <div key={tech.id} className="p-4 bg-slate-50 rounded-xl border">
                        <h5 className="font-bold text-sm">{tech.title}</h5>
                        <p className="text-xs text-slate-600 mt-1">{tech.description}</p>
                        <p className="text-xs text-emerald-600 mt-2 font-medium flex items-center gap-1"><ShieldCheck size={14} /> {tech.defensiveStrategy}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-indigo-600"><BookOpen size={18} /> Bài viết liên quan:</h4>
                  <div className="space-y-2">
                    {articles.map(article => (
                      <a key={article.id} href={`/article/${article.id}`} className="block p-3 bg-slate-50 rounded-lg text-sm hover:bg-slate-100">
                        {typeof article.title === 'string' ? article.title : article.title.vi}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
