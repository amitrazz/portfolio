import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Modern image formats — AVIF first (40% smaller than WebP), WebP fallback
  images: {
    formats: ['image/avif', 'image/webp'],
    // Allowed quality values — must include every `quality` prop used in <Image> components.
    // intro.tsx uses quality="80"; 75 is the Next.js default.
    qualities: [75, 80],
    // Minimize layout shift by enforcing explicit dimensions
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
  },

  // Compress responses with gzip/brotli at the Next.js layer
  compress: true,

  // Target modern browsers only — eliminates legacy JS polyfills
  // This removes transforms for: async/await, optional chaining, nullish coalescing
  // which Lighthouse's "Legacy JavaScript" audit flags.
  // Browsers with <2% market share (IE11, old Safari) are excluded intentionally.
  // Next.js 15+ reads this via the @babel/preset-env or SWC browserslist config.
  // Tree-shake large icon/animation packages — only bundle the specific icons used.
  // Still lives under experimental in Next.js 16 types (the build notice is informational only).
  experimental: {
    optimizePackageImports: [
      'react-icons',
      'react-icons/lu',
      'framer-motion',
    ],
  },

  // Production HTTP security & caching headers
  // NOTE: /_next/static/:path* is intentionally omitted — Next.js 16 manages
  // immutable Cache-Control for hashed static chunks internally.
  // A custom override would break HMR in development.
  async headers() {
    return [
      {
        // Security & performance headers on all routes
        source: '/:path*',
        headers: [
          // Prevent MIME-sniffing attacks (Best Practices +2)
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Prevent clickjacking
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Enforce HTTPS for 1 year, include subdomains
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          // Disable referrer for cross-origin navigations
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Lock down browser feature permissions
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // Content Security Policy
          // In development, React requires eval() for devtools & callstack reconstruction.
          // We only add 'unsafe-eval' to script-src in dev — prod stays strict.
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              process.env.NODE_ENV === 'development'
                ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
                : "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",    // Tailwind requires inline styles
              "img-src 'self' data: blob:",
              "font-src 'self'",
              "connect-src 'self'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
          // Opt out of Google's FLoC / Topics API
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
      {
        // Long-term cache for public static assets
        source: '/favicon.ico',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
      {
        source: '/amit.jpg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000' }, // 30 days
        ],
      },
      {
        source: '/CV.pdf',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ];
  },
};

export default nextConfig;
