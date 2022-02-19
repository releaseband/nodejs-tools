const { install, packageJson, json } = require('mrm-core');
const { getPeerDeps } = require('../utils');

const configFile = 'tsconfig.json';

const configPackage = '@releaseband/typescript-config';

module.exports = function task() {
  json(configFile, { extends: configPackage }).save();

  const pkg = packageJson();
  pkg.setScript('type-check', 'tsc --noEmit');
  pkg.save();

  install(configPackage, { dev: true, pnpm: true });

  const peerDeps = getPeerDeps(configPackage);
  install(peerDeps, { dev: true, pnpm: true });
};

module.exports.description = 'Adds typescript config';
