import React from 'react';
import { Brain } from 'lucide-react';

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 40, className = '' }) => {
  return (
    <div
      className={`relative flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <Brain size={size * 0.6} className="text-white" />
    </div>
  );
};

export default Logo;
