module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint .', 'prettier --write'],
  '*.{json,yaml,yml,html}': ['prettier --write'],
  '*.md': ['prettier --write', 'markdownlint'],
};
