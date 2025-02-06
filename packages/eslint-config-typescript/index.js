import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
  sonarjs.configs.recommended,
  importPlugin.flatConfigs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: [
      '**/node_modules/*',
      '**/dist/*',
      '**/build/*',
      '**/public/*.js',
      '**/.parcel-cache/*',
      '**/.idea/*',
      '**/.vscode/*',
      '**.history/*',
      '*.sublime-project',
      '*.sublime-workspace',
    ],
  },
  {
    files: ['.lintstagedrc.js'],
    rules: {
      'no-undef': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'prefer-const': 'error',
      'sonarjs/todo-tag': 'off',
      'sonarjs/no-commented-code': 'off',
      'sonarjs/deprecation': 'warn',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      'import/named': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
    },
  },
);
