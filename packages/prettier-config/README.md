# @releaseband/prettier-config

[prettier](https://github.com/prettier/prettier) shareable config

## Installing

```bash
npm i -D @releaseband/prettier-config
npx install-peerdeps --dev @releaseband/prettier-config
```

create `.prettierrc.json` file in the **root project folder**:

```json
"@releaseband/prettier-config"
```

create `.prettierignore` file in the **root project folder** and add ignore files:

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
    "format": "prettier --write ."
  }
}
```
