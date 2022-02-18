# @releaseband/markdownlint-config

[markdownlint](https://github.com/markdownlint/markdownlint) shareable config

## Installing

```bash
npm i -D @releaseband/markdownlint-config
npx install-peerdeps --dev @releaseband/markdownlint-config
```

create `.markdownlint.json` file in the **root project folder**:

```json
{
  "extends": "@releaseband/markdownlint-config"
}
```

create `.markdownlintignore` file in the **root project folder**:

```text
node_modules/
.idea/
.vscode/
.history/
CHANGELOG.md
```

add script in `package.json`:

```json
{
  "scripts": {
    "markdownlint": "markdownlint '**/*.md' --fix"
  }
}
```
