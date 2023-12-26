## 状況

### 未 npm install sass ※ インストールするとCSSが効かなくなる…
viteを介しているらしい。  
added 2 packages, and audited 540 packages in 4s  
195 packages are looking for funding  
  run `npm fund` for details

### 未 pugはどうしようか迷っている… （12/01）


### npx astro add react () ※ こっちがよかったっぽい… npx astro add preact（入れてみる 23/12/12）
╭─────────────────────────────────────────────────────────────────────────────────────────────────────────╮  
│ npm install @astrojs/react @types/react-dom@^18.0.6 @types/react@^18.0.21 react-dom@^18.0.0             │  
│ react@^18.0.0                                                                                           │  
╰─────────────────────────────────────────────────────────────────────────────────────────────────────────╯  
 ╭ astro.config.mjs ─────────────────────────────╮  
 │ import { defineConfig } from 'astro/config';  │  
 │                                               │  
 │ import react from "@astrojs/react";           │  
 │                                               │  
 │ // https://astro.build/config                 │  
 │ export default defineConfig({                 │  
 │   integrations: [react()]                     │  
 │ });                                           │  
 ╰───────────────────────────────────────────────╯  
  success  Added the following integration to your project:  
   @astrojs/react  

 ╭ tsconfig.json ──────────────────────────╮  
 │ {                                       │  
 │   "extends": "astro/tsconfigs/strict",  │  
 │   "compilerOptions": {                  │  
 │     "jsx": "react-jsx",                 │  
 │     "jsxImportSource": "react"          │  
 │   }                                     │  
 │ }                                       │  
 ╰─────────────────────────────────────────╯  
  success  Successfully updated TypeScript settings  

### 未 npx astro add tailwind
 ╭────────────────────────────────────────────────────╮  
 │ npm install @astrojs/tailwind tailwindcss@^3.0.24  │  
 ╰────────────────────────────────────────────────────╯  
 ╭ astro.config.mjs ─────────────────────────────╮  
 │ import { defineConfig } from 'astro/config';  │  
 │ import react from "@astrojs/react";           │  
 │                                               │  
 │ import tailwind from "@astrojs/tailwind";     │  
 │                                               │  
 │ // https://astro.build/config                 │  
 │ export default defineConfig({                 │  
 │   integrations: [react(), tailwind()]         │  
 │ });                                           │  
 ╰───────────────────────────────────────────────╯  
  success  Added the following integration to your project:  
  - @astrojs/tailwind  

### 未！ vercel(+SSR デプロイ)
https://zenn.dev/thirosue/books/6fa991650c5767/viewer/c38f34  

### 未！ husky + ESLint + Stylelint + Prettier <お勉強中>
pre-commit:  
コミットが実行される前に呼び出されます。コミットに先立ってコードのフォーマット、linting、テストの実行などを行うことができます。  

pre-receive:  
サーバー上でのリモートリポジトリに対するプッシュが行われる前に呼び出されます。リモートリポジトリ上での特定の条件やチェックを行うのに使用されます。  

post-receive:  
リモートリポジトリに対するプッシュが完了した後に呼び出されます。通常、デプロイやログの更新などのアクションに使用されます。  

pre-push:  
プッシュが実行される前に呼び出されます。プッシュ前にテストを実行するなど、条件を満たすかどうかを確認するのに使用されます。  

### Linterは CLIのみにしておく　？？
[Prettier（公式）](https://prettier.io/docs/en/install.html)  
[参考サイト（Qiita）](https://qiita.com/katu_/items/db16c9da044850910b29)