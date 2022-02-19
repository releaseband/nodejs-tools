const husky = require('husky');
const { packageJson, install, json } = require('mrm-core');
const { getPeerDeps } = require('../utils');

const commitlintConfigFile = '.commitlintrc.json';
const commitizenConfigFile = '.cz.json';

const commitlintConfigPackage = '@releaseband/commitlint-config';
const commitizenConfigPackage = '@commitlint/cz-commitlint';

const packages = [commitlintConfigPackage, commitizenConfigPackage, 'commitizen'];

module.exports = function task() {
  json(commitlintConfigFile, { extends: [commitlintConfigPackage] }).save();

  json(commitizenConfigFile, { path: commitizenConfigPackage }).save();

  const pkg = packageJson();
  pkg.setScript('commit', 'cz');
  pkg.save();

  install(packages, { dev: true, pnpm: true });

  const peerDeps = getPeerDeps(commitlintConfigPackage);
  install(peerDeps, { dev: true, pnpm: true });

  husky.set('.husky/commit-msg', 'npx --no -- commitlint --edit $1');
};

module.exports.description = 'Adds commitlint';
