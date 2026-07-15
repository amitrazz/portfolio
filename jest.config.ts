import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // Resolve the @/* path alias defined in tsconfig.json
  moduleNameMapper: pathsToModuleNameMapper(
    { '@/*': ['./src/*'] },
    { prefix: '<rootDir>/' }
  ),
  // Ignore the Next.js build output so jest doesn't pick up compiled files
  modulePathIgnorePatterns: ['<rootDir>/.next/'],
  collectCoverage: true,
  // Only collect coverage from files that contain pure testable logic.
  // React components, layouts, context providers, and static data files
  // are excluded — they require DOM/browser APIs and have no standalone logic.
  collectCoverageFrom: [
    'src/lib/utils.ts',
    'src/lib/experience-utils.ts',
    'src/app/actions.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

export default config;
