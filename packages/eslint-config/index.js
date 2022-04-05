module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
  ],
  plugins: ['sonarjs'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.config.js', '**/*.test.js', '**/*.spec.js'] },
    ],
    'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
  },
};
