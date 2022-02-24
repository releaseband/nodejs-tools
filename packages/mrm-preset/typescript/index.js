const husky = require('husky');
const { install, packageJson, json } = require('mrm-core');
const { getPeerDeps } = require('../utils');

const configFile = 'tsconfig.json';

const configPackage = '@releaseband/typescript-config';

module.exports = function task() {
  json(configFile, { extends: configPackage }).save();

  const pkg = packageJson();
  pkg.setScript('type-check', 'tsc --noEmit');
  pkg.save();

  const peerDeps = getPeerDeps(configPackage);
  install(peerDeps, { dev: true, pnpm: true });

  install(configPackage, { dev: true, pnpm: true });

  husky.set('.husky/pre-commit', 'npx --no tsc --noEmit');
};

module.exports.description = 'Adds typescript config';
