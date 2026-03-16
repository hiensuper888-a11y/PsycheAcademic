import React, { useState, useEffect } from 'react';
import { influenceTechniques } from '../data/influenceTechniques';
import { psychologyData } from '../data/psychologyData';
import { User, Plus, Trash2, BookOpen, AlertTriangle, ShieldCheck } from 'lucide-react';

interface TargetAudience {
  id: string;
  name: string;
  ageGroup: string;
  gender: string;
  profession: string;
  religion: string;
  savedTechniques: string[];
}

const religions = ['Phật giáo', 'Ấn độ giáo', 'Thiên chúa giáo', 'Không tôn giáo', 'Đạo giáo', 'Do thái giáo', 'Hồi giáo'];
const genders = ['Nam', 'Nữ', 'Khác'];
const professions = ['Sales', 'Marketing', 'Customer Service', 'Management', 'Kỹ thuật', 'Giáo dục', 'Y tế', 'Khác'];

export const TargetAudience: React.FC = () => {
  const [targets, setTargets] = useState<TargetAudience[]>([]);
  const [newTarget, setNewTarget] = useState({ name: '', ageGroup: 'All', gender: 'Nam', profession: 'Sales', religion: 'Không tôn giáo' });

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
    setNewTarget({ name: '', ageGroup: 'All', gender: 'Nam', profession: 'Sales', religion: 'Không tôn giáo' });
  };

  const getAnalysis = (target: TargetAudience) => {
    const techniques = influenceTechniques.filter(t => 
      t.targetDemographics.professions.includes(target.profession) || t.targetDemographics.professions.includes('All')
    );
    
    const articles = psychologyData.filter(a => 
      a.category.en.toLowerCase().includes(target.profession.toLowerCase()) || a.title.en.toLowerCase().includes(target.profession.toLowerCase())
    );

    return { techniques, articles };
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Quản lý Đối tượng Mục tiêu</h1>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">Thêm đối tượng mới</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input placeholder="Tên đối tượng" className="p-3 rounded-xl border" value={newTarget.name} onChange={e => setNewTarget({...newTarget, name: e.target.value})} />
          <select className="p-3 rounded-xl border" value={newTarget.gender} onChange={e => setNewTarget({...newTarget, gender: e.target.value})}>
            {genders.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
          <select className="p-3 rounded-xl border" value={newTarget.profession} onChange={e => setNewTarget({...newTarget, profession: e.target.value})}>
            {professions.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          <select className="p-3 rounded-xl border" value={newTarget.religion} onChange={e => setNewTarget({...newTarget, religion: e.target.value})}>
            {religions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          <button onClick={addTarget} className="bg-indigo-600 text-white p-3 rounded-xl flex items-center justify-center gap-2">
            <Plus size={20} /> Thêm
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {targets.map(target => {
          const { techniques, articles } = getAnalysis(target);
          return (
            <div key={target.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{target.name}</h3>
                <button onClick={() => saveTargets(targets.filter(t => t.id !== target.id))} className="text-red-500"><Trash2 size={20} /></button>
              </div>
              <p className="text-sm text-slate-500 mb-6">{target.gender} | {target.profession} | {target.religion}</p>
              
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
