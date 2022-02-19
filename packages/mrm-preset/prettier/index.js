const { packageJson, install, lines, json } = require('mrm-core');
const { getPeerDeps } = require('../utils');

const configFile = '.prettierrc.json';
const ignoreFile = '.prettierignore';

const configPackage = '@releaseband/prettier-config';

const removeIgnore = ['node_modules'];
const addIgnore = [
  'node_modules/',
  'coverage/',
  '.DS_Store',
  'Thumbs.db',
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
  json(configFile, configPackage).save();

  const pkg = packageJson();
  pkg.setScript('format', 'prettier --write .');
  pkg.save();

  install(configPackage, { dev: true, pnpm: true });

  const peerDeps = getPeerDeps(configPackage);
  install(peerDeps, { dev: true, pnpm: true });

  lines(ignoreFile).remove(removeIgnore).add(addIgnore).save();
};

module.exports.description = 'Adds prettier';
