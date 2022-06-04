- [環境構築手順](#環境構築手順)
  - [リポジトリのクローン](#リポジトリのクローン)
  - [依存モジュールのインストール](#依存モジュールのインストール)
  - [`.env`ファイルの作成](#envファイルの作成)
  - [`.vscode/settings.json`の作成](#vscodesettingsjsonの作成)
  - [必須となる VSCode 拡張機能](#必須となる-vscode-拡張機能)
- [構築にあたり参考にしたサイト](#構築にあたり参考にしたサイト)
  - [ツール導入](#ツール導入)
  - [フォルダ構成](#フォルダ構成)

# 環境構築手順

## リポジトリのクローン

```terminal
git clone https://github.com/TsuchidaCTI/yos-node-express-template.git
```

## 依存モジュールのインストール

```terminal
cd yos-node-express-template
npm i
```

`node_module`フォルダが、ルートディレクトリ直下に作成されていればとりあえず OK

## `.env`ファイルの作成

環境変数を設定します。
ルートディレクトリ直下に作成してください。

```.env
YEAR=2000
```

```ts
// 使用例 string型で解釈されるので注意
const year: string = process.env.YEAR
```

## `.vscode/settings.json`の作成

プロジェクトの設定を記載します。
以下はコードフォーマットを自動化する上で必須ですが、あとはご自由にカスタマイズしてください。

```json
// .vscode/settings.json
{
  // デフォルトのフォーマッタを prettier に設定
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // ファイル保存時、ESLint による自動フォーマット
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  // ファイル保存時、prettier による自動フォーマット
  "editor.formatOnSave": true
}
```

## 必須となる VSCode 拡張機能

- ESLint
- Prettier
- Markdown All in One

ターミナルから以下コマンドでインストールできます。

```terminal
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension yzhang.markdown-all-in-one
```

code コマンドを解釈できない旨のエラーが出たら、PATH が通っていないので、ググって VSCode の PATH を通してください。

# 構築にあたり参考にしたサイト

## ツール導入

- [express の開発に TypeScript を利用する](https://qiita.com/zaburo/items/69726cc42ef774990279)
- [Node.js + ESLint + Prettier + TypeScript の初期設定](https://zenn.dev/fjsh/articles/19c5e794a63869)

## フォルダ構成

- [Project structure for an Express REST API when there is no "standard way"](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way)
- [A better project structure with Express and Node.Js](https://medium.com/codechef-vit/a-better-project-structure-with-express-and-node-js-c23abc2d736f)
