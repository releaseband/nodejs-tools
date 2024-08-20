const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const yaml = require('js-yaml');

function getPackages() {
  const source = path.resolve(process.cwd(), 'pnpm-workspace.yaml');
  if (!fs.existsSync(source)) {
    return [];
  }

  const content = fs.readFileSync(source, 'utf8');
  const workspace = yaml.load(content);
  if (!workspace.packages) {
    return [];
  }

  return fg
    .sync(workspace.packages, { deep: 1, onlyDirectories: true, stats: true, unique: true })
    .map(({ name }) => name);
}

function scopeEnum() {
  const packages = getPackages();
  return packages.length > 0 ? [2, 'always', packages] : [0];
}

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': () => scopeEnum(),
  },
};

