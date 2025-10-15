'use client';
import { createContext } from 'react';
import { ThemeProvider } from './theme-provider';

interface ContextsProviderProps {
  children: React.ReactNode;
}

export const ContextsProviderProps = createContext({} as ContextsProviderProps);

export function ContextsProvider({ children }: ContextsProviderProps) {
  return (
    <ContextsProviderProps.Provider value={{ children }}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ContextsProviderProps.Provider>
  );
}
