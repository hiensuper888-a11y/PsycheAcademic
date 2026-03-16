import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export const Terms: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">{t('terms.title')}</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">{t('terms.lastUpdated')} {new Date().toLocaleDateString(i18n.language)}</p>
        
        <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('terms.section1.title')}</h2>
            <p>{t('terms.section1.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('terms.section2.title')}</h2>
            <p>{t('terms.section2.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('terms.section3.title')}</h2>
            <p>{t('terms.section3.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('terms.section4.title')}</h2>
            <p>{t('terms.section4.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('terms.section5.title')}</h2>
            <p>{t('terms.section5.content')}</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};
