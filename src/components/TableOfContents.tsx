import React, { useState } from 'react';
import { ChevronDown, ChevronUp, List } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TOCItem {
  title: string;
  id: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 p-6 sticky top-24 z-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-bold text-slate-900 mb-4 hover:text-indigo-600 transition-colors"
      >
        <span className="flex items-center gap-2 text-lg">
          <List className="w-6 h-6 text-indigo-500" />
          Danh mục
        </span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="space-y-1 overflow-hidden"
          >
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  className="block text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl px-3 py-2 transition-all duration-200 font-medium text-sm"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
