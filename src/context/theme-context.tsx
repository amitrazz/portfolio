'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      window.localStorage.setItem('themeUserSet', 'true');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      window.localStorage.setItem('themeUserSet', 'true');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    // The blocking inline script in layout.tsx already applied the correct class
    // before the first paint. Here we only sync React state to match the DOM.
    try {
      const localTheme = window.localStorage.getItem('theme') as Theme | null;
      const userSet = window.localStorage.getItem('themeUserSet') === 'true';
      if (userSet && (localTheme === 'light' || localTheme === 'dark')) {
        setTheme(localTheme);
      } else {
        // No explicit user preference — mirror the OS/browser setting
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }
    } catch {
      setTheme('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return context;
}
