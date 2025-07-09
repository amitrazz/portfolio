// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', '.next/**'],
  },
  ...compat.extends('next/core-web-vitals', 'next', 'next/typescript'),
];

export default config;
