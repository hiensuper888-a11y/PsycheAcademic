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
          <linearGradient id="psiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          
          <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E0E7FF" />
          </linearGradient>

          <filter id="neon" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background Data Hexagon */}
        <polygon points="100,15 173.6,57.5 173.6,142.5 100,185 26.4,142.5 26.4,57.5" fill="none" stroke="#6366F1" strokeWidth="1.5" opacity="0.15" />
        <polygon points="100,30 160.6,65 160.6,135 100,170 39.4,135 39.4,65" fill="none" stroke="#818CF8" strokeWidth="0.5" opacity="0.1" />

        {/* Scientific Atoms (Orbits) */}
        <g filter="url(#neon)">
          <ellipse cx="100" cy="100" rx="75" ry="22" transform="rotate(30 100 100)" fill="none" stroke="#0EA5E9" strokeWidth="1.5" opacity="0.5" />
          <ellipse cx="100" cy="100" rx="75" ry="22" transform="rotate(150 100 100)" fill="none" stroke="#A855F7" strokeWidth="1.5" opacity="0.5" />
          <ellipse cx="100" cy="100" rx="75" ry="22" transform="rotate(90 100 100)" fill="none" stroke="#6366F1" strokeWidth="1" opacity="0.3" />
        </g>

        {/* Neural Synapse Connections (Background) */}
        <g stroke="#818CF8" strokeWidth="2.5" opacity="0.6" strokeDasharray="3 4">
          <line x1="45" y1="65" x2="100" y2="35" />
          <line x1="155" y1="65" x2="100" y2="35" />
          <line x1="60" y1="102" x2="100" y2="85" />
          <line x1="140" y1="102" x2="100" y2="85" />
          <line x1="45" y1="65" x2="60" y2="102" />
          <line x1="155" y1="65" x2="140" y2="102" />
        </g>

        {/* Main Corporate Psi (Ψ) Mark */}
        <path d="M 45 65 C 45 115, 80 130, 100 130" fill="none" stroke="url(#psiGrad)" strokeWidth="14" strokeLinecap="round" />
        <path d="M 155 65 C 155 115, 120 130, 100 130" fill="none" stroke="url(#psiGrad)" strokeWidth="14" strokeLinecap="round" />
        <line x1="100" y1="35" x2="100" y2="165" stroke="url(#psiGrad)" strokeWidth="14" strokeLinecap="round" />

        {/* Scientific/Neural Nodes */}
        <g filter="url(#neon)">
          {/* Primary Nodes */}
          <circle cx="45" cy="65" r="7" fill="url(#nodeGrad)" stroke="#0EA5E9" strokeWidth="3" />
          <circle cx="155" cy="65" r="7" fill="url(#nodeGrad)" stroke="#A855F7" strokeWidth="3" />
          <circle cx="100" cy="35" r="7" fill="url(#nodeGrad)" stroke="#38BDF8" strokeWidth="3" />
          <circle cx="100" cy="165" r="7" fill="url(#nodeGrad)" stroke="#6366F1" strokeWidth="3" />
          <circle cx="100" cy="130" r="8" fill="url(#nodeGrad)" stroke="#818CF8" strokeWidth="4" />
          
          {/* Secondary Network Nodes (Adapts to theme) */}
          <circle cx="60" cy="102" r="5" fill="currentColor" opacity="0.9" />
          <circle cx="140" cy="102" r="5" fill="currentColor" opacity="0.9" />
          <circle cx="100" cy="85" r="5" fill="currentColor" opacity="0.9" />
          
          {/* Outer Orbit Electrons */}
          <circle cx="35" cy="138" r="3.5" fill="#0EA5E9" />
          <circle cx="165" cy="62" r="3.5" fill="#A855F7" />
          <circle cx="100" cy="17" r="3.5" fill="#6366F1" />
        </g>
      </svg>

      {showText && (
        <span className={`font-serif font-bold ${textSizes[size]} tracking-tight flex items-center`}>
          <span className="text-slate-900 dark:text-white">Psyche</span>
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Academic</span>
        </span>
      )}
    </div>
  );
};
