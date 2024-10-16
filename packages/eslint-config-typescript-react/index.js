import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import tsdoc from 'eslint-plugin-tsdoc';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  sonarjs.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      tsdoc,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-require-imports': 'warn',
      'tsdoc/syntax': 'warn',
    },
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
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['function-declaration', 'arrow-function'],
          unnamedComponents: ['arrow-function'],
        },
      ],
    },
  },
  {
    files: ['i18next-parser.config.js', '.lintstagedrc.js'],
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
    rules: {
      'sonarjs/todo-tag': 'off',
      'sonarjs/no-commented-code': 'off',
      'sonarjs/deprecation': 'warn',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      'import/named': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.setup.js',
            '**/*.config.js',
            '**/*.test.js',
            '**/*.spec.js',
            'vite.config.ts',
            '.lintstagedrc.js',
          ],
        },
      ],
      'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
    },
  },
];
