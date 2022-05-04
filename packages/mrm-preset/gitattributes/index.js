const { lines } = require('mrm-core');

const add = [
  '*.png filter=lfs diff=lfs merge=lfs -text',
  '*.jpg filter=lfs diff=lfs merge=lfs -text',
  '*.webp filter=lfs diff=lfs merge=lfs -text',
  '*.mp3 filter=lfs diff=lfs merge=lfs -text',
  '*.ogg filter=lfs diff=lfs merge=lfs -text',
  '*.m4a filter=lfs diff=lfs merge=lfs -text',
  '*.webm filter=lfs diff=lfs merge=lfs -text',
  '*.ttf filter=lfs diff=lfs merge=lfs -text',
];

module.exports = function task() {
  lines('.gitattributes').add(add).save();
};

module.exports.description = 'Adds .gitattributes';
