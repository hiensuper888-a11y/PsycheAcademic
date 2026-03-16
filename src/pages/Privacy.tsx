import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export const Privacy: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 p-8 md:p-12"
      >
        <h1 className="text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 tracking-tight">{t('privacy.title')}</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-12 pb-8 border-b border-slate-100 dark:border-slate-800 text-lg">{t('privacy.lastUpdated')} {new Date().toLocaleDateString(i18n.language)}</p>
        
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-p:leading-relaxed prose-li:leading-relaxed">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t('privacy.section1.title')}</h2>
            <p className="text-lg">{t('privacy.section1.content')}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t('privacy.section2.title')}</h2>
            <p className="mb-4 text-lg">{t('privacy.section2.content1')}</p>
            <ul className="space-y-3 text-lg">
              <li>{t('privacy.section2.list1')}</li>
              <li>{t('privacy.section2.list2')}</li>
              <li>{t('privacy.section2.list3')}</li>
              <li>{t('privacy.section2.list4')}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t('privacy.section3.title')}</h2>
            <p className="text-lg">{t('privacy.section3.content')}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t('privacy.section4.title')}</h2>
            <p className="text-lg">{t('privacy.section4.content')}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t('privacy.section5.title')}</h2>
            <p className="text-lg">{t('privacy.section5.content')}</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};
