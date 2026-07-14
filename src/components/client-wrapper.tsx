'use client';

import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import dynamic from 'next/dynamic';

const ThemeSwitch = dynamic(() => import('@/components/theme-switch'), {
  ssr: false,
});

const Toaster = dynamic(
  () => import('react-hot-toast').then((mod) => mod.Toaster),
  {
    ssr: false,
  }
);

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <Header />
        {children}
        <ThemeSwitch />
        <Toaster position="top-right" />
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
