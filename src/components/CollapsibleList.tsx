import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CollapsibleList: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="my-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between py-3 border-b border-slate-200 hover:border-indigo-500 transition-colors text-slate-800 font-semibold"
      >
        <span className="text-lg">{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5 text-indigo-600" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="overflow-hidden"
          >
            <div className="py-4 text-slate-700 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
