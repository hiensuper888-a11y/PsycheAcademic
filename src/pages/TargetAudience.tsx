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
  syndrome: string;
  savedTechniques: string[];
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
  const [newTarget, setNewTarget] = useState({ name: '', age: '', gender: 'male', profession: 'sales', religion: 'none', politicalSystem: 'capitalism', hobbies: '', syndrome: '', savedTechniques: [] as string[] });
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
    setNewTarget({ name: '', age: '', gender: 'male', profession: 'sales', religion: 'none', politicalSystem: 'capitalism', hobbies: '', syndrome: '', savedTechniques: [] });
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
    const suggestedSyndromes: { name: string, instruction: string }[] = [];
    const suggest = (id: string, instruction?: string) => {
      const syndromeObj = syndromes.find(s => s.id === id || s.name.en === id);
      if (!syndromeObj) return;
      
      const localizedName = getLocalized(syndromeObj.name);
      const finalInstruction = instruction || t('targetAnalysis.strategy.syndrome.genericPlan', { syndrome: localizedName });
      
      if (!suggestedSyndromes.find(s => s.name === localizedName)) {
        suggestedSyndromes.push({ name: localizedName, instruction: finalInstruction });
      }
    };

    // Dynamic Syndrome Suggestion based on keywords in target profile
    syndromes.forEach(s => {
      const targetKeywords = getLocalized(s.target).toLowerCase();
      const profileText = `${profession} ${hobbies} ${gender} ${age}`.toLowerCase();
      
      // Check if any keyword from syndrome target matches profile
      const keywords = targetKeywords.split(/[,.;]/).map(k => k.trim()).filter(k => k.length > 3);
      if (keywords.some(k => profileText.includes(k))) {
        suggest(s.id);
      }
    });

    if (age > 0 && age < 25) {
      suggest("imposter-syndrome", t('targetAnalysis.strategy.imposterInstructionFull'));
      suggest("fomo", t('targetAnalysis.strategy.fomoInstructionFull'));
    } else if (age >= 25 && age <= 45) {
      suggest("dunning-kruger", t('targetAnalysis.strategy.dunningKrugerInstructionFull'));
      suggest("sunk-cost", t('targetAnalysis.strategy.sunkCostInstruction'));
    }

    if (profession.includes('management') || profession.includes('sales')) {
      suggest("halo-effect", t('targetAnalysis.strategy.haloInstructionFull'));
    }

    if (religion && religion !== 'none') {
      suggest("authority-bias", t('targetAnalysis.strategy.authorityInstructionFull'));
    }

    if (politicalSystem === 'socialism') {
      suggest("bandwagon-effect", t('targetAnalysis.strategy.bandwagonInstructionFull'));
    }

    if (hobbies.includes('game') || hobbies.includes('trò chơi') || hobbies.includes('gaming')) {
      suggest("zeigarnik-effect", t('targetAnalysis.strategy.zeigarnikInstruction'));
    }

    if (hobbies.includes('đọc sách') || hobbies.includes('kiến thức') || hobbies.includes('reading')) {
      suggest("confirmation-bias", t('targetAnalysis.strategy.confirmationInstructionFull'));
    }

    if (target.syndrome) {
      suggest(target.syndrome);
    }
    
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
            
            {newTarget.name && newTarget.age && newTarget.gender && newTarget.profession && newTarget.hobbies && newTarget.religion && newTarget.politicalSystem && (
              <>
                <div className="flex flex-col gap-2">
                  <label>{t('targetAnalysis.selectTechniques')}</label>
                  <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto border p-2 rounded-xl">
                    {influenceTechniques.map(t => (
                      <label key={t.id} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={newTarget.savedTechniques.includes(t.id)}
                          onChange={e => {
                            const techniques = e.target.checked
                              ? [...newTarget.savedTechniques, t.id]
                              : newTarget.savedTechniques.filter(id => id !== t.id);
                            setNewTarget({...newTarget, savedTechniques: techniques});
                          }}
                        />
                        {getLocalized(t.title)}
                      </label>
                    ))}
                  </div>
                </div>
                <select className="p-3 rounded-xl border" value={newTarget.syndrome} onChange={e => setNewTarget({...newTarget, syndrome: e.target.value})}>
                  <option value="">{t('targetAnalysis.selectSyndrome')}</option>
                  {syndromes.map(s => (
                    <option key={s.id} value={s.id}>
                      {getLocalized(s.name)}
                    </option>
                  ))}
                </select>
              </>
            )}
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
            <div key={target.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{target.name}</h3>
                <button onClick={() => saveTargets(targets.filter(t => t.id !== target.id))} className="text-red-500"><Trash2 size={20} /></button>
              </div>
              <p className="text-sm text-slate-500 mb-2">{target.gender ? t(`targetAnalysis.genders.${target.gender}`) : 'N/A'} | {target.age || 'N/A'} {t('targetAudience.yearsOld')} | {target.profession ? t(`targetAnalysis.professions.${target.profession}`) : 'N/A'} | {target.religion ? t(`targetAnalysis.religions.${target.religion}`) : 'N/A'} | {target.politicalSystem ? t(`targetAnalysis.politicalSystems.${target.politicalSystem}`) : 'N/A'}</p>
              {target.hobbies && <p className="text-sm text-slate-500 mb-2 italic">{t('targetAnalysis.hobbies')}: {target.hobbies}</p>}
              {target.syndrome && <p className="text-sm font-bold text-indigo-600 mb-4">{t('targetAudience.manualSyndrome')} {target.syndrome ? (syndromes.find(s => s.id === target.syndrome || getLocalized(s.name) === target.syndrome) ? getLocalized(syndromes.find(s => s.id === target.syndrome || getLocalized(s.name) === target.syndrome)?.name) : target.syndrome) : ''}</p>}
              {target.savedTechniques && target.savedTechniques.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t('targetAnalysis.savedTechniques')}:</p>
                  <div className="flex flex-wrap gap-2">
                    {target.savedTechniques.map(techId => {
                      const tech = influenceTechniques.find(t => t.id === techId);
                      return tech ? (
                        <span key={techId} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs">{getLocalized(tech.title)}</span>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
              
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
