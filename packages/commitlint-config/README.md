# @releaseband/commitlint-config

[commitlint](https://github.com/conventional-changelog/commitlint) shareable config

## Installing

```bash
npm i -D @releaseband/commitlint-config
npx install-peerdeps --dev @releaseband/commitlint-config
```

create `.commitlintrc.json` file in the **root project folder**:

```json
{
  "extends": ["@releaseband/commitlint-config"]
}
```

## Installing [commitizen](https://github.com/commitizen/cz-cli) tool

```bash
npm i -D @commitlint/cz-commitlint commitizen
```

create `.cz.json` file in the **root project folder**:

```json
{
  "path": "@commitlint/cz-commitlint"
}
```

add script in `package.json` file:

```json
{
  "scripts": {
    "commit": "cz"
  }
}
```

## Add [husky](https://github.com/typicode/husky) hook

initialize husky:

```bash
npx husky-init && npm install
```

add commit-msg hook:

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```
