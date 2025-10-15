import React from 'react';
import { Button } from '@/app/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonAuthProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}

export const ButtonAuth: React.FC<ButtonAuthProps> = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  ...props
}) => {
  const baseClasses =
    'w-full font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary/20';

  const variantClasses = {
    default:
      'bg-gradient-to-br from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl',
    outline:
      'border-2 border-primary/20 bg-transparent text-primary hover:bg-primary/5 hover:border-primary/40',
  };

  const sizeClasses = {
    default: 'h-12 px-6 py-3 text-base',
    sm: 'h-10 px-4 py-2 text-sm',
    lg: 'h-14 px-8 py-4 text-lg',
  };

  return (
    <Button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonAuth;
