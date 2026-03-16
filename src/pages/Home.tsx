import React from 'react';
import { Link } from 'react-router-dom';
import { psychologyData } from '../data/psychologyData';
import { motion } from 'motion/react';
import { Brain, BookOpen, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'vi' | 'en' | 'zh';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900 mb-8"
            >
              {t('hero.title1')} <br className="hidden md:block" />
              <span className="text-indigo-600 italic">{t('hero.title2')}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <a href="#articles" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1">
                {t('hero.btn.explore')}
              </a>
              <a href="#features" className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-10 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1">
                {t('hero.btn.learnMore')}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('feat.research.title')}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{t('feat.research.desc')}</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Brain size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('feat.analysis.title')}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{t('feat.analysis.desc')}</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mb-8">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('feat.safety.title')}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{t('feat.safety.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section id="articles" className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">{t('home.libraryTitle')}</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {psychologyData.map((item, index) => {
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
                className="group bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={item.imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{title}</h3>
                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed text-lg">{shortDesc}</p>
                  <Link 
                    to={`/article/${item.id}`}
                    className="inline-flex items-center justify-center w-full bg-slate-900 hover:bg-indigo-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-slate-200 hover:shadow-indigo-200"
                  >
                    {t('home.readMore')}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
