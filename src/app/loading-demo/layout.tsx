import React from 'react';

export const metadata = {
  title: 'Skeleton Loader & CLS Optimization Demo | Amit Kumar',
  description: 'A technical demonstration of Cumulative Layout Shift (CLS) optimization using responsive skeleton loaders and shimmer animation cards.',
  keywords: [
    'CLS Optimization',
    'Skeleton Loader',
    'Shimmer Effect',
    'Next.js Loading States',
    'Web Vitals Performance',
    'React Hydration Delay Simulation'
  ],
  openGraph: {
    type: 'website',
    url: 'https://amitrazz.in/loading-demo',
    title: 'Skeleton Loader & CLS Optimization Demo | Amit Kumar',
    description: 'Technical demonstration of Cumulative Layout Shift (CLS) optimization using responsive skeleton loaders.',
  },
};

export default function LoadingDemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
