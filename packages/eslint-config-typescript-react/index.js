module.exports = {
  extends: [
    '@releaseband/eslint-config-typescript',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.config.js', '**/*.config.ts', '**/*.test.ts', '**/*.spec.ts'] },
    ],
    'react/react-in-jsx-scope': 'off',
  },
};
