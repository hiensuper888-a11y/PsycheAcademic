import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Briefcase, Heart, Activity, Target, ShieldAlert, Sparkles, Save, Trash2, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '../components/Tooltip';
import { syndromes } from '../data/syndromes';
import { influenceTechniques } from '../data/influenceTechniques';

interface TargetProfile {
  id: string;
  name: string;
  age: string;
  gender: string;
  job: string;
  religion: string;
  politicalSystem: string;
  hobbies: string;
  habits: string;
  syndrome: string;
}

const religions = ['buddhism', 'hinduism', 'christianity', 'none', 'taoism', 'judaism', 'islam'];
const politicalSystems = ['socialism', 'capitalism', 'constitutionalMonarchy', 'rebel'];

export const TargetAnalysis: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [targets, setTargets] = useState<TargetProfile[]>([]);
  const [currentTarget, setCurrentTarget] = useState<TargetProfile>({
    id: '',
    name: '',
    age: '',
    gender: '',
    job: '',
    religion: '',
    politicalSystem: '',
    hobbies: '',
    habits: '',
    syndrome: ''
  });

  const getLocalized = (obj: any) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[i18n.language] || obj['vi'] || '';
  };

  const selectedSyndromeData = syndromes.find(s => s.id === currentTarget.syndrome || getLocalized(s.name) === currentTarget.syndrome);
  const [showPlan, setShowPlan] = useState<string | null>(null);

  const handleSaveTarget = () => {
    if (!currentTarget.name) return;
    const newTarget = { ...currentTarget, id: Date.now().toString() };
    setTargets([...targets, newTarget]);
    setCurrentTarget({ id: '', name: '', age: '', gender: '', job: '', religion: '', politicalSystem: '', hobbies: '', habits: '', syndrome: '' });
  };

  const handleDeleteTarget = (id: string) => {
    setTargets(targets.filter(t => t.id !== id));
    if (showPlan === id) setShowPlan(null);
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
      suggestedTechniques: [] as { title: string, description: string, defensive: string }[]
    };

    if (!age && !gender && !job && !hobbies && !religion && !politicalSystem) return strategy;

    // Automatic Syndrome Suggestion Logic
    const suggestSyndrome = (id: string, instruction?: string) => {
      const syndromeObj = syndromes.find(s => s.id === id || s.name.en === id);
      if (!syndromeObj) return;
      
      const localizedName = getLocalized(syndromeObj.name);
      const finalInstruction = instruction || t('targetAnalysis.strategy.syndrome.genericPlan', { syndrome: localizedName });
      
      if (!strategy.suggestedSyndromes.find(s => s.name === localizedName)) {
        strategy.suggestedSyndromes.push({ name: localizedName, instruction: finalInstruction });
      }
    };

    // Automatic Technique Suggestion Logic
    const suggestTechnique = (id: string) => {
      const techObj = influenceTechniques.find(t => t.id === id || t.title.en === id);
      if (!techObj) return;
      
      const localizedTitle = getLocalized(techObj.title);
      const localizedDesc = getLocalized(techObj.description);
      const localizedDefensive = getLocalized(techObj.defensiveStrategy);
      
      if (!strategy.suggestedTechniques.find(t => t.title === localizedTitle)) {
        strategy.suggestedTechniques.push({ title: localizedTitle, description: localizedDesc, defensive: localizedDefensive });
      }
    };

    // Dynamic Syndrome and Technique Suggestion based on keywords in target profile
    const profileText = `${job} ${hobbies} ${gender} ${age} ${religion} ${politicalSystem}`.toLowerCase();
    
    syndromes.forEach(s => {
      const targetKeywords = getLocalized(s.target).toLowerCase();
      const keywords = targetKeywords.split(/[,.;]/).map(k => k.trim()).filter(k => k.length > 3);
      if (keywords.some(k => profileText.includes(k))) {
        suggestSyndrome(s.id);
      }
    });

    influenceTechniques.forEach(t => {
      const targetKeywords = `${t.targetDemographics.professions.join(' ')} ${t.targetDemographics.interests?.join(' ') || ''} ${t.targetDemographics.religions.join(' ')} ${t.targetDemographics.politicalSystems.join(' ')}`.toLowerCase();
      const keywords = targetKeywords.split(/[,.;\s]/).map(k => k.trim()).filter(k => k.length > 3);
      if (keywords.some(k => profileText.includes(k))) {
        suggestTechnique(t.id);
      }
    });

    // Age-based suggestions
    if (age > 0 && age < 25) {
      suggestSyndrome("imposter-syndrome", t('targetAnalysis.strategy.imposterInstructionFull'));
      suggestSyndrome("fomo", t('targetAnalysis.strategy.fomoInstructionFull'));
    } else if (age >= 25 && age <= 45) {
      suggestSyndrome("dunning-kruger", t('targetAnalysis.strategy.dunningKrugerInstructionFull'));
      suggestSyndrome("sunk-cost", t('targetAnalysis.strategy.sunkCostInstruction'));
    }

    // Job-based suggestions
    if (job.includes('quản lý') || job.includes('lãnh đạo') || job.includes('management') || job.includes('leader')) {
      suggestSyndrome("halo-effect", t('targetAnalysis.strategy.haloInstructionFull'));
      suggestSyndrome("confirmation-bias", t('targetAnalysis.strategy.confirmationInstructionFull'));
      suggestTechnique("social-proof");
    } else if (job.includes('kỹ thuật') || job.includes('it') || job.includes('tech')) {
      suggestSyndrome("barnum-effect", t('targetAnalysis.strategy.barnumInstruction'));
      suggestTechnique("scarcity");
    } else if (job.includes('nghệ thuật') || job.includes('sáng tạo') || job.includes('art') || job.includes('creative')) {
      suggestSyndrome("stendhal-syndrome", t('targetAnalysis.strategy.stendhalInstruction'));
    }

    // Religion-based suggestions
    if (religion && religion !== 'none') {
      suggest("jerusalem-syndrome", t('targetAnalysis.strategy.jerusalemInstruction'));
      suggest("authority-bias", t('targetAnalysis.strategy.authorityInstructionFull'));
    }

    // Political-based suggestions
    if (politicalSystem === 'socialism') {
      suggest("bandwagon-effect", t('targetAnalysis.strategy.bandwagonInstructionFull'));
    } else if (politicalSystem === 'capitalism') {
      suggest("ikea-effect", t('targetAnalysis.strategy.ikeaInstruction'));
    }

    // Age & Gender based logic
    if (age > 0 && age < 25) {
      strategy.vulnerability = gender === 'female' 
        ? t('targetAnalysis.strategy.vulnerability.femaleYoung') 
        : t('targetAnalysis.strategy.vulnerability.maleYoung');
      strategy.technique = t('targetAnalysis.strategy.technique.young');
      strategy.plan.push(t('targetAnalysis.strategy.plan.young'));
    } else if (age >= 25 && age <= 50) {
      strategy.vulnerability = gender === 'female'
        ? t('targetAnalysis.strategy.vulnerability.femaleMid')
        : t('targetAnalysis.strategy.vulnerability.maleMid');
      strategy.technique = t('targetAnalysis.strategy.technique.mid');
      strategy.plan.push(t('targetAnalysis.strategy.plan.mid'));
    } else if (age > 50) {
      strategy.vulnerability = t('targetAnalysis.strategy.vulnerability.old');
      strategy.technique = t('targetAnalysis.strategy.technique.old');
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

    // Syndrome-based logic
    if (target.syndrome) {
      const syndromeName = target.syndrome;
      const syndromeObj = syndromes.find(s => getLocalized(s.name) === syndromeName || s.id === syndromeName || s.name.en === syndromeName);
      
      strategy.vulnerability += ` + ${syndromeObj ? getLocalized(syndromeObj.name) : syndromeName}`;
      
      if (syndromeObj) {
        const id = syndromeObj.id;
        if (id === "imposter-syndrome") {
          strategy.technique += " + " + t('targetAnalysis.strategy.syndrome.imposter.tech');
          strategy.plan.push(t('targetAnalysis.strategy.syndrome.imposter.plan'));
        } else if (id === "dunning-kruger") {
          strategy.technique += " + " + t('targetAnalysis.strategy.syndrome.dunningKruger.tech');
          strategy.plan.push(t('targetAnalysis.strategy.syndrome.dunningKruger.plan'));
        } else if (id === "halo-effect") {
          strategy.technique += " + " + t('targetAnalysis.strategy.syndrome.halo.tech');
          strategy.plan.push(t('targetAnalysis.strategy.syndrome.halo.plan'));
        } else if (id === "confirmation-bias") {
          strategy.technique += " + " + t('targetAnalysis.strategy.syndrome.confirmation.tech');
          strategy.plan.push(t('targetAnalysis.strategy.syndrome.confirmation.plan'));
        } else if (id === "anchoring-effect") {
          strategy.technique += " + " + t('targetAnalysis.strategy.syndrome.anchoring.tech');
          strategy.plan.push(t('targetAnalysis.strategy.syndrome.anchoring.plan'));
        } else if (id === "fomo") {
          strategy.technique += " + " + t('targetAnalysis.strategy.syndrome.fomo.tech');
          strategy.plan.push(t('targetAnalysis.strategy.syndrome.fomo.plan'));
        } else if (id === "stockholm-syndrome") {
          strategy.technique += " + " + t('targetAnalysis.strategy.syndrome.stockholm.tech');
          strategy.plan.push(t('targetAnalysis.strategy.syndrome.stockholm.plan'));
        } else if (id === "barnum-effect") {
          strategy.technique += " + " + t('targetAnalysis.strategy.syndrome.barnum.tech');
          strategy.plan.push(t('targetAnalysis.strategy.syndrome.barnum.plan'));
        } else if (id === "ikea-effect") {
          strategy.technique += " + " + t('targetAnalysis.strategy.syndrome.ikea.tech');
          strategy.plan.push(t('targetAnalysis.strategy.syndrome.ikea.plan'));
        } else if (id === "sunk-cost") {
          strategy.technique += " + " + t('targetAnalysis.strategy.syndrome.sunkCost.tech');
          strategy.plan.push(t('targetAnalysis.strategy.syndrome.sunkCost.plan'));
        } else {
          strategy.plan.push(t('targetAnalysis.strategy.syndrome.genericPlan', { syndrome: syndromeName }));
        }
      } else {
        strategy.plan.push(t('targetAnalysis.strategy.syndrome.genericPlan', { syndrome: syndromeName }));
      }
    }

    if (strategy.vulnerability === t('targetAnalysis.strategy.noInfo') && (job || hobbies)) {
        strategy.vulnerability = t('targetAnalysis.strategy.vulnerability.basedOnJobHobby');
    }
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
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-2">{t('targetAnalysis.syndrome')}</label>
                <select 
                  value={currentTarget.syndrome}
                  onChange={(e) => setCurrentTarget({...currentTarget, syndrome: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-2xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all text-slate-900 dark:text-white"
                >
                  <option value="">{t('targetAnalysis.selectSyndrome')}</option>
                  {syndromes.map(s => <option key={s.id} value={s.id}>{getLocalized(s.name)}</option>)}
                </select>

                {selectedSyndromeData && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 rounded-2xl text-sm"
                  >
                    <p className="text-indigo-900 dark:text-indigo-200 font-bold mb-1">{getLocalized(selectedSyndromeData.name)}</p>
                    <p className="text-indigo-700 dark:text-indigo-300 text-xs mb-3 italic">{getLocalized(selectedSyndromeData.description)}</p>
                    <div className="space-y-2">
                      <p className="text-slate-700 dark:text-slate-300 text-xs">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">{t('targetAnalysis.syndrome.example')}:</span> {getLocalized(selectedSyndromeData.example)}
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 text-xs">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">{t('targetAnalysis.syndrome.target')}:</span> {getLocalized(selectedSyndromeData.target)}
                      </p>
                    </div>
                  </motion.div>
                )}
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
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-600 rounded-xl text-white">
                  <Target size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('targetAnalysis.analysisResult')}</h2>
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
                          <td className="px-6 py-4 text-red-600 dark:text-red-400 font-medium">{liveStrategy.vulnerability}</td>
                        </tr>
                        <tr className="border-t border-slate-100 dark:border-slate-700">
                          <td className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">{t('targetAnalysis.technique')}</td>
                          <td className="px-6 py-4 text-indigo-600 dark:text-indigo-400 font-bold">{liveStrategy.technique}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-800/30">
                    <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-6 flex items-center gap-2">
                      <ShieldAlert size={20} />
                      {t('targetAnalysis.actionPlan')}:
                    </h4>
                    <ul className="space-y-4">
                      {liveStrategy.plan.map((step, idx) => (
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
                      ))}
                    </ul>
                  </div>

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
                  <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                    <p>• {target.gender ? (target.gender === 'male' ? t('targetAnalysis.male') : t('targetAnalysis.female')) : 'N/A'}, {target.age || 'N/A'} {t('targetAnalysis.age')}</p>
                    <p>• {t('targetAnalysis.job')}: {target.job || 'N/A'}</p>
                    <p>• {t('targetAnalysis.religion')}: {target.religion ? t(`targetAnalysis.religions.${target.religion}`) : 'N/A'}</p>
                    <p>• {t('targetAnalysis.politicalSystem')}: {target.politicalSystem ? t(`targetAnalysis.politicalSystems.${target.politicalSystem}`) : 'N/A'}</p>
                    <p>• {t('targetAnalysis.hobbies')}: {target.hobbies || 'N/A'}</p>
                    <p>• {t('targetAnalysis.syndrome')}: {target.syndrome ? (syndromes.find(s => s.id === target.syndrome || getLocalized(s.name) === target.syndrome) ? getLocalized(syndromes.find(s => s.id === target.syndrome || getLocalized(s.name) === target.syndrome)?.name) : target.syndrome) : 'N/A'}</p>
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
