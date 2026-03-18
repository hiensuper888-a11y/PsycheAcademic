import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PsychologyArticle, psychologyData } from '../data/psychologyData';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, BookOpen, Search, User, ShieldAlert, Sparkles, Zap, CheckCircle, Lightbulb, Target, Brain, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useTranslation } from 'react-i18next';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { TableOfContents } from '../components/TableOfContents';
import { CollapsibleList } from '../components/CollapsibleList';
import { Tooltip } from '../components/Tooltip';
import { summarizeArticle } from '../services/geminiService';

export const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log('Article id from params:', id);
  console.log('psychologyData length:', psychologyData.length);
  console.log('All article IDs:', psychologyData.map(a => a.id));
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'vi' | 'en' | 'zh';
  
  const [article, setArticle] = useState<PsychologyArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = () => {
      if (!id) return;
      try {
        setLoading(true);
        console.log('Fetching article with id:', id);
        const data = psychologyData.find(a => {
          console.log(`Comparing '${JSON.stringify(a.id)}' with '${JSON.stringify(id)}'`);
          return a.id.toLowerCase() === id?.toLowerCase();
        });
        console.log('Found article:', data);
        if (!data) {
          throw new Error('Article not found');
        }
        setArticle(data);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching article:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-24 animate-pulse">
        {/* Hero Skeleton */}
        <div className="relative h-[60vh] min-h-[500px] w-full bg-slate-200 dark:bg-slate-800" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Skeleton */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-slate-800 rounded-[2rem] p-8 space-y-4 shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-700">
              <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-full w-3/4 mb-6" />
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-4 bg-slate-100 dark:bg-slate-700/50 rounded-full w-full" />
              ))}
            </div>
          </div>

          {/* Main Content Skeleton */}
          <div className="lg:col-span-3 space-y-8 lg:space-y-12">
            {/* Risk Analysis Skeleton */}
            <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 space-y-8 shadow-2xl border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-2xl" />
                <div className="space-y-2">
                  <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-full w-48" />
                  <div className="h-4 bg-slate-100 dark:bg-slate-700/50 rounded-full w-64" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-14 bg-slate-50 dark:bg-slate-700/30 rounded-2xl border border-slate-100 dark:border-slate-700" />
                ))}
              </div>
            </div>

            {/* Search Bar Skeleton */}
            <div className="h-16 bg-white dark:bg-slate-800 rounded-[2rem] border-2 border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/20 dark:shadow-none" />

            {/* Key Takeaways Skeleton */}
            <div className="bg-slate-900 rounded-[2.5rem] p-12 space-y-8">
              <div className="h-8 bg-slate-800 rounded-full w-64" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map(i => (
                  <div key={i} className="h-40 bg-slate-800/50 rounded-3xl border border-slate-700/50" />
                ))}
              </div>
            </div>

            {/* Content Section Skeleton */}
            {[1, 2].map(i => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-12 space-y-6 shadow-xl border border-slate-100 dark:border-slate-700">
                <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-full w-1/2 mb-8" />
                <div className="space-y-4">
                  <div className="h-4 bg-slate-100 dark:bg-slate-700/50 rounded-full w-full" />
                  <div className="h-4 bg-slate-100 dark:bg-slate-700/50 rounded-full w-full" />
                  <div className="h-4 bg-slate-100 dark:bg-slate-700/50 rounded-full w-5/6" />
                </div>
                <div className="h-64 bg-slate-50 dark:bg-slate-700/30 rounded-3xl border border-slate-100 dark:border-slate-700 my-8" />
                <div className="space-y-4">
                  <div className="h-4 bg-slate-100 dark:bg-slate-700/50 rounded-full w-full" />
                  <div className="h-4 bg-slate-100 dark:bg-slate-700/50 rounded-full w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error}</div>;
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <p>ID from params: {id}</p>
        <p>Available IDs: {psychologyData.map(a => a.id).join(', ')}</p>
      </div>
    );
  }

  const getLocalized = (field: any) => {
    if (typeof field === 'string') return field;
    if (field && typeof field === 'object') {
      return field[currentLang] || field['vi'] || field['en'] || '';
    }
    return '';
  };

  const title = getLocalized(article.title);
  const shortDescription = getLocalized(article.shortDescription);
  const content = getLocalized(article.content);
  // Split content by '## ' but keep the '## ' in the resulting string
  const sections = content.split(/(?=^##\s)/m).filter((s: string) => s.trim().length > 0);

  const tocItems = sections.map((section: string) => {
    const titleMatch = section.match(/^##\s+(.*)/m);
    const title = titleMatch ? titleMatch[1].replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})\s*/u, '') : t('article.sectionFallback');
    const id = title.toLowerCase().replace(/\s+/g, '-');
    return { title, id };
  });

  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [contentSearch, setContentSearch] = React.useState('');
  const [userProfile, setUserProfile] = React.useState({ gender: '', age: '', job: '', hobbies: '' });
  const [showAnalysis, setShowAnalysis] = React.useState(false);
  const [summary, setSummary] = React.useState<string | null>(null);
  const [isSummarizing, setIsSummarizing] = React.useState(false);
  const [summaryError, setSummaryError] = React.useState<string | null>(null);

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '25%']);

  const filteredSections = sections.filter((section: string) => 
    section.toLowerCase().includes(contentSearch.toLowerCase())
  );

  const getPersonalizedAdvice = () => {
    const age = parseInt(userProfile.age);
    const gender = userProfile.gender;
    const job = userProfile.job.toLowerCase();
    const hobbies = userProfile.hobbies.toLowerCase();
    let adviceKeys: string[] = [];

    if (age > 0 && age < 25) {
      adviceKeys.push('article.advice.age.young');
    } else if (age > 50) {
      adviceKeys.push('article.advice.age.old');
    }

    if (gender === 'male') {
      adviceKeys.push('article.advice.gender.male');
    } else if (gender === 'female') {
      adviceKeys.push('article.advice.gender.female');
    }

    if (job) {
      const jobMap = [
        { keys: ['kinh doanh', 'bán hàng', 'sales', 'marketing', 'business'], key: 'article.advice.job.business' },
        { keys: ['kỹ thuật', 'it', 'lập trình', 'kỹ sư', 'tech', 'software', 'engineer'], key: 'article.advice.job.tech' },
        { keys: ['giáo dục', 'giáo viên', 'giảng viên', 'teacher', 'education', 'professor'], key: 'article.advice.job.education' },
        { keys: ['y tế', 'bác sĩ', 'điều dưỡng', 'nha sĩ', 'medical', 'doctor', 'nurse'], key: 'article.advice.job.medical' },
        { keys: ['quản lý', 'lãnh đạo', 'giám đốc', 'ceo', 'manager', 'management', 'leader'], key: 'article.advice.job.management' },
        { keys: ['nghệ thuật', 'sáng tạo', 'thiết kế', 'họa sĩ', 'creative', 'art', 'design', 'artist'], key: 'article.advice.job.creative' },
        { keys: ['tài chính', 'kế toán', 'ngân hàng', 'kiểm toán', 'finance', 'accounting', 'banker'], key: 'article.advice.job.finance' },
        { keys: ['nhân sự', 'hr', 'tuyển dụng', 'human resources'], key: 'article.advice.job.hr' },
        { keys: ['luật sư', 'pháp lý', 'công chứng', 'legal', 'lawyer'], key: 'article.advice.job.legal' },
        { keys: ['dịch vụ', 'cskh', 'nhà hàng', 'khách sạn', 'service', 'hospitality'], key: 'article.advice.job.service' },
        { keys: ['xây dựng', 'kiến trúc', 'thầu', 'construction', 'architect'], key: 'article.advice.job.construction' },
        { keys: ['nghiên cứu', 'khoa học', 'nhà khoa học', 'science', 'researcher'], key: 'article.advice.job.science' },
        { keys: ['hành chính', 'văn phòng', 'thư ký', 'office', 'admin'], key: 'article.advice.job.office' },
        { keys: ['tự do', 'freelancer', 'mmo'], key: 'article.advice.job.freelance' },
        { keys: ['nông nghiệp', 'nông dân', 'chăn nuôi', 'agriculture', 'farmer'], key: 'article.advice.job.agriculture' },
        { keys: ['vận tải', 'lái xe', 'logistics', 'transport', 'driver'], key: 'article.advice.job.transport' },
        { keys: ['báo chí', 'phóng viên', 'truyền thông', 'media', 'journalist'], key: 'article.advice.job.media' },
        { keys: ['công quan', 'quân đội', 'bảo vệ', 'security', 'police', 'military'], key: 'article.advice.job.security' },
        { keys: ['sinh viên', 'thực tập sinh', 'học sinh', 'student'], key: 'article.advice.job.student' },
        { keys: ['nội trợ', 'ở nhà', 'homemaker', 'housewife'], key: 'article.advice.job.homemaker' }
      ];

      let jobMatched = false;
      for (const j of jobMap) {
        if (j.keys.some(k => job.includes(k))) {
          adviceKeys.push(j.key);
          jobMatched = true;
          break;
        }
      }
      if (!jobMatched && job.length > 2) {
        adviceKeys.push('article.advice.job.fallback');
      }
    }

    if (hobbies) {
      const hobbyMap = [
        { keys: ['thể thao', 'gym', 'chạy bộ', 'bóng đá', 'cầu lông', 'sports', 'running', 'football'], key: 'article.advice.hobby.sports' },
        { keys: ['đọc sách', 'học', 'nghiên cứu', 'cờ vua', 'reading', 'books', 'study', 'chess'], key: 'article.advice.hobby.intellectual' },
        { keys: ['du lịch', 'phượt', 'khám phá', 'travel', 'explore'], key: 'article.advice.hobby.travel' },
        { keys: ['game', 'trò chơi', 'esport', 'gaming'], key: 'article.advice.hobby.gaming' },
        { keys: ['đầu tư', 'chứng khoán', 'crypto', 'coin', 'investing', 'finance'], key: 'article.advice.hobby.finance' },
        { keys: ['nấu ăn', 'ẩm thực', 'làm bánh', 'cooking', 'food'], key: 'article.advice.hobby.cooking' },
        { keys: ['nhiếp ảnh', 'quay phim', 'chụp ảnh', 'photography', 'video'], key: 'article.advice.hobby.photography' },
        { keys: ['âm nhạc', 'đàn', 'hát', 'ca hát', 'music', 'singing', 'guitar'], key: 'article.advice.hobby.music' },
        { keys: ['mua sắm', 'thời trang', 'shopping', 'fashion'], key: 'article.advice.hobby.shopping' },
        { keys: ['sưu tầm', 'đồ cổ', 'tem', 'mô hình', 'collecting'], key: 'article.advice.hobby.collecting' },
        { keys: ['tình nguyện', 'từ thiện', 'xã hội', 'volunteering', 'charity'], key: 'article.advice.hobby.volunteering' },
        { keys: ['thú cưng', 'chó', 'mèo', 'pets', 'dog', 'cat'], key: 'article.advice.hobby.pets' },
        { keys: ['làm vườn', 'cây cảnh', 'trồng cây', 'gardening', 'plants'], key: 'article.advice.hobby.gardening' },
        { keys: ['xem phim', 'cày phim', 'netflix', 'movies', 'cinema'], key: 'article.advice.hobby.movies' },
        { keys: ['mạng xã hội', 'tiktok', 'facebook', 'lướt web', 'social media'], key: 'article.advice.hobby.social' },
        { keys: ['thủ công', 'diy', 'đan len', 'handmade', 'crafts'], key: 'article.advice.hobby.crafts' },
        { keys: ['tâm linh', 'thiền', 'yoga', 'spiritual', 'meditation'], key: 'article.advice.hobby.spiritual' },
        { keys: ['xe', 'ô tô', 'xe máy', 'vehicles', 'cars', 'motorcycles'], key: 'article.advice.hobby.vehicles' },
        { keys: ['công nghệ', 'gadget', 'tech'], key: 'article.advice.hobby.tech' },
        { keys: ['huyền học', 'tử vi', 'bói', 'occult', 'astrology', 'tarot'], key: 'article.advice.hobby.occult' }
      ];

      let hobbyMatched = false;
      for (const h of hobbyMap) {
        if (h.keys.some(k => hobbies.includes(k))) {
          adviceKeys.push(h.key);
          hobbyMatched = true;
          break;
        }
      }
      if (!hobbyMatched && hobbies.length > 2) {
        adviceKeys.push('article.advice.hobby.fallback');
      }
    }

    if (adviceKeys.length === 0 && (userProfile.gender || userProfile.age || userProfile.job || userProfile.hobbies)) {
      adviceKeys.push('article.advice.moreInfo');
    }

    return adviceKeys;
  };

  const handleSummarize = async () => {
    setIsSummarizing(true);
    setSummaryError(null);
    try {
      const result = await summarizeArticle(content, currentLang);
      setSummary(result || null);
    } catch (error) {
      setSummaryError(t('article.summaryError'));
    } finally {
      setIsSummarizing(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-24 transition-colors duration-200">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-slate-200 dark:bg-slate-800">
        <motion.div 
          className="h-full bg-indigo-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full bg-slate-900 overflow-hidden">
        <motion.img 
          src={article.imageUrl} 
          alt={title} 
          style={{ y: backgroundY, scale: 1.1 }}
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay origin-top"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-between max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-32">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white transition-all font-medium w-fit bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-lg">
            <ArrowLeft size={18} className="mr-2" />
            {t('article.back')}
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed drop-shadow-md mb-8">
              {shortDescription}
            </p>
            <button
              onClick={handleSummarize}
              disabled={isSummarizing}
              className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 text-white rounded-full font-bold text-lg shadow-xl shadow-indigo-500/30 transition-all hover:-translate-y-1 group"
            >
              <Sparkles className={`mr-2 w-6 h-6 ${isSummarizing ? 'animate-pulse' : 'group-hover:animate-spin'}`} />
              {isSummarizing ? t('article.summarizing') : t('article.summarizeBtn')}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* TOC Sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <TableOfContents items={tocItems} />
        </div>

        {/* Markdown Sections */}
        <div className="lg:col-span-3 space-y-8 lg:space-y-12">
          
          {/* Personalized Analysis Tool */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl shadow-indigo-100 dark:shadow-none border border-indigo-50 dark:border-slate-700 p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200 dark:shadow-none">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('article.riskAnalysis.title')}</h2>
                <p className="text-slate-500 dark:text-slate-400">{t('article.riskAnalysis.desc')}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Tooltip content={t('article.riskAnalysis.genderTooltip')}>
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-2 cursor-help">{t('article.riskAnalysis.gender')}</label>
                </Tooltip>
                <select 
                  value={userProfile.gender}
                  onChange={(e) => setUserProfile({ ...userProfile, gender: e.target.value })}
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-2xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-all text-slate-900 dark:text-white"
                >
                  <option value="">{t('article.riskAnalysis.selectGender')}</option>
                  <option value="male">{t('article.riskAnalysis.male')}</option>
                  <option value="female">{t('article.riskAnalysis.female')}</option>
                  <option value="other">{t('article.riskAnalysis.other')}</option>
                </select>
              </div>
              <div className="space-y-2">
                <Tooltip content={t('article.riskAnalysis.ageTooltip')}>
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-2 cursor-help">{t('article.riskAnalysis.age')}</label>
                </Tooltip>
                <input 
                  type="number" 
                  placeholder={t('article.riskAnalysis.agePlaceholder')}
                  value={userProfile.age}
                  onChange={(e) => setUserProfile({ ...userProfile, age: e.target.value })}
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-2xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Tooltip content={t('article.riskAnalysis.jobTooltip')}>
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-2 cursor-help">{t('article.riskAnalysis.job')}</label>
                </Tooltip>
                <input 
                  type="text" 
                  placeholder={t('article.riskAnalysis.jobPlaceholder')}
                  value={userProfile.job}
                  onChange={(e) => setUserProfile({ ...userProfile, job: e.target.value })}
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-2xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Tooltip content={t('article.riskAnalysis.hobbiesTooltip')}>
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-2 cursor-help">{t('article.riskAnalysis.hobbies')}</label>
                </Tooltip>
                <input 
                  type="text" 
                  placeholder={t('article.riskAnalysis.hobbiesPlaceholder')}
                  value={userProfile.hobbies}
                  onChange={(e) => setUserProfile({ ...userProfile, hobbies: e.target.value })}
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 rounded-2xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
              </div>
            </div>
            
            <AnimatePresence>
              {(userProfile.gender || userProfile.age || userProfile.job || userProfile.hobbies) && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl border border-indigo-100 dark:border-indigo-800/30">
                    <div className="flex items-center gap-2 mb-4 text-indigo-900 dark:text-indigo-300 font-bold">
                      <ShieldAlert size={20} />
                      {t('article.riskAnalysis.result')}
                    </div>
                    <ul className="space-y-4">
                      {getPersonalizedAdvice().map((adviceKey, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-indigo-800 dark:text-indigo-200 leading-relaxed">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                          {t(adviceKey)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* AI Summary Section */}
          <AnimatePresence>
            {(isSummarizing || summary || summaryError) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl border border-indigo-100 dark:border-slate-700 p-8 md:p-10 overflow-hidden relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl text-white shadow-lg">
                    <Sparkles size={24} className={isSummarizing ? 'animate-pulse' : ''} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('article.summaryTitle')}</h2>
                </div>

                {isSummarizing && (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-slate-500 dark:text-slate-400 font-medium animate-pulse">{t('article.summarizing')}</p>
                  </div>
                )}

                {summaryError && (
                  <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-3xl border border-red-100 dark:border-red-800/30 text-red-600 dark:text-red-400 font-medium">
                    {summaryError}
                  </div>
                )}

                {summary && !isSummarizing && (
                  <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-indigo-600 dark:prose-headings:text-indigo-400 prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-li:text-slate-600 dark:prose-li:text-slate-300">
                    <Markdown remarkPlugins={[remarkGfm]}>{summary}</Markdown>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Content Search Filter */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400 dark:text-slate-500 group-focus-within:text-indigo-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder={t('article.searchContent')}
              value={contentSearch}
              onChange={(e) => setContentSearch(e.target.value)}
              className="w-full pl-16 pr-6 py-5 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-[2rem] text-lg text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 shadow-xl shadow-slate-200/20 dark:shadow-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
          </div>

          {/* Key Takeaways */}
          {article.keyTakeaways && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-indigo-900 rounded-[2.5rem] shadow-2xl shadow-indigo-200/40 p-8 md:p-12 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full -ml-32 -mb-32 blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                    <BookOpen size={24} className="text-indigo-200" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {t('article.keyTakeaways')}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {article.keyTakeaways.map((takeaway, idx) => {
                    const Icon = [Zap, CheckCircle, Lightbulb, Target, Brain, ShieldCheck][idx % 6];
                    return (
                      <motion.div 
                        key={idx} 
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col gap-4 group transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="p-3 bg-indigo-500/20 rounded-2xl flex-shrink-0 group-hover:bg-indigo-500/40 transition-colors">
                            <Icon size={24} className="text-indigo-200" />
                          </div>
                          <span className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <p className="text-indigo-50 text-lg leading-relaxed font-medium">
                          {getLocalized(takeaway)}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {filteredSections.map((section: string, index: number) => {
            const sectionTitleMatch = section.match(/^##\s+(.*)/m);
            const sectionTitle = sectionTitleMatch ? sectionTitleMatch[1].replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})\s*/u, '') : t('article.sectionFallback');
            const id = sectionTitle.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <motion.div 
                key={`section-${index}`}
                id={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index === 0 ? 0.1 : 0 }}
                className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-700 p-8 md:p-12 lg:p-16 overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-slate-200/60 dark:hover:shadow-none"
              >
                <div className="prose prose-slate dark:prose-invert prose-lg md:prose-xl max-w-none prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4 prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-12 prose-table:w-full prose-table:border-collapse prose-table:my-10 prose-table:text-base prose-th:bg-slate-50 dark:prose-th:bg-slate-800/50 prose-th:p-5 prose-th:text-left prose-th:border-b-2 prose-th:border-slate-200 dark:prose-th:border-slate-700 prose-th:font-bold prose-th:text-slate-800 dark:prose-th:text-slate-200 prose-td:p-5 prose-td:border-b prose-td:border-slate-100 dark:prose-td:border-slate-700 hover:prose-tr:bg-slate-50/50 dark:hover:prose-tr:bg-slate-800/30 prose-hr:hidden transition-colors">
                  <Markdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      h2: ({node, children, ...props}) => {
                        const text = React.Children.toArray(children).join('');
                        const titleText = text.replace(/^(\p{Emoji_Presentation}|\p{Extended_Pictographic})\s*/u, '');
                        return (
                          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-12 mb-6" {...props}>
                            {titleText}
                          </h2>
                        );
                      },
                      h3: ({node, children, ...props}) => {
                        const text = React.Children.toArray(children).join('');
                        const titleText = text.replace(/^(\p{Emoji_Presentation}|\p{Extended_Pictographic})\s*/u, '');
                        return (
                          <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mt-10 mb-4" {...props}>
                            {titleText}
                          </h3>
                        );
                      },
                      ul: ({node, children, ...props}) => {
                        const hasNestedList = React.Children.toArray(children).some(child => React.isValidElement(child) && child.type === 'ul');
                        if (hasNestedList) {
                          return <CollapsibleList title={t('article.details')}>{children}</CollapsibleList>;
                        }
                        return <ul className="space-y-3 my-6 list-disc list-inside text-slate-700 dark:text-slate-300" {...props}>{children}</ul>;
                      },
                      li: ({node, children, ...props}) => (
                        <li className="leading-relaxed" {...props}>{children}</li>
                      ),
                      details: ({node, children, ...props}) => (
                        <div className="my-6 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-slate-50/30 dark:bg-slate-800/30">
                          {children}
                        </div>
                      ),
                      summary: ({node, children, ...props}) => (
                        <summary className="p-4 font-bold text-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors flex items-center gap-2 list-none outline-none text-slate-900 dark:text-white">
                          <div className="w-2 h-2 rounded-full bg-indigo-500" />
                          {children}
                        </summary>
                      ),
                      blockquote: ({node, ...props}) => (
                        <blockquote className="relative overflow-hidden bg-gradient-to-r from-indigo-50 to-blue-50/30 dark:from-indigo-900/20 dark:to-blue-900/10 border-l-4 border-indigo-500 rounded-r-2xl p-6 my-8 shadow-sm" {...props}>
                          <div className="relative z-10 text-indigo-900 dark:text-indigo-200 font-medium text-lg italic">
                            {props.children}
                          </div>
                        </blockquote>
                      )
                    }}
                  >
                    {section}
                  </Markdown>
                </div>
              </motion.div>
            );
          })}
          
          {/* Chart Section */}
          {article.chartData && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-700 p-8 md:p-12 lg:p-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {t('article.chartTitle')}
                </h2>
              </div>
              <div className="w-full h-[450px] bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 p-6 shadow-inner">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={article.chartData.map(d => ({ ...d, subject: getLocalized(d.subject) }))}>
                    <PolarGrid stroke="#cbd5e1" className="dark:stroke-slate-600" strokeDasharray="3 3" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 14, fontWeight: 600 }} className="dark:text-slate-300" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94a3b8' }} className="dark:text-slate-500" />
                    <Radar name={title} dataKey="A" stroke="#4f46e5" strokeWidth={3} fill="#4f46e5" fillOpacity={0.4} />
                    <RechartsTooltip 
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', padding: '12px 20px', backgroundColor: 'var(--color-bg-card)' }}
                      itemStyle={{ color: 'var(--color-text-main)', fontWeight: 'bold', fontSize: '16px' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          )}

          {/* Comparison Section */}
          {article.comparison && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-700 p-8 md:p-12 lg:p-16"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                  {getLocalized(article.comparison.title)}
                </h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{t('article.comparisonDesc')}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {article.comparison.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`relative rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 ${
                      item.isPremium 
                        ? 'bg-gradient-to-br from-amber-50 via-white to-amber-50/50 dark:from-amber-900/20 dark:via-slate-800 dark:to-amber-900/10 border-2 border-amber-200 dark:border-amber-700/50 shadow-2xl shadow-amber-100/50 dark:shadow-none' 
                        : 'bg-slate-50 dark:bg-slate-700/50 border-2 border-slate-100 dark:border-slate-600 hover:border-slate-200 dark:hover:border-slate-500 hover:shadow-xl dark:hover:shadow-none'
                    }`}
                  >
                    {item.isPremium && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-amber-500/30 dark:shadow-none">
                        {t('article.premium')}
                      </div>
                    )}
                    <h3 className={`text-3xl font-extrabold mb-4 tracking-tight ${item.isPremium ? 'text-amber-900 dark:text-amber-400' : 'text-slate-900 dark:text-white'}`}>
                      {getLocalized(item.name)}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-8 min-h-[48px] text-lg leading-relaxed">{getLocalized(item.description)}</p>
                    <ul className="space-y-5">
                      {item.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start">
                          <span className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{getLocalized(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Brands Section */}
          {article.brands && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-700 p-8 md:p-12 lg:p-16"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                  {t('article.brands')}
                </h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{t('article.brandsDesc')}</p>
              </div>

              <div className="space-y-12">
                {article.brands.map((brand, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-800/50 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-none overflow-hidden hover:shadow-2xl dark:hover:shadow-none transition-all duration-500">
                    <div className="p-8 md:p-10 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/80 dark:to-slate-800 border-b border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-start md:items-center gap-8">
                      <div className="p-4 bg-white dark:bg-slate-700 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-600">
                        <img src={brand.logoUrl} alt={`${brand.name} logo`} className="w-24 h-24 object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{brand.name}</h3>
                          {brand.websiteUrl && (
                            <a href={brand.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-xl transition-colors">
                              {t('article.brandWebsite')}
                            </a>
                          )}
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">{getLocalized(brand.description)}</p>
                      </div>
                    </div>
                    
                    <div className="p-8 md:p-10">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-8">
                        {t('article.products')}
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {brand.products.map((product, pIdx) => (
                          <div key={pIdx} className="group flex flex-col sm:flex-row gap-6 items-center sm:items-start p-6 rounded-3xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl dark:hover:shadow-none hover:border-slate-200 dark:hover:border-slate-600 transition-all duration-300">
                            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex-shrink-0">
                              <img 
                                src={product.imageUrl} 
                                alt={getLocalized(product.name)} 
                                className="w-32 h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="text-center sm:text-left flex-1 flex flex-col h-full">
                              <h5 className="font-bold text-slate-900 dark:text-white mb-3 text-xl">{getLocalized(product.name)}</h5>
                              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">{getLocalized(product.description)}</p>
                              
                              <div className="mt-auto space-y-4">
                                {product.reviews && product.reviews.length > 0 && (
                                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                                    {product.reviews.map((review, rIdx) => (
                                      <a key={rIdx} href={review.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-amber-50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-400 text-xs font-bold px-3 py-1.5 rounded-xl border border-amber-200 dark:border-amber-800/50 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors shadow-sm dark:shadow-none">
                                        {review.source}: {review.score}
                                      </a>
                                    ))}
                                  </div>
                                )}
                                
                                {product.productUrl && (
                                  <a href={product.productUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors group-hover:translate-x-1 duration-300">
                                    {t('article.productDetail')}
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Research Sources */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-800 p-8 md:p-12 lg:p-16"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-10">
              {t('article.sources')}
            </h3>
            <ul className="space-y-6">
              {article.researchSources.map((source, index) => (
                <li key={index} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <div className="text-slate-300 prose prose-invert max-w-none prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-strong:text-white prose-p:leading-relaxed">
                    <Markdown>{getLocalized(source)}</Markdown>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
