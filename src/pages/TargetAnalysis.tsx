import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Briefcase, Heart, Activity, Target, ShieldAlert, Sparkles, Save, Trash2, Plus, Brain, Key, ExternalLink, Info, Loader2, BookOpen, Copy, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '../components/Tooltip';
import { syndromes } from '../data/syndromes';
import { influenceTechniques } from '../data/influenceTechniques';
import { GoogleGenAI } from "@google/genai";

interface TargetProfile {
  id: string;
  name: string;
  age: string;
  gender: string;
  job: string;
  religion: string;
  politicalSystem: string;
  hobbies: string;
}

const religions = ['buddhism', 'hinduism', 'christianity', 'none', 'taoism', 'judaism', 'islam'];
const politicalSystems = ['socialism', 'capitalism', 'constitutionalMonarchy', 'rebel'];

import { PsychologyArticle, psychologyData } from '../data/psychologyData';

export const TargetAnalysis: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [targets, setTargets] = useState<TargetProfile[]>([]);
  const [articles, setArticles] = useState<PsychologyArticle[]>([]);
  const [analysisMode, setAnalysisMode] = useState<'database' | 'ai'>('database');
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || '');
  const [isAiAnalyzing, setIsAiAnalyzing] = useState(false);
  const [aiResult, setAiResult] = useState<{ vulnerability: string; technique: string; plan: string[] } | null>(null);
  const [showApiKeyGuide, setShowApiKeyGuide] = useState(false);
  const [sessionRequests, setSessionRequests] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);
  
  useEffect(() => {
    setArticles(psychologyData);
  }, []);
  const [currentTarget, setCurrentTarget] = useState<TargetProfile>({
    id: '',
    name: '',
    age: '',
    gender: '',
    job: '',
    religion: '',
    politicalSystem: '',
    hobbies: ''
  });

  const getLocalized = (obj: any) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[i18n.language] || obj['vi'] || '';
  };

  const [showPlan, setShowPlan] = useState<string | null>(null);

  const handleSaveTarget = () => {
    if (!currentTarget.name) return;
    const newTarget = { ...currentTarget, id: Date.now().toString() };
    setTargets([...targets, newTarget]);
    setCurrentTarget({ id: '', name: '', age: '', gender: '', job: '', religion: '', politicalSystem: '', hobbies: '' });
  };

  const handleDeleteTarget = (id: string) => {
    setTargets(targets.filter(t => t.id !== id));
    if (showPlan === id) setShowPlan(null);
  };

  const handleSaveApiKey = (key: string) => {
    localStorage.setItem('gemini_api_key', key);
    setApiKey(key);
  };

  const runAiAnalysis = async (target: TargetProfile) => {
    if (!apiKey) return;
    setIsAiAnalyzing(true);
    try {
      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = t('targetAnalysis.ai.prompt', {
        name: target.name || 'N/A',
        age: target.age || 'N/A',
        gender: target.gender || 'N/A',
        job: target.job || 'N/A',
        religion: target.religion || 'N/A',
        politicalSystem: target.politicalSystem || 'N/A',
        hobbies: target.hobbies || 'N/A',
        lang: i18n.language === 'vi' ? 'Tiếng Việt' : i18n.language === 'zh' ? '中文' : 'English'
      });

      const result = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: [{ parts: [{ text: prompt }] }]
      });
      
      const text = result.text;
      
      // Clean JSON if needed
      const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
      const parsed = JSON.parse(jsonStr);
      setAiResult(parsed);
      setSessionRequests(prev => prev + 1);
    } catch (error) {
      console.error("AI Analysis failed:", error);
      alert(t('targetAnalysis.ai.error'));
    } finally {
      setIsAiAnalyzing(false);
    }
  };

  useEffect(() => {
    // Auto-analysis removed to save quota and allow explicit trigger
  }, [currentTarget, analysisMode, apiKey]);

  const handleCopyResult = () => {
    if (!aiResult) return;
    const text = `${t('targetAnalysis.vulnerability')}: ${aiResult.vulnerability}\n${t('targetAnalysis.technique')}: ${aiResult.technique}\n${t('targetAnalysis.actionPlan')}:\n${aiResult.plan.map((s, i) => `${i + 1}. ${s}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const getInfluenceStrategy = (target: Partial<TargetProfile>) => {
    const age = parseInt(target.age || '0');
    const gender = target.gender || '';
    const job = (target.job || '').toLowerCase();
    const hobbies = (target.hobbies || '').toLowerCase();
    const religion = target.religion || '';
    const politicalSystem = target.politicalSystem || '';
    
    let strategy = {
      vulnerability: t('targetAnalysis.strategy.noInfo'),
      technique: t('targetAnalysis.strategy.undefined'),
      plan: [] as string[],
      suggestedSyndromes: [] as { name: string, instruction: string }[],
      suggestedTechniques: [] as { title: string, description: string, defensive: string }[],
      suggestedArticles: [] as PsychologyArticle[]
    };

    if (!age && !gender && !job && !hobbies && !religion && !politicalSystem) return strategy;

    // Automatic Syndrome Suggestion Logic
    const ageNum = parseInt(target.age || '0');
    const getGeneration = (age: number) => {
      if (age >= 14 && age <= 29) return "Gen Z";
      if (age >= 30 && age <= 45) return "Millennials";
      if (age >= 46 && age <= 61) return "Gen X";
      if (age >= 62 && age <= 80) return "Baby Boomers";
      return "Other";
    };
    const generation = getGeneration(ageNum);

    const matchedSyndromes = syndromes.filter(s => {
      if (!s.targetDemographics) return false;
      const d = s.targetDemographics;
      const ageMatch = d.ageGroups.includes('All') || d.ageGroups.includes(generation) || d.ageGroups.some(ag => {
        const parts = ag.split('-');
        if (parts.length === 2) {
          const [min, max] = parts.map(Number);
          return ageNum >= min && ageNum <= max;
        }
        return false;
      });
      const genderMatch = d.genders.includes('All') || d.genders.includes(gender);
      const jobMatch = d.professions.includes('All') || d.professions.some(p => job.includes(p.toLowerCase()));
      const religionMatch = d.religions.includes('All') || d.religions.includes(religion);
      const politicalMatch = d.politicalSystems.includes('All') || d.politicalSystems.includes(politicalSystem);
      const interestMatch = !d.interests || d.interests.includes('All') || d.interests.some(i => hobbies.includes(i.toLowerCase()));
      
      return ageMatch && genderMatch && jobMatch && religionMatch && politicalMatch && interestMatch;
    });

    strategy.suggestedSyndromes = matchedSyndromes.map(s => ({
      name: getLocalized(s.name),
      instruction: getLocalized(s.description)
    }));

    // Legacy keyword-based matching for syndromes without demographics
    syndromes.forEach(s => {
      if (s.targetDemographics) return;
      const targetKeywords = getLocalized(s.target).toLowerCase();
      const profileText = `${job} ${hobbies} ${gender} ${ageNum}`.toLowerCase();
      const keywords = targetKeywords.split(/[,.;]/).map(k => k.trim()).filter(k => k.length > 3);
      if (keywords.some(k => profileText.includes(k))) {
        const localizedName = getLocalized(s.name);
        if (!strategy.suggestedSyndromes.find(ss => ss.name === localizedName)) {
          strategy.suggestedSyndromes.push({ 
            name: localizedName, 
            instruction: getLocalized(s.description) 
          });
        }
      }
    });

    if (strategy.suggestedSyndromes.length > 0) {
      strategy.vulnerability = strategy.suggestedSyndromes.map(s => s.name).join(', ');
      strategy.suggestedSyndromes.forEach(s => {
        strategy.plan.push(s.instruction);
      });
    }

    // Automatic Technique Suggestion Logic
    const matchedTechniques = influenceTechniques.filter(t => {
      const d = t.targetDemographics;
      
      const ageMatch = d.ageGroups.includes('All') || d.ageGroups.includes(generation) || d.ageGroups.some(ag => {
        const parts = ag.split('-');
        if (parts.length === 2) {
          const [min, max] = parts.map(Number);
          return ageNum >= min && ageNum <= max;
        }
        return false;
      });

      const genderMatch = d.genders.includes('All') || d.genders.includes(gender);
      const jobMatch = d.professions.includes('All') || d.professions.some(p => job.includes(p.toLowerCase()));
      const religionMatch = d.religions.includes('All') || d.religions.includes(religion);
      const politicalMatch = d.politicalSystems.includes('All') || d.politicalSystems.includes(politicalSystem);
      const interestMatch = !d.interests || d.interests.includes('All') || d.interests.some(i => hobbies.includes(i.toLowerCase()));

      return ageMatch && genderMatch && jobMatch && religionMatch && politicalMatch && interestMatch;
    });

    strategy.suggestedTechniques = matchedTechniques.map(tech => ({
      title: getLocalized(tech.title),
      description: getLocalized(tech.description),
      defensive: getLocalized(tech.defensiveStrategy)
    }));

    // Fallback: Dynamic Technique Suggestion based on keywords in target profile if no direct matches
    if (strategy.suggestedTechniques.length === 0) {
      const profileText = `${job} ${hobbies} ${gender} ${ageNum} ${religion} ${politicalSystem}`.toLowerCase();
      influenceTechniques.forEach(t => {
        const targetKeywords = `${t.targetDemographics.professions.join(' ')} ${t.targetDemographics.interests?.join(' ') || ''} ${t.targetDemographics.religions.join(' ')} ${t.targetDemographics.politicalSystems.join(' ')}`.toLowerCase();
        const keywords = targetKeywords.split(/[,.;\s]/).map(k => k.trim()).filter(k => k.length > 3);
        if (keywords.some(k => profileText.includes(k))) {
          const localizedTitle = getLocalized(t.title);
          if (!strategy.suggestedTechniques.find(st => st.title === localizedTitle)) {
            strategy.suggestedTechniques.push({ 
              title: localizedTitle, 
              description: getLocalized(t.description), 
              defensive: getLocalized(t.defensiveStrategy) 
            });
          }
        }
      });
    }

    if (strategy.suggestedTechniques.length > 0) {
      strategy.technique = strategy.suggestedTechniques.map(t => t.title).join(' + ');
      strategy.suggestedTechniques.forEach(t => {
        strategy.plan.push(t.description);
      });
    }

    // Age & Gender based logic
    if (age > 0 && age < 25) {
      if (strategy.vulnerability === t('targetAnalysis.strategy.noInfo')) {
        strategy.vulnerability = gender === 'female' 
          ? t('targetAnalysis.strategy.vulnerability.femaleYoung') 
          : t('targetAnalysis.strategy.vulnerability.maleYoung');
      }
      if (strategy.technique === t('targetAnalysis.strategy.undefined')) {
        strategy.technique = t('targetAnalysis.strategy.technique.young');
      }
      strategy.plan.push(t('targetAnalysis.strategy.plan.young'));
    } else if (age >= 25 && age <= 50) {
      if (strategy.vulnerability === t('targetAnalysis.strategy.noInfo')) {
        strategy.vulnerability = gender === 'female'
          ? t('targetAnalysis.strategy.vulnerability.femaleMid')
          : t('targetAnalysis.strategy.vulnerability.maleMid');
      }
      if (strategy.technique === t('targetAnalysis.strategy.undefined')) {
        strategy.technique = t('targetAnalysis.strategy.technique.mid');
      }
      strategy.plan.push(t('targetAnalysis.strategy.plan.mid'));
    } else if (age > 50) {
      if (strategy.vulnerability === t('targetAnalysis.strategy.noInfo')) {
        strategy.vulnerability = t('targetAnalysis.strategy.vulnerability.old');
      }
      if (strategy.technique === t('targetAnalysis.strategy.undefined')) {
        strategy.technique = t('targetAnalysis.strategy.technique.old');
      }
      strategy.plan.push(t('targetAnalysis.strategy.plan.old'));
    }

    // Job-based logic integration (20 jobs)
    if (job) {
      const jobMap = [
        { keys: ['kinh doanh', 'bán hàng', 'sales', 'marketing'], key: 'sales' },
        { keys: ['kỹ thuật', 'it', 'lập trình', 'kỹ sư', 'tech'], key: 'tech' },
        { keys: ['giáo dục', 'giáo viên', 'giảng viên', 'education'], key: 'education' },
        { keys: ['y tế', 'bác sĩ', 'điều dưỡng', 'nha sĩ', 'medical'], key: 'medical' },
        { keys: ['quản lý', 'lãnh đạo', 'giám đốc', 'ceo', 'management'], key: 'management' },
        { keys: ['nghệ thuật', 'sáng tạo', 'thiết kế', 'họa sĩ', 'creative'], key: 'creative' },
        { keys: ['tài chính', 'kế toán', 'ngân hàng', 'kiểm toán', 'finance'], key: 'finance' },
        { keys: ['nhân sự', 'hr', 'tuyển dụng'], key: 'hr' },
        { keys: ['luật sư', 'pháp lý', 'công chứng', 'legal'], key: 'legal' },
        { keys: ['dịch vụ', 'cskh', 'nhà hàng', 'khách sạn', 'service'], key: 'service' },
        { keys: ['xây dựng', 'kiến trúc', 'thầu', 'construction'], key: 'construction' },
        { keys: ['nghiên cứu', 'khoa học', 'nhà khoa học', 'research'], key: 'research' },
        { keys: ['hành chính', 'văn phòng', 'thư ký', 'office'], key: 'office' },
        { keys: ['tự do', 'freelancer', 'mmo'], key: 'freelance' },
        { keys: ['nông nghiệp', 'nông dân', 'chăn nuôi', 'agriculture'], key: 'agriculture' },
        { keys: ['vận tải', 'lái xe', 'logistics', 'transport'], key: 'transport' },
        { keys: ['báo chí', 'phóng viên', 'truyền thông', 'media'], key: 'media' },
        { keys: ['công an', 'quân đội', 'bảo vệ', 'security'], key: 'security' },
        { keys: ['sinh viên', 'thực tập sinh', 'học sinh', 'student'], key: 'student' },
        { keys: ['nội trợ', 'ở nhà', 'housewife'], key: 'housewife' }
      ];

      let jobMatched = false;
      for (const j of jobMap) {
        if (j.keys.some(k => job.includes(k))) {
          strategy.technique += (strategy.technique === t('targetAnalysis.strategy.undefined') ? "" : " + ") + t(`targetAnalysis.strategy.job.${j.key}.tech`);
          strategy.plan.push(t(`targetAnalysis.strategy.job.${j.key}.plan`));
          jobMatched = true;
          break;
        }
      }
      if (!jobMatched && job.length > 2) {
        strategy.plan.push(t('targetAnalysis.strategy.jobBiasPlan', { job: target.job }));
      }
    }

    // Hobby-based logic integration (20 hobbies)
    if (hobbies) {
      const hobbyMap = [
        { keys: ['thể thao', 'gym', 'chạy bộ', 'bóng đá', 'cầu lông'], key: 'sports' },
        { keys: ['đọc sách', 'học', 'nghiên cứu', 'cờ vua'], key: 'reading' },
        { keys: ['du lịch', 'phượt', 'khám phá'], key: 'travel' },
        { keys: ['game', 'trò chơi', 'esport'], key: 'game' },
        { keys: ['đầu tư', 'chứng khoán', 'crypto', 'coin'], key: 'investing' },
        { keys: ['nấu ăn', 'ẩm thực', 'làm bánh'], key: 'cooking' },
        { keys: ['nhiếp ảnh', 'quay phim', 'chụp ảnh'], key: 'photography' },
        { keys: ['âm nhạc', 'đàn', 'hát', 'ca hát'], key: 'music' },
        { keys: ['mua sắm', 'thời trang', 'shopping'], key: 'shopping' },
        { keys: ['sưu tầm', 'đồ cổ', 'tem', 'mô hình'], key: 'collecting' },
        { keys: ['tình nguyện', 'từ thiện', 'xã hội'], key: 'volunteering' },
        { keys: ['thú cưng', 'chó', 'mèo'], key: 'pets' },
        { keys: ['làm vườn', 'cây cảnh', 'trồng cây'], key: 'gardening' },
        { keys: ['xem phim', 'cày phim', 'netflix'], key: 'movies' },
        { keys: ['mạng xã hội', 'tiktok', 'facebook', 'lướt web'], key: 'socialMedia' },
        { keys: ['thủ công', 'diy', 'đan len', 'handmade'], key: 'crafts' },
        { keys: ['yoga', 'thiền', 'tâm linh'], key: 'yoga' },
        { keys: ['xe cộ', 'độ xe', 'mô tô', 'ô tô'], key: 'cars' },
        { keys: ['công nghệ', 'đồ điện tử', 'gadget'], key: 'tech' },
        { keys: ['chiêm tinh', 'tarot', 'tử vi', 'cung hoàng đạo'], key: 'astrology' }
      ];

      let hobbyMatched = false;
      for (const h of hobbyMap) {
        if (h.keys.some(k => hobbies.includes(k))) {
          strategy.plan.push(t(`targetAnalysis.strategy.hobby.${h.key}.plan`));
          hobbyMatched = true;
          break;
        }
      }
      if (!hobbyMatched && hobbies.length > 2) {
        strategy.plan.push(t('targetAnalysis.strategy.hobbyBiasPlan', { hobby: target.hobbies || '' }));
      }
    }

    if (strategy.vulnerability === t('targetAnalysis.strategy.noInfo') && (job || hobbies)) {
        strategy.vulnerability = t('targetAnalysis.strategy.vulnerability.basedOnJobHobby');
    }
    
    // Article-based suggestions
    strategy.suggestedArticles = articles.filter(a => 
      (job && (getLocalized(a.category).toLowerCase().includes(job) || getLocalized(a.title).toLowerCase().includes(job))) || 
      (hobbies && (getLocalized(a.category).toLowerCase().includes(hobbies) || getLocalized(a.title).toLowerCase().includes(hobbies)))
    );

    // Filter for unique plan steps
    strategy.plan = Array.from(new Set(strategy.plan));

    return strategy;
  };

  const liveStrategy = getInfluenceStrategy(currentTarget);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4"
        >
          {t('targetAnalysis.title')}
        </motion.h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          {t('targetAnalysis.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Input Form */}
        <div className="space-y-8">
          {/* Analysis Mode Toggle */}
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
            <button 
              onClick={() => setAnalysisMode('database')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${analysisMode === 'database' ? 'bg-white dark:bg-slate-700 shadow-sm text-indigo-600 dark:text-indigo-400' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              <BookOpen size={18} />
              {t('targetAnalysis.mode.database')}
            </button>
            <button 
              onClick={() => setAnalysisMode('ai')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${analysisMode === 'ai' ? 'bg-white dark:bg-slate-700 shadow-sm text-indigo-600 dark:text-indigo-400' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              <Brain size={18} />
              {t('targetAnalysis.mode.ai')}
            </button>
          </div>

          {/* API Key Section */}
          {analysisMode === 'ai' && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-indigo-50 dark:bg-indigo-900/20 rounded-[2rem] p-6 border border-indigo-100 dark:border-indigo-800/30"
            >
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
                  className="mb-4 p-4 bg-white dark:bg-slate-800 rounded-xl text-xs text-slate-600 dark:text-slate-400 leading-relaxed"
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

              <div className="flex gap-2">
                <input 
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder={t('targetAnalysis.apiKey.placeholder')}
                  className="flex-1 px-4 py-2 bg-white dark:bg-slate-800 border border-indigo-100 dark:border-indigo-800/50 rounded-xl focus:outline-none focus:border-indigo-500 text-sm"
                />
                <button 
                  onClick={() => handleSaveApiKey(apiKey)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors"
                >
                  {t('targetAnalysis.apiKey.save')}
                </button>
              </div>

              {/* Quota Info */}
              <div className="mt-4 pt-4 border-t border-indigo-100 dark:border-indigo-800/30">
                <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-300 font-bold text-xs mb-2 uppercase tracking-wider">
                  <Activity size={14} />
                  {t('targetAnalysis.ai.quota.title')}
                </div>
                <div className="grid grid-cols-1 gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                  <div className="flex justify-between items-center">
                    <span>{t('targetAnalysis.ai.quota.limit')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{t('targetAnalysis.ai.quota.remaining', { count: sessionRequests })}</span>
                  </div>
                  <div className="flex justify-between items-center text-indigo-600 dark:text-indigo-400 font-medium">
                    <span>{t('targetAnalysis.ai.quota.reset')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl dark:shadow-none border border-slate-100 dark:border-slate-700 p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl text-indigo-600 dark:text-indigo-400">
                <User size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t('targetAnalysis.addNew')}</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-2">{t('targetAnalysis.gender')}</label>
                  <Tooltip content={t('targetAnalysis.tooltip.gender')}>
                    <select 
                      value={currentTarget.gender}
                      onChange={(e) => setCurrentTarget({...currentTarget, gender: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-2xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all text-slate-900 dark:text-white"
                    >
                      <option value="">{t('targetAnalysis.selectGender')}</option>
                      <option value="male">{t('targetAnalysis.male')}</option>
                      <option value="female">{t('targetAnalysis.female')}</option>
                    </select>
                  </Tooltip>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-2">{t('targetAnalysis.age')}</label>
                  <Tooltip content={t('targetAnalysis.tooltip.age')}>
                    <input 
                      type="number"
                      value={currentTarget.age}
                      onChange={(e) => setCurrentTarget({...currentTarget, age: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-2xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      placeholder={t('targetAnalysis.age')}
                    />
                  </Tooltip>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-2">{t('targetAnalysis.job')}</label>
                  <Tooltip content={t('targetAnalysis.tooltip.job')}>
                    <input 
                      type="text"
                      value={currentTarget.job}
                      onChange={(e) => setCurrentTarget({...currentTarget, job: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-2xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      placeholder={t('targetAnalysis.jobPlaceholder')}
                    />
                  </Tooltip>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-2">{t('targetAnalysis.hobbies')}</label>
                  <Tooltip content={t('targetAnalysis.tooltip.hobbies')}>
                    <input 
                      type="text"
                      value={currentTarget.hobbies}
                      onChange={(e) => setCurrentTarget({...currentTarget, hobbies: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-2xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      placeholder={t('targetAnalysis.hobbiesPlaceholder')}
                    />
                  </Tooltip>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-2">{t('targetAnalysis.religion')}</label>
                  <select 
                    value={currentTarget.religion}
                    onChange={(e) => setCurrentTarget({...currentTarget, religion: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-2xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">{t('targetAnalysis.selectReligion')}</option>
                    {religions.map(r => <option key={r} value={r}>{t(`targetAnalysis.religions.${r}`)}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-2">{t('targetAnalysis.politicalSystem')}</label>
                  <select 
                    value={currentTarget.politicalSystem}
                    onChange={(e) => setCurrentTarget({...currentTarget, politicalSystem: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-2xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="">{t('targetAnalysis.selectPoliticalSystem')}</option>
                    {politicalSystems.map(p => <option key={p} value={p}>{t(`targetAnalysis.politicalSystems.${p}`)}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-2">{t('targetAnalysis.name')}</label>
                <Tooltip content={t('targetAnalysis.tooltip.name')}>
                  <input 
                    type="text"
                    value={currentTarget.name}
                    onChange={(e) => setCurrentTarget({...currentTarget, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-2xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    placeholder={t('targetAnalysis.namePlaceholder')}
                  />
                </Tooltip>
              </div>

              <button 
                onClick={handleSaveTarget}
                disabled={!currentTarget.name}
                className="w-full bg-slate-900 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg dark:shadow-none flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Save size={20} />
                {t('targetAnalysis.saveBtn')}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Live Analysis Results */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl dark:shadow-none border border-indigo-50 dark:border-slate-700 p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Sparkles size={120} className="text-indigo-600 dark:text-indigo-400" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-600 rounded-xl text-white">
                    <Target size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('targetAnalysis.analysisResult')}</h2>
                </div>
                {analysisMode === 'ai' && (
                  <button 
                    onClick={() => runAiAnalysis(currentTarget)}
                    disabled={isAiAnalyzing || !apiKey || !currentTarget.name}
                    className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
                  >
                    {isAiAnalyzing ? <Loader2 className="animate-spin" size={18} /> : <Brain size={18} />}
                    {t('targetAnalysis.ai.analyzeBtn')}
                  </button>
                )}
              </div>

              {(!currentTarget.age && !currentTarget.gender && !currentTarget.job && !currentTarget.hobbies) ? (
                <div className="py-12 text-center">
                  <p className="text-slate-400 dark:text-slate-500 italic">{t('targetAnalysis.emptyDesc')}</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Result Table */}
                  <div className="overflow-hidden rounded-3xl border border-slate-100 dark:border-slate-700">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                          <th className="px-6 py-4 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase">{t('targetAnalysis.category')}</th>
                          <th className="px-6 py-4 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase">{t('targetAnalysis.proposal')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-slate-100 dark:border-slate-700">
                          <td className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">{t('targetAnalysis.vulnerability')}</td>
                          <td className="px-6 py-4 text-red-600 dark:text-red-400 font-medium">
                            {analysisMode === 'ai' ? (isAiAnalyzing ? t('targetAnalysis.ai.analyzing') : aiResult?.vulnerability) : liveStrategy.vulnerability}
                          </td>
                        </tr>
                        <tr className="border-t border-slate-100 dark:border-slate-700">
                          <td className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">{t('targetAnalysis.technique')}</td>
                          <td className="px-6 py-4 text-indigo-600 dark:text-indigo-400 font-bold">
                            {analysisMode === 'ai' ? (isAiAnalyzing ? t('targetAnalysis.ai.analyzing') : aiResult?.technique) : liveStrategy.technique}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-800/30">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
                        <ShieldAlert size={20} />
                        {t('targetAnalysis.actionPlan')}:
                      </h4>
                      {analysisMode === 'ai' && aiResult && (
                        <button 
                          onClick={handleCopyResult}
                          className="flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          {copySuccess ? <Check size={14} /> : <Copy size={14} />}
                          {copySuccess ? t('targetAnalysis.ai.copySuccess') : t('targetAnalysis.ai.copyBtn')}
                        </button>
                      )}
                    </div>
                    <ul className="space-y-4">
                      {analysisMode === 'ai' ? (
                        isAiAnalyzing ? (
                          <div className="flex items-center gap-2 text-indigo-600">
                            <Loader2 className="animate-spin" />
                            {t('targetAnalysis.ai.analyzing')}
                          </div>
                        ) : (
                          aiResult?.plan.map((step, idx) => (
                            <motion.li 
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-4 text-indigo-800 dark:text-indigo-200 leading-relaxed"
                            >
                              <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                              <span className="text-lg font-medium">{step}</span>
                            </motion.li>
                          ))
                        )
                      ) : (
                        liveStrategy.plan.map((step, idx) => (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-4 text-indigo-800 dark:text-indigo-200 leading-relaxed"
                          >
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                            <span className="text-lg font-medium">{step}</span>
                          </motion.li>
                        ))
                      )}
                    </ul>
                  </div>

                  {analysisMode === 'database' && (
                    <>
                      {liveStrategy.suggestedSyndromes.length > 0 && (
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl p-8 border border-emerald-100 dark:border-emerald-800/30">
                          <h4 className="font-bold text-emerald-900 dark:text-emerald-300 mb-6 flex items-center gap-2">
                            <Sparkles size={20} />
                            {t('targetAnalysis.suggestedSyndromesTitle')}
                          </h4>
                          <div className="space-y-6">
                            {liveStrategy.suggestedSyndromes.map((s, idx) => (
                              <div key={idx} className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-emerald-100 dark:border-emerald-800/50">
                                <p className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">{s.name}</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 italic">{t('targetAnalysis.instructionLabel')} {s.instruction}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {liveStrategy.suggestedTechniques.length > 0 && (
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-800/30">
                          <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-6 flex items-center gap-2">
                            <Target size={20} />
                            {t('targetAnalysis.suggestedTechniquesTitle')}
                          </h4>
                          <div className="space-y-6">
                            {liveStrategy.suggestedTechniques.map((t, idx) => (
                              <div key={idx} className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-indigo-100 dark:border-indigo-800/50">
                                <p className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">{t.title}</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{t.description}</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium italic">{t.defensive}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {liveStrategy.suggestedArticles.length > 0 && (
                        <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700">
                          <h4 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <Heart size={20} />
                            {t('targetAnalysis.suggestedArticlesTitle', { defaultValue: 'Suggested Articles' })}
                          </h4>
                          <div className="space-y-4">
                            {liveStrategy.suggestedArticles.map((a, idx) => (
                              <div key={idx} className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700">
                                <p className="font-bold text-slate-900 dark:text-white mb-1">{getLocalized(a.title)}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{getLocalized(a.category)}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Saved Targets Section */}
      {targets.length > 0 && (
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 px-4">{t('targetAnalysis.savedTargets')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {targets.map((target) => (
                <motion.div 
                  key={target.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-lg dark:shadow-none border border-slate-100 dark:border-slate-700 p-8"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 font-bold">
                        {target.name.charAt(0)}
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white">{target.name}</h3>
                    </div>
                    <button onClick={() => handleDeleteTarget(target.id)} className="text-slate-300 dark:text-slate-600 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-6">
                    <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                      <span className="font-bold text-slate-400 w-16 uppercase text-[9px] tracking-wider">{t('targetAnalysis.age')}:</span> 
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{target.age || 'N/A'}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                      <span className="font-bold text-slate-400 w-16 uppercase text-[9px] tracking-wider">{t('targetAnalysis.gender')}:</span> 
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{target.gender ? (target.gender === 'male' ? t('targetAnalysis.male') : t('targetAnalysis.female')) : 'N/A'}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                      <span className="font-bold text-slate-400 w-16 uppercase text-[9px] tracking-wider">{t('targetAnalysis.job')}:</span> 
                      <span className="text-slate-700 dark:text-slate-300 font-medium truncate" title={target.job}>{target.job || 'N/A'}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                      <span className="font-bold text-slate-400 w-16 uppercase text-[9px] tracking-wider">{t('targetAnalysis.religion')}:</span> 
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{target.religion ? t(`targetAnalysis.religions.${target.religion}`) : 'N/A'}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                      <span className="font-bold text-slate-400 w-16 uppercase text-[9px] tracking-wider">{t('targetAnalysis.politicalSystem')}:</span> 
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{target.politicalSystem ? t(`targetAnalysis.politicalSystems.${target.politicalSystem}`) : 'N/A'}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                      <span className="font-bold text-slate-400 w-16 uppercase text-[9px] tracking-wider">{t('targetAnalysis.hobbies')}:</span> 
                      <span className="text-slate-700 dark:text-slate-300 font-medium truncate" title={target.hobbies}>{target.hobbies || 'N/A'}</span>
                    </div>
                  </div>
                    
                    {/* Analysis Results in Card */}
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                      <p className="font-bold text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-2">
                        <Activity size={14} />
                        {t('targetAnalysis.compatibleSyndromes', { defaultValue: 'Compatible Syndromes' })}
                      </p>
                      <p className="text-xs italic mb-3">
                        {getInfluenceStrategy(target).vulnerability}
                      </p>
                      
                      <p className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
                        <Target size={14} />
                        {t('targetAnalysis.suggestedTechniques', { defaultValue: 'Suggested Techniques' })}
                      </p>
                      <p className="text-xs italic">
                        {getInfluenceStrategy(target).technique}
                      </p>
                    </div>
                  <button 
                    onClick={() => {
                      setCurrentTarget(target);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-3 bg-slate-50 dark:bg-slate-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-xl font-bold transition-colors"
                  >
                    {t('targetAnalysis.viewStrategy')}
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};
