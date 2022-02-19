const { lines } = require('mrm-core');

const remove = ['node_modules', 'pnpm-lock.yaml'];
const add = [
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
];

module.exports = function task() {
  lines('.gitignore').remove(remove).add(add).save();
};

module.exports.description = 'Adds .gitignore';
