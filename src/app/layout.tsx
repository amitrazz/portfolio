import ClientWrapper from '@/components/client-wrapper';
import Footer from '@/components/footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Amit Kumar | Principal Software Engineer & Software Architect',
  description: 'Amit Kumar is a Principal Software Engineer and Software Architect based in Bangalore, India, specializing in Distributed Systems, Cloud Architecture, Event-Driven Platforms, and Full-Stack Performance Engineering.',
  keywords: [
    'Amit Kumar',
    'Principal Software Engineer',
    'Software Architect',
    'Distributed Systems',
    'Cloud Architecture',
    'Event-Driven Systems',
    'Platform Engineering',
    'Micro-frontends',
    'React',
    'Next.js',
    'TypeScript',
    'Performance Optimization'
  ],
  authors: [{ name: 'Amit Kumar', url: 'https://amitrazz.in' }],
  creator: 'Amit Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amitrazz.in',
    title: 'Amit Kumar | Principal Software Engineer & Software Architect',
    description: 'Specializing in Distributed Systems, Micro-frontends, AWS Cloud Architecture, and Performance Engineering. Building scalable enterprise platforms.',
    siteName: 'Amit Kumar Portfolio',
    images: [
      {
        url: 'https://amitrazz.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amit Kumar - Principal Software Engineer & Architect Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Kumar | Principal Software Engineer & Software Architect',
    description: 'Specializing in Distributed Systems, Micro-frontends, AWS Cloud Architecture, and Performance Engineering.',
    creator: '@amitrazz',
    images: ['https://amitrazz.in/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
  alternates: {
    canonical: 'https://amitrazz.in',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fcfcfd' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Amit Kumar',
      jobTitle: 'Principal Software Engineer & Software Architect',
      url: 'https://amitrazz.in',
      sameAs: [
        'https://github.com/amitrazz',
        'https://www.linkedin.com/in/amitrazz',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressCountry: 'India',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'KNS Institute of Technology',
      },
      knowsAbout: [
        'Distributed Systems',
        'Software Architecture',
        'Microservices',
        'Micro-frontends',
        'React',
        'Next.js',
        'TypeScript',
        'GraphQL',
        'Cloud Architecture',
        'AWS',
        'Performance Optimization',
        'DevOps'
      ],
    }
  };

  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 relative min-h-screen grid-overlay pt-28 sm:pt-36 transition-colors duration-300`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-indigo-600 focus:text-zinc-50 dark:focus:bg-indigo-500 focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-50 dark:focus:ring-offset-zinc-950"
        >
          Skip to main content
        </a>
        <div className="absolute top-[-10rem] -z-10 right-[10%] h-[30rem] w-[30rem] rounded-full blur-[10rem] bg-indigo-500/[0.02] dark:bg-indigo-500/5"></div>
        <div className="absolute top-[-5rem] -z-10 left-[10%] h-[30rem] w-[30rem] rounded-full blur-[10rem] bg-blue-500/[0.02] dark:bg-blue-500/5"></div>

        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
