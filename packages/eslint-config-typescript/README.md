# @releaseband/eslint-config-typescript

[eslint](https://github.com/eslint/eslint) shareable config

## Installing

```bash
npm i -D @releaseband/eslint-config-typescript
npx install-peerdeps --dev @releaseband/eslint-config-typescript
```

create `.eslintrc.json` file in the **root project folder**:

```json
{
  "extends": ["@releaseband/eslint-config-typescript"]
}
```

create `.eslintignore` file in the **root project folder**:

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
    "lint": "eslint --ext .js,.ts --fix ."
  }
}
```
