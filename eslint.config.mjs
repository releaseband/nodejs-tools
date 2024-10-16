// eslint-disable-next-line import/no-extraneous-dependencies
import config from '@releaseband/eslint-config';
export default [
  ...config,
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      'no-undef': 'off',
      'sonarjs/os-command': 'off',
    },
  },
  {
    ignores: ['**/*.d.ts'],
  },
];
