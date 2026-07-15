import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = [{
  files: ['**/*.{js,jsx,ts,tsx}'],
  rules: {
    'react/no-unescaped-entities': 'off',
  },
}, {
  ignores: ['node_modules/**', 'dist/**', '.next/**'],
}, ...nextCoreWebVitals, ...next, ...nextTypescript];

export default config;
