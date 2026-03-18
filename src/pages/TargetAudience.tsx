import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { influenceTechniques } from '../data/influenceTechniques';
import { PsychologyArticle, psychologyData } from '../data/psychologyData';
import { syndromes } from '../data/syndromes';
import { User, Plus, Trash2, BookOpen, AlertTriangle, ShieldCheck, Loader2, List } from 'lucide-react';

interface TargetAudience {
  id: string;
  name: string;
  age: string;
  gender: string;
  profession: string;
  religion: string;
  politicalSystem: string;
  hobbies: string;
}

const religions = ['buddhism', 'hinduism', 'christianity', 'none', 'taoism', 'judaism', 'islam', 'atheism', 'sikhism', 'shintoism'];
const genders = ['male', 'female', 'other', 'non-binary', 'preferNotToSay'];
const professions = ['sales', 'marketing', 'customerService', 'management', 'tech', 'education', 'medical', 'other', 'engineering', 'finance', 'art', 'legal', 'science'];
const politicalSystems = ['socialism', 'capitalism', 'constitutionalMonarchy', 'rebel', 'democracy', 'communism', 'anarchism'];

export const TargetAudience: React.FC = () => {
  const { t, i18n: i18nInstance } = useTranslation();
  const currentLang = i18nInstance.language as 'vi' | 'en' | 'zh';

  const [targets, setTargets] = useState<TargetAudience[]>([]);
  const [articles, setArticles] = useState<PsychologyArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTarget, setNewTarget] = useState({ name: '', age: '', gender: 'male', profession: 'sales', religion: 'none', politicalSystem: 'capitalism', hobbies: '' });
  const [showLibrary, setShowLibrary] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('target-audiences');
    if (saved) setTargets(JSON.parse(saved));

    const fetchArticles = () => {
      try {
        setLoading(true);
        setArticles(psychologyData);
      } catch (err) {
        console.error('Error fetching articles:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
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
    };
    saveTargets([...targets, target]);
    setNewTarget({ name: '', age: '', gender: 'male', profession: 'sales', religion: 'none', politicalSystem: 'capitalism', hobbies: '' });
  };

  const getAnalysis = (target: TargetAudience) => {
    const age = parseInt(target.age || '0');
    const profession = (target.profession || '').toLowerCase();
    const religion = target.religion || '';
    const politicalSystem = target.politicalSystem || '';
    const hobbies = (target.hobbies || '').toLowerCase();
    const gender = target.gender || '';

    const techniques = influenceTechniques.filter(tech => {
      const matchProfession = !profession || tech.targetDemographics.professions.includes('All') || tech.targetDemographics.professions.some(p => p.toLowerCase() === profession);
      const matchReligion = !religion || tech.targetDemographics.religions.includes('All') || tech.targetDemographics.religions.some(r => r.toLowerCase() === religion);
      const matchPoliticalSystem = !politicalSystem || tech.targetDemographics.politicalSystems.includes('All') || tech.targetDemographics.politicalSystems.some(p => p.toLowerCase() === politicalSystem);
      const matchGender = !gender || tech.targetDemographics.genders.includes('All') || tech.targetDemographics.genders.some(g => g.toLowerCase() === gender);
      
      const matchAge = !age || tech.targetDemographics.ageGroups.includes('All') || tech.targetDemographics.ageGroups.some(ag => {
          if (ag === "All") return true;
          const parts = ag.split('-');
          if (parts.length === 2) {
              const [min, max] = parts.map(Number);
              return age >= min && age <= max;
          }
          return false;
      });

      const matchHobbies = !hobbies || !tech.targetDemographics.interests || tech.targetDemographics.interests.includes('All') || tech.targetDemographics.interests.some(h => hobbies.includes(h.toLowerCase()));

      return matchProfession && matchReligion && matchPoliticalSystem && matchGender && matchAge && matchHobbies;
    });

    // Automatic Syndrome Suggestion Logic
    const suggestedSyndromes: { name: string, instruction: string }[] = syndromes.filter(s => {
      if (!s.targetDemographics) return false;
      const d = s.targetDemographics;
      const ageMatch = d.ageGroups.includes('All') || d.ageGroups.some(ag => {
        const parts = ag.split('-');
        if (parts.length === 2) {
          const [min, max] = parts.map(Number);
          return age >= min && age <= max;
        }
        return false;
      });
      const genderMatch = d.genders.includes('All') || d.genders.includes(gender);
      const jobMatch = d.professions.includes('All') || d.professions.some(p => profession.includes(p.toLowerCase()));
      const religionMatch = d.religions.includes('All') || d.religions.includes(religion);
      const politicalMatch = d.politicalSystems.includes('All') || d.politicalSystems.includes(politicalSystem);
      const interestMatch = !d.interests || d.interests.includes('All') || d.interests.some(i => hobbies.includes(i.toLowerCase()));
      
      return ageMatch && genderMatch && jobMatch && religionMatch && politicalMatch && interestMatch;
    }).map(s => ({
      name: getLocalized(s.name),
      instruction: getLocalized(s.description)
    }));

    // Legacy keyword-based matching for syndromes without demographics
    syndromes.forEach(s => {
      if (s.targetDemographics) return;
      const targetKeywords = getLocalized(s.target).toLowerCase();
      const profileText = `${profession} ${hobbies} ${gender} ${age}`.toLowerCase();
      const keywords = targetKeywords.split(/[,.;]/).map(k => k.trim()).filter(k => k.length > 3);
      if (keywords.some(k => profileText.includes(k))) {
        const localizedName = getLocalized(s.name);
        if (!suggestedSyndromes.find(ss => ss.name === localizedName)) {
          suggestedSyndromes.push({ 
            name: localizedName, 
            instruction: getLocalized(s.description) 
          });
        }
      }
    });

    const relatedArticles = profession ? articles.filter(a => 
      getLocalized(a.category).toLowerCase().includes(profession) || 
      getLocalized(a.title).toLowerCase().includes(profession)
    ) : [];

    return { techniques, articles: relatedArticles, suggestedSyndromes };
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t('targetAudience.title')}</h1>
        <button onClick={() => setShowLibrary(!showLibrary)} className="bg-slate-200 dark:bg-slate-700 p-3 rounded-xl flex items-center gap-2">
          <List size={20} /> {showLibrary ? t('targetAudience.hideLibrary') : t('targetAudience.showLibrary')}
        </button>
      </div>
      
      {showLibrary && (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">{t('targetAudience.library')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">{t('targetAudience.syndromes')}</h3>
              <div className="max-h-60 overflow-y-auto space-y-2">
                {syndromes.map(s => <div key={s.id} className="p-2 bg-slate-50 rounded text-sm">{getLocalized(s.name)}</div>)}
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-3">{t('targetAudience.techniques')}</h3>
              <div className="max-h-60 overflow-y-auto space-y-2">
                {influenceTechniques.map(t => <div key={t.id} className="p-2 bg-slate-50 rounded text-sm">{getLocalized(t.title)}</div>)}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">{t('targetAudience.addNew')}</h2>
        {loading ? (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="animate-spin text-indigo-600" />
          </div>
        ) : (
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
            
            <button onClick={addTarget} className="bg-indigo-600 text-white p-3 rounded-xl flex items-center justify-center gap-2">
              <Plus size={20} /> {t('targetAudience.addBtn')}
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {targets.map(target => {
          const { techniques, articles, suggestedSyndromes } = getAnalysis(target);
          return (
            <div key={target.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                    {target.name.charAt(0).toUpperCase()}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{target.name}</h3>
                </div>
                <button onClick={() => saveTargets(targets.filter(t => t.id !== target.id))} className="text-slate-300 hover:text-red-500 transition-colors">
                  <Trash2 size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                  <span className="font-bold text-slate-400 w-20 uppercase text-[10px] tracking-wider">{t('targetAnalysis.age')}:</span> 
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{target.age || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                  <span className="font-bold text-slate-400 w-20 uppercase text-[10px] tracking-wider">{t('targetAnalysis.gender')}:</span> 
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{target.gender ? t(`targetAnalysis.genders.${target.gender}`) : 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                  <span className="font-bold text-slate-400 w-20 uppercase text-[10px] tracking-wider">{t('targetAnalysis.job')}:</span> 
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{target.profession ? t(`targetAnalysis.professions.${target.profession}`) : 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                  <span className="font-bold text-slate-400 w-20 uppercase text-[10px] tracking-wider">{t('targetAnalysis.religion')}:</span> 
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{target.religion ? t(`targetAnalysis.religions.${target.religion}`) : 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                  <span className="font-bold text-slate-400 w-20 uppercase text-[10px] tracking-wider">{t('targetAnalysis.politicalSystem')}:</span> 
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{target.politicalSystem ? t(`targetAnalysis.politicalSystems.${target.politicalSystem}`) : 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg sm:col-span-2 lg:col-span-1">
                  <span className="font-bold text-slate-400 w-20 uppercase text-[10px] tracking-wider">{t('targetAnalysis.hobbies')}:</span> 
                  <span className="text-slate-700 dark:text-slate-300 font-medium truncate" title={target.hobbies}>{target.hobbies || 'N/A'}</span>
                </div>
              </div>
              
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
                        <h5 className="font-bold text-sm">{getLocalized(tech.title)}</h5>
                        <p className="text-xs text-slate-600 mt-1">{getLocalized(tech.description)}</p>
                        <p className="text-xs text-emerald-600 mt-2 font-medium flex items-center gap-1"><ShieldCheck size={14} /> {getLocalized(tech.defensiveStrategy)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-indigo-600"><BookOpen size={18} /> {t('targetAudience.relatedArticles')}</h4>
                  <div className="space-y-2">
                    {articles.map(article => (
                      <Link key={article.id} to={`/article/${article.id}`} className="block p-3 bg-slate-50 rounded-lg text-sm hover:bg-slate-100">
                        {getLocalized(article.title)}
                      </Link>
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
