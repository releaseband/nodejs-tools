const { execSync } = require('child_process');

function exec(command) {
  return execSync(command, {
    encoding: 'utf8',
  }).toString();
}

function getPeerDeps(pkg) {
  const dataPeerDependencies = exec(`npm view ${pkg} peerDependencies --json`);
  if (dataPeerDependencies.length === 0) {
    return {};
  }
  return JSON.parse(dataPeerDependencies);
}

module.exports.getPeerDeps = getPeerDeps;
