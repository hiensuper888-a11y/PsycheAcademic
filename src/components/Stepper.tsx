import React from 'react';
import { motion } from 'motion/react';

interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {steps.map((step, index) => (
        <button
          key={step}
          onClick={() => onStepClick(index)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
            currentStep === index
              ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
            currentStep === index ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-700'
          }`}>
            {index + 1}
          </span>
          <span className="font-medium text-sm">{step}</span>
        </button>
      ))}
    </div>
  );
};
