import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { influenceTechniques } from '../data/influenceTechniques';
import { PsychologyArticle, psychologyData } from '../data/psychologyData';
import { syndromes } from '../data/syndromes';
import { User, Plus, Trash2, BookOpen, AlertTriangle, ShieldCheck, Loader2, List, Brain, Key, ExternalLink, Info, Copy, Check, Sparkles, FileText, Table, Printer, Share2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'motion/react';
import * as docx from 'docx';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

interface TargetAudience {
  id: string;
  name: string;
  age: string;
  gender: string;
  profession: string;
  religion: string;
  politicalSystem: string;
  hobbies: string;
  desires: string;
  successTime: string;
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
  const [newTarget, setNewTarget] = useState({ name: '', age: '', gender: 'male', profession: 'sales', religion: 'none', politicalSystem: 'capitalism', hobbies: '', desires: '', successTime: '' });
  const [showLibrary, setShowLibrary] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || '');
  const [aiAnalyses, setAiAnalyses] = useState<Record<string, { syndrome: string; vulnerability: string; technique: string; duration: string; feasibility: number; plan: string[]; studies?: { title: string; url: string }[]; loading: boolean }>>({});
  const [showApiKeyGuide, setShowApiKeyGuide] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  // Quota tracking
  const [dailyCount, setDailyCount] = useState(() => {
    const saved = localStorage.getItem('gemini_daily_count');
    const savedDate = localStorage.getItem('gemini_daily_date');
    const today = new Date().toDateString();
    if (savedDate === today) return parseInt(saved || '0');
    return 0;
  });
  const [minuteCount, setMinuteCount] = useState(0);
  const [secondsToReset, setSecondsToReset] = useState(60);
  const [hoursToReset, setHoursToReset] = useState(24 - new Date().getHours());

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsToReset(prev => {
        if (prev <= 1) {
          setMinuteCount(0);
          return 60;
        }
        return prev - 1;
      });
      setHoursToReset(24 - new Date().getHours());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('gemini_daily_count', dailyCount.toString());
    localStorage.setItem('gemini_daily_date', new Date().toDateString());
  }, [dailyCount]);

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

  const handleSaveApiKey = (key: string) => {
    localStorage.setItem('gemini_api_key', key);
    setApiKey(key);
  };

  const runAiAnalysis = async (target: TargetAudience) => {
    if (!apiKey) return;
    
    setAiAnalyses(prev => ({
      ...prev,
      [target.id]: { syndrome: '', vulnerability: '', technique: '', duration: '', feasibility: 0, plan: [], loading: true }
    }));

    try {
      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = t('targetAnalysis.ai.prompt', {
        name: target.name || 'N/A',
        age: target.age || 'N/A',
        gender: target.gender || 'N/A',
        job: target.profession || 'N/A',
        religion: target.religion || 'N/A',
        politicalSystem: target.politicalSystem || 'N/A',
        hobbies: target.hobbies || 'N/A',
        desires: target.desires || 'N/A',
        lang: i18nInstance.language === 'vi' ? 'Tiếng Việt' : i18nInstance.language === 'zh' ? '中文' : 'English'
      });

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });
      
      const text = response.text;
      if (!text) throw new Error("Empty response from AI");
      
      const parsed = JSON.parse(text);
      
      setAiAnalyses(prev => ({
        ...prev,
        [target.id]: { 
          syndrome: parsed.syndrome || 'N/A',
          vulnerability: parsed.vulnerability || 'N/A',
          technique: parsed.technique || 'N/A',
          duration: parsed.duration || 'N/A',
          feasibility: Number(parsed.feasibility) || 0,
          plan: Array.isArray(parsed.plan) ? parsed.plan : [],
          studies: Array.isArray(parsed.studies) ? parsed.studies : [],
          loading: false 
        }
      }));
      setDailyCount(prev => prev + 1);
      setMinuteCount(prev => prev + 1);
    } catch (error: any) {
      console.error("AI Analysis failed:", error);
      const errorMsg = error?.message || "Unknown error";
      setAiAnalyses(prev => ({
        ...prev,
        [target.id]: { 
          syndrome: 'Error',
          vulnerability: `Error: ${errorMsg}`, 
          technique: 'Error', 
          duration: 'Error',
          feasibility: 0,
          plan: [], 
          studies: [],
          loading: false 
        }
      }));
    }
  };

  const handleCopyResult = (targetId: string) => {
    const result = aiAnalyses[targetId];
    if (!result) return;
    const text = `${t('targetAnalysis.ai.syndrome')}: ${result.syndrome}\n${t('targetAnalysis.vulnerability')}: ${result.vulnerability}\n${t('targetAnalysis.technique')}: ${result.technique}\n${t('targetAnalysis.ai.duration')}: ${result.duration}\n${t('targetAnalysis.ai.feasibility')}: ${result.feasibility}%\n${t('targetAnalysis.actionPlan')}:\n${result.plan.map((s, i) => `${i + 1}. ${s}`).join('\n')}${result.studies && result.studies.length > 0 ? `\n\n${t('targetAnalysis.ai.studies')}:\n${result.studies.map(s => `${s.title}: ${s.url}`).join('\n')}` : ''}`;
    navigator.clipboard.writeText(text);
    setCopySuccess(targetId);
    setTimeout(() => setCopySuccess(null), 2000);
  };

  const exportToWord = (targetId: string) => {
    const target = targets.find(t => t.id === targetId);
    const result = aiAnalyses[targetId];
    if (!target || !result) return;

    const doc = new docx.Document({
      sections: [{
        properties: {},
        children: [
          new docx.Paragraph({
            text: t('targetAnalysis.analysisResult'),
            heading: docx.HeadingLevel.HEADING_1,
            alignment: docx.AlignmentType.CENTER,
          }),
          new docx.Paragraph({ text: "" }),
          new docx.Paragraph({ text: `${t('targetAnalysis.name')}: ${target.name}` }),
          new docx.Paragraph({ text: `${t('targetAnalysis.age')}: ${target.age}` }),
          new docx.Paragraph({ text: `${t('targetAnalysis.gender')}: ${t(`targetAnalysis.genders.${target.gender}`)}` }),
          new docx.Paragraph({ text: `${t('targetAnalysis.job')}: ${t(`targetAnalysis.professions.${target.profession}`)}` }),
          new docx.Paragraph({ text: `${t('targetAnalysis.desires')}: ${target.desires}` }),
          new docx.Paragraph({ text: `${t('targetAnalysis.successTime')}: ${target.successTime}` }),
          new docx.Paragraph({ text: "" }),
          new docx.Paragraph({ text: t('targetAnalysis.ai.resultTitle'), heading: docx.HeadingLevel.HEADING_2 }),
          new docx.Paragraph({ text: `${t('targetAnalysis.syndrome')}: ${result.syndrome}` }),
          new docx.Paragraph({ text: `${t('targetAnalysis.vulnerability')}: ${result.vulnerability}` }),
          new docx.Paragraph({ text: `${t('targetAnalysis.technique')}: ${result.technique}` }),
          new docx.Paragraph({ text: `${t('targetAnalysis.duration')}: ${result.duration}` }),
          new docx.Paragraph({ text: `${t('targetAnalysis.feasibility')}: ${result.feasibility}%` }),
          new docx.Paragraph({ text: "" }),
          new docx.Paragraph({ text: t('targetAnalysis.actionPlan'), heading: docx.HeadingLevel.HEADING_3 }),
          ...result.plan.map((step, i) => new docx.Paragraph({ text: `${i + 1}. ${step}`, bullet: { level: 0 } })),
          ...(result.studies && result.studies.length > 0 ? [
            new docx.Paragraph({ text: "" }),
            new docx.Paragraph({ text: t('targetAnalysis.ai.studies'), heading: docx.HeadingLevel.HEADING_3 }),
            ...result.studies.map(s => new docx.Paragraph({ text: `${s.title}: ${s.url}` }))
          ] : [])
        ],
      }],
    });

    docx.Packer.toBlob(doc).then(blob => {
      saveAs(blob, `Analysis_${target.name}.docx`);
    });
  };

  const exportToExcel = (targetId: string) => {
    const target = targets.find(t => t.id === targetId);
    const result = aiAnalyses[targetId];
    if (!target || !result) return;

    const data = [
      [t('targetAnalysis.category'), t('targetAnalysis.proposal')],
      [t('targetAnalysis.name'), target.name],
      [t('targetAnalysis.age'), target.age],
      [t('targetAnalysis.gender'), t(`targetAnalysis.genders.${target.gender}`)],
      [t('targetAnalysis.job'), t(`targetAnalysis.professions.${target.profession}`)],
      [t('targetAnalysis.desires'), target.desires],
      [t('targetAnalysis.successTime'), target.successTime],
      ["", ""],
      [t('targetAnalysis.syndrome'), result.syndrome],
      [t('targetAnalysis.vulnerability'), result.vulnerability],
      [t('targetAnalysis.technique'), result.technique],
      [t('targetAnalysis.duration'), result.duration],
      [t('targetAnalysis.feasibility'), `${result.feasibility}%`],
      ["", ""],
      [t('targetAnalysis.actionPlan'), ""],
      ...result.plan.map((step, i) => [`${i + 1}`, step]),
      ...(result.studies && result.studies.length > 0 ? [
        ["", ""],
        [t('targetAnalysis.ai.studies'), ""],
        ...result.studies.map(s => [s.title, s.url])
      ] : [])
    ];

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Analysis");
    XLSX.writeFile(wb, `Analysis_${target.name}.xlsx`);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = t('targetAnalysis.ai.share.message', { defaultValue: 'Check out this psychological analysis!' });
    
    let shareUrl = '';
    switch (platform) {
      case 'fb':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'x':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'insta':
        alert(t('targetAnalysis.ai.share.instaNote', { defaultValue: 'Instagram does not support direct link sharing. Please copy the link manually.' }));
        return;
      case 'zalo':
        shareUrl = `https://zalo.me/share?url=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  const addTarget = () => {
    if (!newTarget.name) return;
    const target: TargetAudience = {
      ...newTarget,
      id: Date.now().toString(),
    };
    saveTargets([...targets, target]);
    setNewTarget({ name: '', age: '', gender: 'male', profession: 'sales', religion: 'none', politicalSystem: 'capitalism', hobbies: '', desires: '', successTime: '' });
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

      {/* API Key Section */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm mb-8 border border-indigo-100 dark:border-indigo-900/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-300 font-bold">
            <Key size={18} />
            {t('targetAnalysis.apiKey.label')}
          </div>
          <button 
            onClick={() => setShowApiKeyGuide(!showApiKeyGuide)}
            className="text-xs text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline"
          >
            <Info size={14} />
            {t('targetAnalysis.apiKey.howToGet')}
          </button>
        </div>

        {showApiKeyGuide && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="mb-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl text-xs text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            <p className="mb-2">{t('targetAnalysis.apiKey.guide')}</p>
            <a 
              href="https://aistudio.google.com/app/apikey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1"
            >
              Google AI Studio <ExternalLink size={12} />
            </a>
          </motion.div>
        )}

        <div className="flex gap-2 mb-4">
          <input 
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder={t('targetAnalysis.apiKey.placeholder')}
            className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 text-sm"
          />
          <button 
            onClick={() => handleSaveApiKey(apiKey)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors"
          >
            {t('targetAnalysis.apiKey.save')}
          </button>
        </div>

        {/* Quota Info */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-3">
            <Sparkles size={14} className="text-indigo-500" />
            {t('targetAnalysis.ai.quota.title')}
          </div>
          <div className="grid grid-cols-1 gap-2 text-[11px] text-slate-600 dark:text-slate-400">
            <div className="flex justify-between items-center">
              <span>{t('targetAnalysis.ai.quota.limit')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={minuteCount >= 15 ? 'text-red-500 font-bold' : ''}>
                {t('targetAnalysis.ai.quota.remainingMinute', { count: 15 - minuteCount })}
              </span>
              <span className="text-[10px] opacity-70">{t('targetAnalysis.ai.quota.resetMinute', { seconds: secondsToReset })}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={dailyCount >= 1500 ? 'text-red-500 font-bold' : ''}>
                {t('targetAnalysis.ai.quota.remainingDay', { count: 1500 - dailyCount })}
              </span>
              <span className="text-[10px] opacity-70">{t('targetAnalysis.ai.quota.resetDay', { hours: hoursToReset })}</span>
            </div>
          </div>
        </div>
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
            <input placeholder={t('targetAnalysis.desires')} className="p-3 rounded-xl border" value={newTarget.desires} onChange={e => setNewTarget({...newTarget, desires: e.target.value})} />
            <input placeholder={t('targetAnalysis.successTime')} className="p-3 rounded-xl border" value={newTarget.successTime} onChange={e => setNewTarget({...newTarget, successTime: e.target.value})} />
            
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
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => runAiAnalysis(target)}
                    disabled={!apiKey || aiAnalyses[target.id]?.loading}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl text-xs font-bold hover:bg-indigo-100 transition-all disabled:opacity-50"
                  >
                    {aiAnalyses[target.id]?.loading ? <Loader2 className="animate-spin" size={14} /> : <Brain size={14} />}
                    {t('targetAnalysis.mode.ai')}
                  </button>
                  <button onClick={() => saveTargets(targets.filter(t => t.id !== target.id))} className="text-slate-300 hover:text-red-500 transition-colors">
                    <Trash2 size={20} />
                  </button>
                </div>
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
                <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg sm:col-span-2 lg:col-span-1">
                  <span className="font-bold text-slate-400 w-20 uppercase text-[10px] tracking-wider">{t('targetAnalysis.desires')}:</span> 
                  <span className="text-slate-700 dark:text-slate-300 font-medium truncate" title={target.desires}>{target.desires || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg sm:col-span-2 lg:col-span-1">
                  <span className="font-bold text-slate-400 w-20 uppercase text-[10px] tracking-wider">{t('targetAnalysis.successTime')}:</span> 
                  <span className="text-slate-700 dark:text-slate-300 font-medium truncate" title={target.successTime}>{target.successTime || 'N/A'}</span>
                </div>
              </div>
              
              {aiAnalyses[target.id] && (
                <div className="mb-6 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-indigo-900 dark:text-indigo-300 text-sm flex items-center gap-2">
                      <Brain size={18} /> {t('targetAnalysis.mode.ai')}
                    </h4>
                    <button 
                      onClick={() => handleCopyResult(target.id)}
                      className="flex items-center gap-1 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      {copySuccess === target.id ? <Check size={12} /> : <Copy size={12} />}
                      {copySuccess === target.id ? t('targetAnalysis.ai.copySuccess') : t('targetAnalysis.ai.copyBtn')}
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{t('targetAnalysis.ai.syndrome')}</p>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-bold">{aiAnalyses[target.id].syndrome}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{t('targetAnalysis.ai.duration')}</p>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-bold">{aiAnalyses[target.id].duration}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{t('targetAnalysis.ai.feasibility')}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${aiAnalyses[target.id].feasibility}%` }}
                            className={`h-full ${
                              aiAnalyses[target.id].feasibility > 70 ? 'bg-emerald-500' : 
                              aiAnalyses[target.id].feasibility > 40 ? 'bg-amber-500' : 'bg-red-500'
                            }`}
                          />
                        </div>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{aiAnalyses[target.id].feasibility}%</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{t('targetAnalysis.vulnerability')}</p>
                      <p className="text-sm text-red-600 dark:text-red-400 font-medium">{aiAnalyses[target.id].vulnerability}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{t('targetAnalysis.technique')}</p>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 font-bold">{aiAnalyses[target.id].technique}</p>
                    </div>
                    
                    {/* Export & Share Buttons */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-4 border-t border-indigo-100 dark:border-indigo-800/30 print:hidden">
                      <button 
                        onClick={() => exportToWord(target.id)}
                        className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all"
                      >
                        <FileText size={14} className="text-blue-600" />
                        <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400 uppercase">{t('targetAnalysis.ai.exportWord')}</span>
                      </button>
                      <button 
                        onClick={() => exportToExcel(target.id)}
                        className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all"
                      >
                        <Table size={14} className="text-emerald-600" />
                        <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400 uppercase">{t('targetAnalysis.ai.exportExcel')}</span>
                      </button>
                      <button 
                        onClick={handlePrint}
                        className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all"
                      >
                        <Printer size={14} className="text-slate-600 dark:text-slate-400" />
                        <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400 uppercase">{t('targetAnalysis.ai.printA4')}</span>
                      </button>
                      <div className="relative group">
                        <button 
                          className="w-full h-full flex items-center gap-2 p-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all"
                        >
                          <Share2 size={14} className="text-indigo-600" />
                          <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400 uppercase">{t('targetAnalysis.ai.share')}</span>
                        </button>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 rounded-xl overflow-hidden z-50 min-w-[100px]">
                          <button onClick={() => handleShare('fb')} className="px-3 py-1.5 text-[10px] hover:bg-slate-50 dark:hover:bg-slate-700 text-left border-b border-slate-100 dark:border-slate-700">{t('targetAnalysis.ai.share.fb')}</button>
                          <button onClick={() => handleShare('x')} className="px-3 py-1.5 text-[10px] hover:bg-slate-50 dark:hover:bg-slate-700 text-left border-b border-slate-100 dark:border-slate-700">{t('targetAnalysis.ai.share.x')}</button>
                          <button onClick={() => handleShare('insta')} className="px-3 py-1.5 text-[10px] hover:bg-slate-50 dark:hover:bg-slate-700 text-left border-b border-slate-100 dark:border-slate-700">{t('targetAnalysis.ai.share.insta')}</button>
                          <button onClick={() => handleShare('zalo')} className="px-3 py-1.5 text-[10px] hover:bg-slate-50 dark:hover:bg-slate-700 text-left">{t('targetAnalysis.ai.share.zalo')}</button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{t('targetAnalysis.actionPlan')}</p>
                      <ul className="space-y-2 mt-2">
                        {aiAnalyses[target.id].plan.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {aiAnalyses[target.id].studies && aiAnalyses[target.id].studies!.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                          <BookOpen size={12} />
                          {t('targetAnalysis.ai.studies')}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {aiAnalyses[target.id].studies!.map((study, idx) => (
                            <a 
                              key={idx}
                              href={study.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all group"
                            >
                              <div className="flex items-start gap-2">
                                <ExternalLink size={10} className="mt-0.5 text-slate-400 group-hover:text-indigo-500 flex-shrink-0" />
                                <span className="text-[10px] text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 line-clamp-1">{study.title}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
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
