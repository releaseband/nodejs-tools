const path = require('path');
const { copyFiles } = require('mrm-core');

const workflows = ['.github/workflows/release.yml', '.github/workflows/validate.yml'];

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), workflows, { overwrite: true });
};

module.exports.description = 'Adds GitHub Actions';
