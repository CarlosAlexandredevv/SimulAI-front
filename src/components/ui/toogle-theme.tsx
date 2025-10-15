'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ToogleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="cursor-pointer border p-2 hover:bg-muted hover:text-foreground transition-colors dark:hover:bg-muted dark:hover:text-foreground"
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
}
