'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import ThemeSwitch from '@/components/theme-switch';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <Header />
        {children}
        <Footer />
        <ThemeSwitch />
        <Toaster position="top-right" />
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
