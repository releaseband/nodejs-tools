const { packageJson, install, lines } = require('mrm-core');
const { getPeerDeps } = require('../utils');

const configFile = '.prettierrc.json';
const ignoreFile = '.prettierignore';

const configPackage = '@releaseband/prettier-config';

const removeIgnore = ['node_modules'];
const addIgnore = [
  'node_modules/',
  'coverage/',
  'dist/',
  'build/',
  '.DS_Store',
  'Thumbs.db',
  '.parcel-cache/',
  '.idea/',
  '.vscode/',
  '.history/',
  '*.sublime-project',
  '*.sublime-workspace',
  '*.log',
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
];

module.exports = function task() {
  if (lines(configFile).exists()) {
    lines(configFile).delete();
  }
  lines(configFile).add(`"${configPackage}"`).save();

  const pkg = packageJson();
  pkg.setScript('format', 'prettier --write .');
  pkg.save();

  const peerDeps = getPeerDeps(configPackage);
  install(peerDeps, { dev: true, pnpm: true });

  install(configPackage, { dev: true, pnpm: true });

  lines(ignoreFile).remove(removeIgnore).add(addIgnore).save();
};

module.exports.description = 'Adds prettier';
