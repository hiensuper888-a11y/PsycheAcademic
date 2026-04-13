import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "w-10 h-10",
  showText = false,
  size = 'md'
}) => {
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center ${showText ? 'gap-3' : ''}`}>
      <svg
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="PsycheAcademic Logo"
      >
        <defs>
          <linearGradient id="bookLeftGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#312E81" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
          <linearGradient id="bookRightGrad" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#4C1D95" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="psiGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="40%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
          <linearGradient id="brainLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="brainRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F472B6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D946EF" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glowLight" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glowNodes" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- Background Subtle Glow --- */}
        <circle cx="100" cy="100" r="80" fill="#4F46E5" opacity="0.03" filter="url(#glowLight)" />
        
        {/* --- Academic Open Book --- */}
        {/* Back layered pages */}
        <path d="M 40 170 Q 70 155 100 170 L 100 150 Q 70 135 40 150 Z" fill="#6366F1" opacity="0.3" />
        <path d="M 160 170 Q 130 155 100 170 L 100 150 Q 130 135 160 150 Z" fill="#8B5CF6" opacity="0.3" />
        {/* Main pages */}
        <path d="M 30 160 Q 65 145 100 160 L 100 115 Q 65 100 30 115 Z" fill="url(#bookLeftGrad)" filter="url(#glowLight)" />
        <path d="M 170 160 Q 135 145 100 160 L 100 115 Q 135 100 170 115 Z" fill="url(#bookRightGrad)" filter="url(#glowLight)" />
        {/* Page highlight lines */}
        <path d="M 40 148 Q 70 133 100 148" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        <path d="M 160 148 Q 130 133 100 148" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />

        {/* --- Brain Lobes (Cognition / Mind) --- */}
        <path d="M 94 98 C 40 105, 45 50, 65 40 C 80 30, 94 45, 94 65 Z" fill="url(#brainLeft)" />
        <path d="M 106 98 C 160 105, 155 50, 135 40 C 120 30, 106 45, 106 65 Z" fill="url(#brainRight)" />
        
        {/* Neural Network Inside Brain */}
        <g filter="url(#glowNodes)">
          {/* Left Lobe Nodes */}
          <circle cx="70" cy="55" r="3.5" fill="#FFFFFF" />
          <circle cx="82" cy="78" r="3.5" fill="#FFFFFF" />
          <circle cx="58" cy="72" r="2.5" fill="#E0F2FE" />
          <line x1="70" y1="55" x2="82" y2="78" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
          <line x1="58" y1="72" x2="70" y2="55" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
          <line x1="82" y1="78" x2="94" y2="88" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
          
          {/* Right Lobe Nodes */}
          <circle cx="130" cy="55" r="3.5" fill="#FFFFFF" />
          <circle cx="118" cy="78" r="3.5" fill="#FFFFFF" />
          <circle cx="142" cy="72" r="2.5" fill="#FCE7F3" />
          <line x1="130" y1="55" x2="118" y2="78" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
          <line x1="142" y1="72" x2="130" y2="55" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
          <line x1="118" y1="78" x2="106" y2="88" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
        </g>

        {/* --- The Psi (Ψ) Tree of Psychology --- */}
        <path d="M 30 55 C 30 105, 65 110, 100 110" fill="none" stroke="url(#psiGrad)" strokeWidth="10" strokeLinecap="round" filter="url(#glowLight)" />
        <path d="M 170 55 C 170 105, 135 110, 100 110" fill="none" stroke="url(#psiGrad)" strokeWidth="10" strokeLinecap="round" filter="url(#glowLight)" />
        <line x1="100" y1="110" x2="100" y2="40" stroke="url(#psiGrad)" strokeWidth="11" strokeLinecap="round" filter="url(#glowLight)" />

        {/* --- Academic Mortarboard (Graduation Cap) --- */}
        <g filter="url(#glowLight)">
          {/* Tassel */}
          <path d="M 100 20 L 130 35 L 130 52" fill="none" stroke="#FDE047" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="130" cy="53" r="3.5" fill="#FDE047" />
          
          {/* Cap Base */}
          <path d="M 75 28 L 75 42 Q 100 52 125 42 L 125 28 Z" fill="#312E81" />
          
          {/* Cap Top */}
          <path d="M 100 5 L 140 18 L 100 31 L 60 18 Z" fill="#1E1B4B" stroke="#818CF8" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="100" cy="18" r="3" fill="#FDE047" />
        </g>

        {/* Glowing Stars / Sparkles */}
        <path d="M 20 45 L 22 50 L 27 52 L 22 54 L 20 59 L 18 54 L 13 52 L 18 50 Z" fill="#FDE047" opacity="0.8" filter="url(#glowLight)" />
        <path d="M 180 55 L 181.5 59 L 185.5 60.5 L 181.5 62 L 180 66 L 178.5 62 L 174.5 60.5 L 178.5 59 Z" fill="#FDE047" opacity="0.6" filter="url(#glowLight)" />
        <circle cx="35" cy="25" r="2" fill="#A78BFA" filter="url(#glowLight)" />
        <circle cx="165" cy="25" r="2.5" fill="#818CF8" filter="url(#glowLight)" />
        <circle cx="15" cy="85" r="1.5" fill="#38BDF8" opacity="0.6" />
        <circle cx="185" cy="115" r="2" fill="#38BDF8" opacity="0.6" />
      </svg>

      {showText && (
        <span className={`font-serif font-bold ${textSizes[size]} tracking-tight`}>
          <span className="text-slate-900 dark:text-white">Psyche</span>
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Academic</span>
        </span>
      )}
    </div>
  );
};
