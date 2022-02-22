const husky = require('husky');
const { install, lines } = require('mrm-core');
const { getPeerDeps } = require('../utils');

const configFile = '.lintstagedrc.js';

const configPackage = '@releaseband/lint-staged-config';

module.exports = function task() {
  lines(configFile).add(`module.exports = require('${configPackage}');`).save();

  const peerDeps = getPeerDeps(configPackage);
  install(peerDeps, { dev: true, pnpm: true });

  install(configPackage, { dev: true, pnpm: true });

  husky.set('.husky/pre-commit', 'npx --no lint-staged');
};

module.exports.description = 'Adds lint-staged';
