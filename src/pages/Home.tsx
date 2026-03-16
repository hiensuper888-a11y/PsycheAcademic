import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { psychologyData } from '../data/psychologyData';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, BookOpen, Lightbulb, Search, ArrowRight, Filter, User, Calendar, Tag, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language as 'vi' | 'en' | 'zh';
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Extract unique authors and topics
  const authors = Array.from(new Set(psychologyData.map(item => item.author))).sort();
  const topics = Array.from(new Set(psychologyData.map(item => {
    const cat = typeof item.category === 'string' ? item.category : (item.category[currentLang] || item.category['en']);
    return cat;
  }))).sort();
  const years = Array.from(new Set(psychologyData.map(item => item.date.split('-')[0]))).sort((a, b) => b.localeCompare(a));

  const filteredArticles = psychologyData.filter(item => {
    const title = typeof item.title === 'string' ? item.title : (item.title[currentLang] || item.title['vi']);
    const shortDesc = typeof item.shortDescription === 'string' ? item.shortDescription : (item.shortDescription[currentLang] || item.shortDescription['vi']);
    const category = typeof item.category === 'string' ? item.category : (item.category[currentLang] || item.category['en']);
    const query = searchQuery.toLowerCase();
    
    const matchesSearch = title.toLowerCase().includes(query) || shortDesc.toLowerCase().includes(query);
    const matchesAuthor = selectedAuthor === 'all' || item.author === selectedAuthor;
    const matchesTopic = selectedTopic === 'all' || category === selectedTopic;
    const matchesDate = selectedDate === 'all' || item.date.startsWith(selectedDate);

    return matchesSearch && matchesAuthor && matchesTopic && matchesDate;
  });

  const suggestions = searchQuery.length >= 2 
    ? psychologyData.filter(item => {
        const title = typeof item.title === 'string' ? item.title : (item.title[currentLang] || item.title['vi']);
        return title.toLowerCase().includes(searchQuery.toLowerCase());
      }).slice(0, 5)
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-slate-100 bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000&auto=format&fit=crop" 
            alt="Brain and Psychology" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-8"
            >
              {t('hero.title1')} <br className="hidden md:block" />
              <span className="text-indigo-400 italic">{t('hero.title2')}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <a href="#articles" className="bg-indigo-500 hover:bg-indigo-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-1">
                {t('hero.btn.explore')}
              </a>
              <a href="#features" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1">
                {t('hero.btn.learnMore')}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-8">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('feat.research.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{t('feat.research.desc')}</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-8">
                <Brain size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('feat.analysis.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{t('feat.analysis.desc')}</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl flex items-center justify-center mb-8">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('feat.safety.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{t('feat.safety.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section id="articles" className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">{t('home.libraryTitle')}</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full mb-12"></div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group" ref={searchRef}>
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder={t('home.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              className="w-full pl-16 pr-6 py-5 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-[2rem] text-lg text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 shadow-xl shadow-slate-200/40 dark:shadow-none transition-all"
            />

            {/* Suggestions Dropdown */}
            <AnimatePresence>
              {isFocused && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden z-50 p-2"
                >
                  {suggestions.map((item) => {
                    const title = typeof item.title === 'string' ? item.title : (item.title[currentLang] || item.title['vi']);
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          navigate(`/article/${item.id}`);
                          setIsFocused(false);
                          setSearchQuery('');
                        }}
                        className="w-full flex items-center justify-between px-6 py-4 hover:bg-indigo-50 dark:hover:bg-slate-700 rounded-2xl transition-colors text-left group/item"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover/item:bg-indigo-100 dark:group-hover/item:bg-indigo-900/50 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors">
                            <BookOpen size={20} />
                          </div>
                          <span className="font-bold text-slate-700 dark:text-slate-200 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors">
                            {title}
                          </span>
                        </div>
                        <ArrowRight size={18} className="text-slate-300 dark:text-slate-600 group-hover/item:text-indigo-400 dark:group-hover/item:text-indigo-500 group-hover/item:translate-x-1 transition-all" />
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Filter Toggle & Active Filters */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  showFilters || selectedAuthor !== 'all' || selectedTopic !== 'all' || selectedDate !== 'all'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <Filter size={18} />
                {t('home.filters.title')}
                {(selectedAuthor !== 'all' || selectedTopic !== 'all' || selectedDate !== 'all') && (
                  <span className="ml-1 w-5 h-5 bg-white text-indigo-600 rounded-full text-xs flex items-center justify-center font-bold">
                    {[selectedAuthor, selectedTopic, selectedDate].filter(f => f !== 'all').length}
                  </span>
                )}
              </button>

              {(selectedAuthor !== 'all' || selectedTopic !== 'all' || selectedDate !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedAuthor('all');
                    setSelectedTopic('all');
                    setSelectedDate('all');
                  }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-all"
                >
                  <X size={18} />
                  {t('home.filters.clear')}
                </button>
              )}
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-700">
                    {/* Author Filter */}
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        <User size={16} />
                        {t('home.filters.author')}
                      </label>
                      <select
                        value={selectedAuthor}
                        onChange={(e) => setSelectedAuthor(e.target.value)}
                        className="w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                      >
                        <option value="all">{t('home.filters.allAuthors')}</option>
                        {authors.map(author => (
                          <option key={author} value={author}>{author}</option>
                        ))}
                      </select>
                    </div>

                    {/* Topic Filter */}
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        <Tag size={16} />
                        {t('home.filters.topic')}
                      </label>
                      <select
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                      >
                        <option value="all">{t('home.filters.allTopics')}</option>
                        {topics.map(topic => (
                          <option key={topic} value={topic}>{topic}</option>
                        ))}
                      </select>
                    </div>

                    {/* Date Filter */}
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        <Calendar size={16} />
                        {t('home.filters.date')}
                      </label>
                      <select
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                      >
                        <option value="all">{t('home.filters.allDates')}</option>
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArticles.map((item, index) => {
              // Use localized strings if available, fallback to vi
              const title = typeof item.title === 'string' ? item.title : (item.title[currentLang] || item.title['vi']);
              const shortDesc = typeof item.shortDescription === 'string' ? item.shortDescription : (item.shortDescription[currentLang] || item.shortDescription['vi']);
              
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white dark:bg-slate-800 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-2xl dark:hover:shadow-indigo-900/20 transition-all duration-500 flex flex-col"
                >
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-indigo-900/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={item.imageUrl} 
                      alt={title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed text-lg">{shortDesc}</p>
                    <Link 
                      to={`/article/${item.id}`}
                      className="inline-flex items-center justify-center w-full bg-slate-900 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-slate-200 dark:shadow-none hover:shadow-indigo-200 dark:hover:shadow-indigo-900/50"
                    >
                      {t('home.readMore')}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-slate-500 font-medium">{t('home.noResults')}</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-6 text-indigo-600 font-bold hover:underline"
            >
              {t('home.clearSearch')}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
