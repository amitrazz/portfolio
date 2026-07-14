module.exports = {
  ci: {
    collect: {
      // Run Lighthouse against the static production build
      staticDistDir: './.next',
      url: ['http://localhost:3000/'],
      numberOfRuns: 3,
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        // Performance budget — fail CI if any score drops below these thresholds
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],

        // Core Web Vitals budget
        'first-contentful-paint': ['error', { maxNumericValue: 1500 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
        'interactive': ['error', { maxNumericValue: 3500 }],
        'speed-index': ['error', { maxNumericValue: 2500 }],

        // Bundle budgets — fail CI if JS or CSS gets too large
        'resource-summary:script:size': ['error', { maxNumericValue: 200000 }], // 200KB JS budget
        'resource-summary:stylesheet:size': ['error', { maxNumericValue: 50000 }], // 50KB CSS budget
        'resource-summary:total:size': ['error', { maxNumericValue: 500000 }], // 500KB total budget

        // Image optimization
        'uses-optimized-images': 'warn',
        'uses-webp-images': 'warn',
        'efficient-animated-content': 'error',

        // Accessibility non-negotiables
        'color-contrast': 'error',
        'label': 'error',
        'link-name': 'error',
        'button-name': 'error',
        'image-alt': 'error',

        // Security headers
        'is-on-https': 'error',

        // SEO
        'document-title': 'error',
        'meta-description': 'error',
        'canonical': 'error',
        'robots-txt': 'error',
      },
    },
    upload: {
      // Set your LHCI server URL here if self-hosting Lighthouse CI server
      // target: 'lhci',
      // serverBaseUrl: 'https://your-lhci-server.example.com',
      target: 'temporary-public-storage', // Free public LHCI hosting for OSS projects
    },
  },
};
