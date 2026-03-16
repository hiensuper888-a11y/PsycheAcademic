import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Psi Symbol (Ψ) */}
      <path d="M12 2v20" />
      <path d="M5 4v7a7 7 0 0 0 14 0V4" />
      <path d="M8 22h8" />
    </svg>
  );
};
