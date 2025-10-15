import React from 'react';
import { Button } from '@/app/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonGoogleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  showIcon?: boolean;
}

const GoogleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export const ButtonGoogle: React.FC<ButtonGoogleProps> = ({
  children = 'Continuar com Google',
  className,
  variant = 'default',
  size = 'default',
  showIcon = true,
  ...props
}) => {
  const baseClasses =
    'w-full font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500/20 relative overflow-hidden group';

  const variantClasses = {
    default: cn(
      'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 shadow-sm hover:shadow-md',
      'dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-gray-600 dark:shadow-lg dark:hover:shadow-xl',
    ),
    outline: cn(
      'bg-transparent text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400',
      'dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-500',
    ),
    ghost: cn(
      'bg-transparent text-gray-700 hover:bg-gray-100',
      'dark:text-gray-300 dark:hover:bg-gray-800',
    ),
  };

  const sizeClasses = {
    default: 'h-12 px-6 py-3 text-base',
    sm: 'h-10 px-4 py-2 text-sm',
    lg: 'h-14 px-8 py-4 text-lg',
  };

  const iconSizeClasses = {
    default: 'w-5 h-5',
    sm: 'w-4 h-4',
    lg: 'w-6 h-6',
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
      <div className="flex items-center justify-center gap-3 relative z-10">
        {showIcon && (
          <GoogleIcon
            className={cn(
              iconSizeClasses[size],
              'transition-transform duration-200 group-hover:scale-105 cursor-pointer',
            )}
          />
        )}
        <span className="font-medium cursor-pointer">{children}</span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out dark:via-white/5" />
    </Button>
  );
};

export default ButtonGoogle;
