import React from 'react';
import { Brain } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  return <Brain className={className} />;
};
