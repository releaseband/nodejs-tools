const { install, packageJson, lines, json } = require('mrm-core');
const { getPeerDeps } = require('../utils');

const configFile = '.markdownlint.json';
const ignoreFile = '.markdownlintignore';

const configPackage = '@releaseband/markdownlint-config';

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
  'CHANGELOG.md',
];

module.exports = function task() {
  json(configFile, { extends: configPackage }).save();

  const pkg = packageJson();
  pkg.setScript('markdownlint', "markdownlint --fix '**/*.md'");
  pkg.save();

  install(configPackage, { dev: true, pnpm: true });

  const peerDeps = getPeerDeps(configPackage);
  install(peerDeps, { dev: true, pnpm: true });

  lines(ignoreFile).removeIgnore(removeIgnore).add(addIgnore).save();
};

module.exports.description = 'Adds markdownlint';
