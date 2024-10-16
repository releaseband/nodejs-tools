import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import sonarjs from 'eslint-plugin-sonarjs';

export default [
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
  sonarjs.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
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
          devDependencies: ['**/*.setup.js', '**/*.config.js', '**/*.test.js', '**/*.spec.js', '.lintstagedrc.js'],
        },
      ],
      'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
    },
  },
];
