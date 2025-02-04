module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
  ],
  plugins: ['simple-import-sort', 'tsdoc'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.setup.js',
          '**/*.setup.ts',
          '**/*.config.js',
          '**/*.config.ts',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.spec.ts',
          '**/*.spec.tsx',
          '**/*.stories.ts',
          '**/*.stories.tsx',
        ],
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'tsdoc/syntax': 'warn',
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
  },
};
