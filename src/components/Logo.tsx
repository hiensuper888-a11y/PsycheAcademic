'use client';
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
          {/* 3D Brain Gradients */}
          <linearGradient id="brainFront" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" /> {/* Light Sky Blue */}
            <stop offset="50%" stopColor="#6366F1" /> {/* Indigo */}
            <stop offset="100%" stopColor="#9333EA" /> {/* Purple */}
          </linearGradient>

          <linearGradient id="brainBack" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F172A" /> 
            <stop offset="100%" stopColor="#4338CA" /> 
          </linearGradient>

          {/* 3D Book Gradients */}
          <linearGradient id="pageTop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>

          <linearGradient id="pageDepth" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          <linearGradient id="coverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#312E81" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>

          <linearGradient id="goldGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FDE68A" />
          </linearGradient>

          {/* 3D & Glow Filters */}
          <filter id="neon_glow_3d" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="6" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <filter id="drop_shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.4"/>
          </filter>
        </defs>

        {/* BACKGROUND HALO */}
        <ellipse cx="100" cy="90" rx="60" ry="50" fill="url(#brainFront)" opacity="0.15" filter="url(#neon_glow_3d)"/>

        {/* ===============================
             3D BOOK (Solid Filled Shapes for Real Depth)
             =============================== */}
        <g transform="translate(0, 15)">
          {/* Book Back Cover / Shadow Depth */}
          <path d="M 20 150 Q 60 135, 100 150 Q 140 135, 180 150 L 175 165 Q 140 150, 100 165 Q 60 150, 25 165 Z" fill="url(#coverGrad)" filter="url(#drop_shadow)" />
          
          {/* Left Pages Stack (Depth) */}
          <path d="M 20 150 L 25 165 Q 60 150, 100 165 L 100 150 Q 60 135, 20 150 Z" fill="url(#pageDepth)" />
          {/* Right Pages Stack (Depth) */}
          <path d="M 180 150 L 175 165 Q 140 150, 100 165 L 100 150 Q 140 135, 180 150 Z" fill="url(#pageDepth)" />

          {/* Top Left Page */}
          <path d="M 15 145 Q 60 125, 100 145 L 100 150 Q 60 130, 20 150 Z" fill="#F8FAFC" />
          <path d="M 15 145 Q 60 125, 100 145 Q 60 135, 15 145 Z" fill="url(#pageTop)" />

          {/* Top Right Page */}
          <path d="M 185 145 Q 140 125, 100 145 L 100 150 Q 140 130, 180 150 Z" fill="#F8FAFC" />
          <path d="M 185 145 Q 140 125, 100 145 Q 140 135, 185 145 Z" fill="url(#pageTop)" />
          
          {/* Spine Center Gold Binding / Glow */}
          <path d="M 97 140 Q 100 138, 103 140 L 103 162 Q 100 165, 97 162 Z" fill="url(#goldGlow)" filter="url(#neon_glow_3d)" opacity="0.9" />
        </g>

        {/* ===============================
             3D BRAIN (Volumetric Multi-layered Mesh)
             =============================== */}
        {/* Back Layer (Shadows & Depth Thickness) */}
        <g fill="none" stroke="url(#brainBack)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" filter="url(#drop_shadow)">
          <path d="M 97 130 C 40 130, 15 80, 48 35 C 65 10, 88 15, 97 38" />
          <path d="M 103 130 C 160 130, 185 80, 152 35 C 135 10, 112 15, 103 38" />
        </g>

        {/* Middle Layer (Core Folds & Bright Mid-tones) */}
        <g fill="none" stroke="url(#brainFront)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
          {/* Left Internal Folds */}
          <path d="M 95 110 C 55 110, 35 85, 55 55 C 65 35, 80 35, 95 50" />
          <path d="M 95 85 C 60 85, 50 65, 75 50 C 85 40, 90 40, 95 60" />
          <path d="M 50 65 C 30 80, 40 100, 65 110" />
          <path d="M 80 120 C 70 100, 95 95, 95 95" />

          {/* Right Internal Folds */}
          <path d="M 105 110 C 145 110, 165 85, 145 55 C 135 35, 120 35, 105 50" />
          <path d="M 105 85 C 140 85, 150 65, 125 50 C 115 40, 110 40, 105 60" />
          <path d="M 150 65 C 170 80, 160 100, 135 110" />
          <path d="M 120 120 C 130 100, 105 95, 105 95" />
        </g>

        {/* Front Layer (Top Highlights) - Creates the Holographic Shell */}
        <g fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" filter="url(#neon_glow_3d)">
          <path d="M 92 110 C 60 110, 45 80, 52 50 C 62 30, 78 30, 92 48" />
          <path d="M 108 110 C 140 110, 155 80, 148 50 C 138 30, 122 30, 108 48" />
          <path d="M 92 88 C 70 88, 65 65, 78 48" />
          <path d="M 108 88 C 130 88, 135 65, 122 48" />
        </g>

        {/* Glowing Data Nodes (Energy) */}
        <g fill="url(#goldGlow)" filter="url(#neon_glow_3d)">
          {/* Embedded in Brain Left */}
          <circle cx="52" cy="50" r="3.5" />
          <circle cx="78" cy="48" r="2.5" />
          <circle cx="92" cy="88" r="3" />
          <circle cx="95" cy="110" r="4" />
          <circle cx="45" cy="100" r="2" />
          
          {/* Embedded in Brain Right */}
          <circle cx="148" cy="50" r="3.5" />
          <circle cx="122" cy="48" r="2.5" />
          <circle cx="108" cy="88" r="3" />
          <circle cx="105" cy="110" r="4" />
          <circle cx="155" cy="100" r="2" />
        </g>

        {/* ===============================
             CENTRAL ASCENDING DATA (Beam)
             =============================== */}
        <path d="M 95 155 L 105 155 L 105 40 L 95 40 Z" fill="url(#goldGlow)" opacity="0.15" filter="url(#neon_glow_3d)" />
        
        <g fill="#FFFFFF" filter="url(#neon_glow_3d)">
          <circle cx="100" cy="150" r="4" />
          <circle cx="96" cy="130" r="2" />
          <circle cx="104" cy="115" r="2.5" />
          <circle cx="98" cy="95" r="1.5" />
          <circle cx="102" cy="75" r="3" />
          <circle cx="100" cy="55" r="2" />
          <circle cx="100" cy="35" r="4.5" />
        </g>
      </svg>

      {showText && (
        <span className={`font-serif font-bold ${textSizes[size]} tracking-tight flex items-center`}>
          <span className="text-slate-900 dark:text-white">Psyche</span>
          <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">Academic</span>
        </span>
      )}
    </div>
  );
};
