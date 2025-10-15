'use client';
import { createContext } from 'react';
import { ThemeProvider } from './theme-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ContextsProviderProps {
  children: React.ReactNode;
}

export const ContextsProviderProps = createContext({} as ContextsProviderProps);

export function ContextsProvider({ children }: ContextsProviderProps) {
  const queryClient = new QueryClient();
  return (
    <ContextsProviderProps.Provider value={{ children }}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </ContextsProviderProps.Provider>
  );
}
