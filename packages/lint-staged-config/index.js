module.exports = {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,yaml,yml,html}': ['prettier --write'],
  '*.md': ['prettier --write', 'markdownlint'],
};
