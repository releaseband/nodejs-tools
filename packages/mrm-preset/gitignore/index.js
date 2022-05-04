const { lines } = require('mrm-core');

const remove = ['node_modules', 'pnpm-lock.yaml'];
const add = [
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
  '.env',
];

module.exports = function task() {
  lines('.gitignore').remove(remove).add(add).save();
};

module.exports.description = 'Adds .gitignore';
