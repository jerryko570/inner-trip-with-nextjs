// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
// import storybook from 'eslint-plugin-storybook';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      quotes: ['error', 'single'],
    },
  },

  prettier, // prettier와 충돌 방지

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
