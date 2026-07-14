import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Modern image formats — AVIF first (40% smaller than WebP), WebP fallback
  images: {
    formats: ['image/avif', 'image/webp'],
    // Minimize layout shift by enforcing explicit dimensions
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
  },

  // Compress responses with gzip/brotli at the Next.js layer
  compress: true,

  // Production HTTP security & caching headers
  async headers() {
    return [
      {
        // Immutable caching for all Next.js static chunks (hashed filenames)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
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
          // Content Security Policy — strict but compatible with Next.js inline scripts & framer-motion
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",   // Next.js requires inline for hydration
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
