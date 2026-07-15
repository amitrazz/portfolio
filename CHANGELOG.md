## [1.6.2](https://github.com/amitrazz/portfolio/compare/v1.6.1...v1.6.2) (2026-07-15)


### Bug Fixes

* prepend slash to navigation hash links to ensure consistent routing ([b87080d](https://github.com/amitrazz/portfolio/commit/b87080de140eedda5a84272e58062f89095a012c))

## [1.6.1](https://github.com/amitrazz/portfolio/compare/v1.6.0...v1.6.1) (2026-07-15)


### Bug Fixes

* respect system theme preference by adding a user-set flag for explicit theme toggles ([13e7f08](https://github.com/amitrazz/portfolio/commit/13e7f08885b7a2e58e2ee6a74bd29e515c1d23f9))

# [1.6.0](https://github.com/amitrazz/portfolio/compare/v1.5.0...v1.6.0) (2026-07-15)


### Features

* implement collapsible ExperienceCard component with detailed impact metrics ([9a1a410](https://github.com/amitrazz/portfolio/commit/9a1a410fa2908f8f7cb8db971fce01ac3198fa93))

# [1.5.0](https://github.com/amitrazz/portfolio/compare/v1.4.10...v1.5.0) (2026-07-15)


### Features

* update URL hash when active section changes to reflect scroll position ([48737d7](https://github.com/amitrazz/portfolio/commit/48737d7b69db3459dafb5abd9d3a57283cf38af7))

## [1.4.10](https://github.com/amitrazz/portfolio/compare/v1.4.9...v1.4.10) (2026-07-15)


### Bug Fixes

* resolve hydration failure by refactoring project.tsx to support the new nested schema structure of projectsData in data.ts ([708eb2b](https://github.com/amitrazz/portfolio/commit/708eb2bd68e7bddbcf1c24bb8c9e50596e490451))
* update ProjectProps and challenge mapping in project.tsx to support all 4 projects in data.ts ([1cdabb1](https://github.com/amitrazz/portfolio/commit/1cdabb161e8511ed8c679272da17efd4f131a434))

## [1.4.9](https://github.com/amitrazz/portfolio/compare/v1.4.8...v1.4.9) (2026-07-14)


### Performance Improvements

* eliminate 74 non-composited animations by replacing background-position shimmers with transform: translateX shimmers ([d827797](https://github.com/amitrazz/portfolio/commit/d827797e89f7e7df3335bce548b8ff406bf6b329))

## [1.4.8](https://github.com/amitrazz/portfolio/compare/v1.4.7...v1.4.8) (2026-07-14)


### Performance Improvements

* add .browserslistrc for modern browser targets ([71e546e](https://github.com/amitrazz/portfolio/commit/71e546eab99a8709e237aaeb31b088dfbac911d4))
* target modern browsers in .browserslistrc and upgrade tsconfig target to ES2022 to eliminate legacy polyfills ([a0626ab](https://github.com/amitrazz/portfolio/commit/a0626abeee0cd33e553ef91928dcf52bab19421e))

## [1.4.7](https://github.com/amitrazz/portfolio/compare/v1.4.6...v1.4.7) (2026-07-14)


### Performance Improvements

* remove framer-motion FLIP layoutId, replace with pure CSS transitions and animations in header and skills components ([b43d6a2](https://github.com/amitrazz/portfolio/commit/b43d6a24b142dbfce4fd156b90c341fef2888af1))

## [1.4.6](https://github.com/amitrazz/portfolio/compare/v1.4.5...v1.4.6) (2026-07-14)


### Bug Fixes

*  Performance Optimizations ([13c53d1](https://github.com/amitrazz/portfolio/commit/13c53d1aa40a08803eba8ff3bd3afff7153741fa))

## [1.4.5](https://github.com/amitrazz/portfolio/compare/v1.4.4...v1.4.5) (2026-07-14)


### Bug Fixes

*  Performance Optimizations ([c398507](https://github.com/amitrazz/portfolio/commit/c39850742663a34332466a5eedeb13f9adf9f4a5))

## [1.4.4](https://github.com/amitrazz/portfolio/compare/v1.4.3...v1.4.4) (2026-07-14)


### Bug Fixes

*  Performance Optimizations ([4b2e2b8](https://github.com/amitrazz/portfolio/commit/4b2e2b819a6a273b6f6b290dcb7f567f6657c552))

## [1.4.3](https://github.com/amitrazz/portfolio/compare/v1.4.2...v1.4.3) (2026-07-14)


### Bug Fixes

*  Performance Optimizations ([3279c18](https://github.com/amitrazz/portfolio/commit/3279c18d64b5e3ed3aa2af3ec3f25aeddf53a305))

## [1.4.2](https://github.com/amitrazz/portfolio/compare/v1.4.1...v1.4.2) (2026-07-13)


### Bug Fixes

*  Performance Optimizations ([459bca3](https://github.com/amitrazz/portfolio/commit/459bca3b781326861ce7cd0013238bfc4de615b2))
*  Performance Optimizations ([9ca454f](https://github.com/amitrazz/portfolio/commit/9ca454fff07aef57411c6bd642982e4782980d4b))

## [1.4.1](https://github.com/amitrazz/portfolio/compare/v1.4.0...v1.4.1) (2026-07-09)


### Bug Fixes

* light theme fixes ([2be1a81](https://github.com/amitrazz/portfolio/commit/2be1a81ab039de0a57d49c184f50e9aa285467c7))

# [1.4.0](https://github.com/amitrazz/portfolio/compare/v1.3.2...v1.4.0) (2026-07-09)


### Bug Fixes

* resolve Next.js favicon ENOENT build error by moving favicon.ico to public/ folder ([a86011d](https://github.com/amitrazz/portfolio/commit/a86011ddabea3ee9295f834f9b5b64b287695dab))


### Features

* design and add premium layered SVG logo component ([0719aeb](https://github.com/amitrazz/portfolio/commit/0719aebb5dbfdaaa93f9c84370460a0d4aa96b61))
* implement modern entrance animation for summary stats box utilizing framer-motion ([af47ff9](https://github.com/amitrazz/portfolio/commit/af47ff9878e1209849aec4b682d25240020e143e))
* implement reusable shimmer and layout skeletons with demo page ([5cd25ad](https://github.com/amitrazz/portfolio/commit/5cd25adc244531fab09f1d821260cbdb513a9f99))

## [1.3.2](https://github.com/amitrazz/portfolio/compare/v1.3.1...v1.3.2) (2026-07-09)


### Bug Fixes

* light theme fixes ([7657900](https://github.com/amitrazz/portfolio/commit/7657900e445350c5623754d77e81e5ae6407f1fb))

## [1.3.1](https://github.com/amitrazz/portfolio/compare/v1.3.0...v1.3.1) (2026-07-09)


### Bug Fixes

* CV updated ([a579ffc](https://github.com/amitrazz/portfolio/commit/a579ffc87b7b36f5710011b9d2c5940c42005c1e))

# [1.3.0](https://github.com/amitrazz/portfolio/compare/v1.2.5...v1.3.0) (2026-07-09)


### Features

* redesign portfolio for principal engineer positioning ([cbf181e](https://github.com/amitrazz/portfolio/commit/cbf181ec21eba16955b77f3757ec4f407c23b340))

## [1.2.5](https://github.com/amitrazz/portfolio/compare/v1.2.4...v1.2.5) (2025-07-24)


### Bug Fixes

* Added README.md ([f6e2e26](https://github.com/amitrazz/portfolio/commit/f6e2e26bfb64bc0ebb79c5628e837cb1727b3327))

## [1.2.4](https://github.com/amitrazz/portfolio/compare/v1.2.3...v1.2.4) (2025-07-16)


### Bug Fixes

* GRT-1 Trigger Build ([152016f](https://github.com/amitrazz/portfolio/commit/152016fca48c57c9fe1063920ca95f5f025e4d76))

## [1.2.3](https://github.com/amitrazz/portfolio/compare/v1.2.2...v1.2.3) (2025-07-09)


### Bug Fixes

* removed theme swtich button ([9d7efce](https://github.com/amitrazz/portfolio/commit/9d7efcee063e25e444f853444b944c59c4282317))

## [1.2.2](https://github.com/amitrazz/portfolio/compare/v1.2.1...v1.2.2) (2025-07-09)


### Bug Fixes

* minor change ([0340981](https://github.com/amitrazz/portfolio/commit/03409816f3b70ca0ee71808d85b6489422b9f29a))

## [1.2.1](https://github.com/amitrazz/portfolio/compare/v1.2.0...v1.2.1) (2025-07-09)


### Bug Fixes

* footer copy test ([fd4d86a](https://github.com/amitrazz/portfolio/commit/fd4d86a5e7fbf0fd71307c94416360c0e5383c62))

# [1.2.0](https://github.com/amitrazz/portfolio/compare/v1.1.0...v1.2.0) (2025-07-09)


### Features

* initial setup with test and config ([bee0641](https://github.com/amitrazz/portfolio/commit/bee0641c54d9c928f3bf0a17f06995f8eda8e212))
* initial setup with test and config ([ea67cec](https://github.com/amitrazz/portfolio/commit/ea67cecb9d34fa97e943992a3f907aea2a46bca6))

# [1.1.0](https://github.com/amitrazz/portfolio/compare/v1.0.0...v1.1.0) (2025-07-09)


### Features

* initial setup with test and config ([d325a79](https://github.com/amitrazz/portfolio/commit/d325a79b8ec1cf6248fb921b7e779812f2436982))
