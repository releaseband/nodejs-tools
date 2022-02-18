# @releaseband/eslint-config

[eslint](https://github.com/eslint/eslint) shareable config

## Installing

```bash
npm i -D @releaseband/eslint-config
npx install-peerdeps --dev @releaseband/eslint-config
```

create `.eslintrc.json` file in the **root project folder**:

```json
{
  "extends": ["@releaseband/eslint-config"]
}
```

create `.eslintignore` file in the **root project folder** and add ignore files:

```text
node_modules/
.idea/
.vscode/
.history/
```

add script in `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js --fix"
  }
}
```
