import React, { useState } from 'react';
import { ChevronDown, ChevronUp, List, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

interface TOCItem {
  title: string;
  id: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 p-6 sticky top-24 z-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-bold text-slate-900 mb-4 hover:text-indigo-600 transition-colors"
      >
        <span className="flex items-center gap-2 text-lg">
          <List className="w-6 h-6 text-indigo-500" />
          {t('article.tocTitle')}
        </span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            {/* TOC Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder={t('article.tocSearchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all"
              />
            </div>

            <ul className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.id}`}
                      className="block text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl px-3 py-2 transition-all duration-200 font-medium text-sm"
                    >
                      {item.title}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-slate-400 text-xs text-center py-2">{t('article.tocNoResults')}</li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
