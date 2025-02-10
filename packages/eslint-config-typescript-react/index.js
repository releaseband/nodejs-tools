import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
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
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
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
    ...react.configs.flat.recommended,
    files: ['**/*.{js,mjs,cjs,ts,tsx,jsx,mts}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      react,
      'simple-import-sort': simpleImportSort,
      'react-hooks': reactHooks,
    },
    rules: {
      //eslint
      'prefer-const': 'error',
      'no-void': 'error',
      'no-cond-assign': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-multi-assign': 'error',
      'no-plusplus': 'error',
      'class-methods-use-this': 'error',
      'no-underscore-dangle': 'error',
      'no-console': 'warn',
      eqeqeq: ['error', 'smart'],
      'no-else-return': 'error',
      //sonarjs
      'sonarjs/todo-tag': 'off',
      'sonarjs/no-commented-code': 'off',
      'sonarjs/deprecation': 'off',
      'sonarjs/pseudo-random': 'off',
      'sonarjs/slow-regex': 'off',
      'sonarjs/no-empty-test-file': 'off',
      'sonarjs/public-static-readonly': 'off',
      'sonarjs/duplicates-in-character-class': 'off',
      'sonarjs/no-ignored-exceptions': 'off',
      'sonarjs/use-type-alias': 'off',
      'sonarjs/cognitive-complexity': ['error', 15],
      'sonarjs/prefer-read-only-props': 'off',
      'sonarjs/no-nested-functions': 'off',
      'sonarjs/jsx-no-leaked-render': 'off',
      'sonarjs/redundant-type-aliases': 'off',
      'sonarjs/no-invariant-returns': 'off',
      'sonarjs/different-types-comparison': 'off',
      'sonarjs/no-redundant-optional': 'off',
      //import plugin
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      'import/named': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
      ...reactHooks.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['function-declaration', 'arrow-function'],
          unnamedComponents: ['arrow-function'],
        },
      ],
      '@typescript-eslint/no-duplicate-enum-values': 'off',
      //tslint
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { caughtErrors: 'none' }],
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
    },
  },
);
