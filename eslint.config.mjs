import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
const config = [{
  files: ['**/*.{js,jsx,ts,tsx}'],
  rules: {
    'react/no-unescaped-entities': 'off',
  },
}, {
  ignores: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**'],
}, ...nextCoreWebVitals, ...next, ...nextTypescript, {
  // Override rules set by extended configs (must be defined after them in flat config)
  files: ['**/*.{js,jsx,ts,tsx}'],
  rules: {
    'react-hooks/set-state-in-effect': 'off',
  }
}];

export default config;
