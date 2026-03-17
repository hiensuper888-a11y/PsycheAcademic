import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  hobbies: string;
  syndrome: string;
  savedTechniques: string[];
}

const religions = ['buddhism', 'hinduism', 'christianity', 'none', 'taoism', 'judaism', 'islam'];
const genders = ['male', 'female', 'other'];
const professions = ['sales', 'marketing', 'customerService', 'management', 'tech', 'education', 'medical', 'other'];
const politicalSystems = ['socialism', 'capitalism', 'constitutionalMonarchy', 'rebel'];

export const TargetAudience: React.FC = () => {
  const { t, i18n: i18nInstance } = useTranslation();
  const currentLang = i18nInstance.language as 'vi' | 'en' | 'zh';

  const [targets, setTargets] = useState<TargetAudience[]>([]);
  const [newTarget, setNewTarget] = useState({ name: '', age: '', gender: 'male', profession: 'sales', religion: 'none', politicalSystem: 'capitalism', hobbies: '', syndrome: '' });

  useEffect(() => {
    const saved = localStorage.getItem('target-audiences');
    if (saved) setTargets(JSON.parse(saved));
  }, []);

  const getLocalized = (field: any) => {
    if (typeof field === 'string') return field;
    if (field && typeof field === 'object') {
      return field[currentLang] || field['en'] || field['vi'] || '';
    }
    return '';
  };

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
    setNewTarget({ name: '', age: '', gender: 'male', profession: 'sales', religion: 'none', politicalSystem: 'capitalism', hobbies: '', syndrome: '' });
  };

  const getAnalysis = (target: TargetAudience) => {
    const age = parseInt(target.age || '0');
    const profession = target.profession.toLowerCase();
    const religion = target.religion;
    const politicalSystem = target.politicalSystem;
    const hobbies = target.hobbies.toLowerCase();

    const techniques = influenceTechniques.filter(tech => 
      (tech.targetDemographics.professions.includes(target.profession) || tech.targetDemographics.professions.includes('All')) &&
      (tech.targetDemographics.religions.includes(target.religion) || tech.targetDemographics.religions.includes('All')) &&
      (tech.targetDemographics.politicalSystems.includes(target.politicalSystem) || tech.targetDemographics.politicalSystems.includes('All'))
    );

    // Automatic Syndrome Suggestion Logic
    const suggestedSyndromes: { name: string, instruction: string }[] = [];
    const suggest = (name: string, instruction: string) => {
      if (!suggestedSyndromes.find(s => s.name === name)) {
        suggestedSyndromes.push({ name, instruction });
      }
    };

    if (age > 0 && age < 25) {
      suggest("Imposter Syndrome", t('targetAnalysis.strategy.imposterInstructionFull'));
      suggest("FOMO", t('targetAnalysis.strategy.fomoInstructionFull'));
    } else if (age >= 25 && age <= 45) {
      suggest("Dunning-Kruger Effect", t('targetAnalysis.strategy.dunningKrugerInstructionFull'));
    }

    if (profession.includes('management') || profession.includes('sales')) {
      suggest("Halo Effect", t('targetAnalysis.strategy.haloInstructionFull'));
    }

    if (religion && religion !== 'none') {
      suggest("Authority Bias", t('targetAnalysis.strategy.authorityInstructionFull'));
    }

    if (politicalSystem === 'socialism') {
      suggest("Bandwagon Effect", t('targetAnalysis.strategy.bandwagonInstructionFull'));
    }

    if (hobbies.includes('game') || hobbies.includes('trò chơi') || hobbies.includes('gaming')) {
      suggest("Zeigarnik Effect", t('targetAnalysis.strategy.zeigarnikInstruction'));
    }

    if (hobbies.includes('đọc sách') || hobbies.includes('kiến thức') || hobbies.includes('reading')) {
      suggest("Confirmation Bias", t('targetAnalysis.strategy.confirmationInstructionFull'));
    }
    
    const articles = psychologyData.filter(a => 
      getLocalized(a.category).toLowerCase().includes(target.profession.toLowerCase()) || 
      getLocalized(a.title).toLowerCase().includes(target.profession.toLowerCase())
    );

    return { techniques, articles, suggestedSyndromes };
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">{t('targetAudience.title')}</h1>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">{t('targetAudience.addNew')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input placeholder={t('targetAudience.name')} className="p-3 rounded-xl border" value={newTarget.name} onChange={e => setNewTarget({...newTarget, name: e.target.value})} />
          <input type="number" placeholder={t('targetAudience.age')} className="p-3 rounded-xl border" value={newTarget.age} onChange={e => setNewTarget({...newTarget, age: e.target.value})} />
          <select className="p-3 rounded-xl border" value={newTarget.gender} onChange={e => setNewTarget({...newTarget, gender: e.target.value})}>
            {genders.map(g => <option key={g} value={g}>{t(`targetAnalysis.genders.${g}`)}</option>)}
          </select>
          <select className="p-3 rounded-xl border" value={newTarget.profession} onChange={e => setNewTarget({...newTarget, profession: e.target.value})}>
            {professions.map(p => <option key={p} value={p}>{t(`targetAnalysis.professions.${p}`)}</option>)}
          </select>
          <select className="p-3 rounded-xl border" value={newTarget.religion} onChange={e => setNewTarget({...newTarget, religion: e.target.value})}>
            {religions.map(r => <option key={r} value={r}>{t(`targetAnalysis.religions.${r}`)}</option>)}
          </select>
          <select className="p-3 rounded-xl border" value={newTarget.politicalSystem} onChange={e => setNewTarget({...newTarget, politicalSystem: e.target.value})}>
            {politicalSystems.map(p => <option key={p} value={p}>{t(`targetAnalysis.politicalSystems.${p}`)}</option>)}
          </select>
          <input placeholder={t('targetAudience.hobbies')} className="p-3 rounded-xl border" value={newTarget.hobbies} onChange={e => setNewTarget({...newTarget, hobbies: e.target.value})} />
          <select className="p-3 rounded-xl border" value={newTarget.syndrome} onChange={e => setNewTarget({...newTarget, syndrome: e.target.value})}>
            <option value="">{t('targetAudience.selectSyndrome')}</option>
            {syndromes.map(s => <option key={getLocalized(s)} value={getLocalized(s)}>{getLocalized(s)}</option>)}
          </select>
          <button onClick={addTarget} className="bg-indigo-600 text-white p-3 rounded-xl flex items-center justify-center gap-2">
            <Plus size={20} /> {t('targetAudience.addBtn')}
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
              <p className="text-sm text-slate-500 mb-2">{t(`targetAnalysis.genders.${target.gender}`)} | {target.age} {t('targetAudience.yearsOld')} | {t(`targetAnalysis.professions.${target.profession}`)} | {t(`targetAnalysis.religions.${target.religion}`)} | {t(`targetAnalysis.politicalSystems.${target.politicalSystem}`)}</p>
              {target.hobbies && <p className="text-sm text-slate-500 mb-2 italic">{t('targetAnalysis.hobbies')}: {target.hobbies}</p>}
              {target.syndrome && <p className="text-sm font-bold text-indigo-600 mb-4">{t('targetAudience.manualSyndrome')} {target.syndrome}</p>}
              
              {suggestedSyndromes.length > 0 && (
                <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-3 flex items-center gap-2">
                    <Plus size={16} /> {t('targetAudience.autoSyndrome')}
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
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-indigo-600"><AlertTriangle size={18} /> {t('targetAudience.manipulationTech')}</h4>
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
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-indigo-600"><BookOpen size={18} /> {t('targetAudience.relatedArticles')}</h4>
                  <div className="space-y-2">
                    {articles.map(article => (
                      <a key={article.id} href={`/article/${article.id}`} className="block p-3 bg-slate-50 rounded-lg text-sm hover:bg-slate-100">
                        {getLocalized(article.title)}
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
