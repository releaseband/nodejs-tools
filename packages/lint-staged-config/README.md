# @releaseband/lint-staged-config

[lint-staged](https://github.com/okonet/lint-staged) shareable config

## Installing

```bash
npm i -D @releaseband/lint-staged-config
npx install-peerdeps --dev @releaseband/lint-staged-config
```

create `.lintstagedrc.js` file in the **root project folder**:

```js
module.exports = require('@releaseband/lint-staged-config');
```

## Add [husky](https://github.com/typicode/husky) hook

initialize husky:

```bash
npx husky-init && npm install
```

add pre-commit hook:

```bash
npx husky add .husky/pre-commit 'npx --no lint-staged'
```
