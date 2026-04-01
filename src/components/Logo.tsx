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
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="100%" stopColor="#0F0D2E" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circle */}
        <circle cx="100" cy="100" r="96" fill="url(#bgGrad)" stroke="url(#logoGrad)" strokeWidth="2" />

        {/* Dashed outer ring */}
        <circle cx="100" cy="100" r="86" stroke="url(#glowGrad)" strokeWidth="0.5" fill="none" strokeDasharray="4 6" />

        {/* Neural network dots */}
        <circle cx="55" cy="62" r="2" fill="#818CF8" opacity="0.5" />
        <circle cx="75" cy="46" r="1.5" fill="#A78BFA" opacity="0.4" />
        <circle cx="125" cy="46" r="1.5" fill="#A78BFA" opacity="0.4" />
        <circle cx="145" cy="62" r="2" fill="#818CF8" opacity="0.5" />
        <circle cx="153" cy="90" r="1.5" fill="#A78BFA" opacity="0.3" />
        <circle cx="47" cy="90" r="1.5" fill="#A78BFA" opacity="0.3" />

        {/* Neural connection lines */}
        <line x1="55" y1="62" x2="75" y2="46" stroke="#4F46E5" strokeWidth="0.5" opacity="0.4" />
        <line x1="75" y1="46" x2="125" y2="46" stroke="#4F46E5" strokeWidth="0.5" opacity="0.4" />
        <line x1="125" y1="46" x2="145" y2="62" stroke="#4F46E5" strokeWidth="0.5" opacity="0.4" />
        <line x1="145" y1="62" x2="153" y2="90" stroke="#7C3AED" strokeWidth="0.5" opacity="0.3" />
        <line x1="55" y1="62" x2="47" y2="90" stroke="#7C3AED" strokeWidth="0.5" opacity="0.3" />

        {/* PSI Symbol – left arc */}
        <path d="M 68 77 Q 54 97 68 122" stroke="url(#logoGrad)" strokeWidth="6.5" strokeLinecap="round" fill="none" filter="url(#glow)" />
        {/* PSI Symbol – right arc */}
        <path d="M 132 77 Q 146 97 132 122" stroke="url(#logoGrad)" strokeWidth="6.5" strokeLinecap="round" fill="none" filter="url(#glow)" />
        {/* PSI Symbol – top connector arc */}
        <path d="M 68 77 Q 100 55 132 77" stroke="url(#logoGrad)" strokeWidth="6.5" strokeLinecap="round" fill="none" filter="url(#glow)" />
        {/* PSI Symbol – center vertical */}
        <line x1="100" y1="61" x2="100" y2="146" stroke="url(#logoGrad)" strokeWidth="7" strokeLinecap="round" filter="url(#glow)" />
        {/* PSI Symbol – bottom horizontal bar */}
        <line x1="82" y1="146" x2="118" y2="146" stroke="url(#logoGrad)" strokeWidth="6.5" strokeLinecap="round" filter="url(#glow)" />

        {/* Accent glow nodes */}
        <circle cx="100" cy="61" r="5" fill="#A78BFA" filter="url(#glow)" />
        <circle cx="68" cy="122" r="3.5" fill="#818CF8" opacity="0.85" />
        <circle cx="132" cy="122" r="3.5" fill="#818CF8" opacity="0.85" />

        {/* Subtle inner ring */}
        <circle cx="100" cy="100" r="44" stroke="url(#glowGrad)" strokeWidth="1" fill="none" opacity="0.25" />
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
