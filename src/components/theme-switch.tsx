"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/theme-context';
import { LuSun, LuMoon } from 'react-icons/lu';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return empty placeholder with identical shape to prevent hydration layout mismatch
    return (
      <button
        className="fixed bottom-6 right-6 bg-white/80 border border-zinc-200/50 shadow-lg w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md dark:bg-zinc-900/80 dark:border-zinc-800/80 text-zinc-800 dark:text-zinc-200 z-[99]"
        aria-label="Toggle Theme Mode"
      />
    );
  }

  return (
    <button
      className="fixed bottom-6 right-6 bg-white/80 border border-zinc-200/50 shadow-lg w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-md dark:bg-zinc-900/80 dark:border-zinc-800/80 text-zinc-800 dark:text-zinc-200 z-[99] focus:outline-none"
      onClick={toggleTheme}
      aria-label="Toggle Theme Mode"
    >
      {theme === 'light' ? <LuMoon size={18} /> : <LuSun size={18} />}
    </button>
  );
}
