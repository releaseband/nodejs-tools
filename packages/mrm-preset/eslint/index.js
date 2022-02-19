const { packageJson, install, lines, json } = require('mrm-core');
const { getPeerDeps } = require('../utils');

const configFile = '.eslintrc.json';
const ignoreFile = '.eslintignore';

const removeIgnore = ['node_modules'];
const addIgnore = [
  'node_modules/',
  'coverage/',
  '.idea/',
  '.vscode/',
  '.history/',
  '*.sublime-project',
  '*.sublime-workspace',
];

const eslintConfigList = ['javascript', 'typescript', 'typescript-react'];

module.exports = function task({ eslintConfig }) {
  const configPackage = `@releaseband/eslint-config-${
    eslintConfig === 'javascript' ? '' : eslintConfig
  }`;

  json(configFile, { extends: [configPackage] }).save();

  const pkg = packageJson();
  pkg.setScript('lint', 'eslint --ext .js,.jsx,.ts,.tsx --fix .');
  pkg.save();

  install(configPackage, { dev: true, pnpm: true });

  const peerDeps = getPeerDeps(configPackage);
  install(peerDeps, { dev: true, pnpm: true });

  lines(ignoreFile).remove(removeIgnore).add(addIgnore).save();
};

module.exports.description = 'Adds eslint';
module.exports.parameters = {
  eslintConfig: {
    type: 'list',
    message: 'ESLint shareable config releaseband organization',
    default: 'javascript',
    choices: eslintConfigList.map((value) => ({ name: value, value })),
    validate(value) {
      return eslintConfigList.includes(value)
        ? true
        : `eslintConfig available values: ${eslintConfigList.join(', ')}`;
    },
  },
};
