## LPの設計


### 使いたい言語を選定してもらう ← おそらく、インテグレーション設定オプションが必要
include（また必要があればexclude）をファイルとフォルダの配列に設定します。  
ワイルドカードを使用して複数のファイルパスを含めることができます。  
| 使用可能言語(12/01時点) ||||
|:-:|:-:|:-:|:-:|
| Astro(.astro) | HTML(.html) | ~~React(.tsx)~~ | Preact |
| CSS(.css) | ~~Sass(.sass)~~ | ~~Tailwind CSS(.html .tsx)~~ |
| Javascript(.js) | TypeScript(.ts) |

### レンダリングオプション
[zenn](https://zenn.dev/thirosue/books/6fa991650c5767/viewer/d1e761)

### ディレクトリ
```
.
├── README.md                   CLIコマンド
├── astro.config.mjs
├── dist                        npm run build / npm run preview
├── document
│   ├── architecture.md         ディレクトリ構造
│   ├── phase.md                インストール履歴
│   ├── point.md                AstroDOC要点（作成中）
│   ├── setup.md                セットアップ手順（git clone 後）
│   ├── study.md                Astroワイヤーフレーム知識（作成中）
│   └── study_components.md     コンポーネント知識（作成中）
├── package-lock.json
├── package.json
├── public
│   └── favicon.svg             ファビコン
├── src
│   ├── components
│   │   ├── BentTailCats.astro  尾曲猫 section
│   │   ├── Events.astro        イベント section
│   │   ├── Footer.astro        フッター
│   │   ├── Hamburger.astro     ハンバーガーメニュー（Header import）
│   │   ├── Header.astro        ヘッダー
│   │   ├── Introduction.astro  長崎紹介 section
│   │   ├── MainVisual.astro    メインビジュアル section
│   │   ├── Navigation.astro    ナビメニュー（Header import）
│   │   ├── Social.astro        リンク集（Footer import）
│   │   ├── TripSpots.astro     スポット section
│   │   └── Youkais.astro       長崎妖怪 section
│   ├── content
│   │   └── posts
│   │       ├── post-1.md       長崎紹介記事（Introduction import）
│   │       ├── post-2.md
│   │       ├── post-3.md
│   │       └── post-4.md
│   ├── env.d.ts                viteのクライアント型
│   ├── layouts
│   │   └── BaseLayout.astro    ベースレイアウト（<head>含む）
│   ├── pages
│   │   ├── index.astro         HOME画面
│   ├── scripts
│   │   ├── carousel.js         カルーセルDOM
│   │   └── toggle.js           トグルDOM
│   └── styles
│       ├── bentTailCats.css    尾曲猫 section
│       ├── events.css          イベント section
│       ├── global.css          html body Header Footer
│       ├── introduction.css    長崎紹介 section
│       ├── mainVisual.css      メインビジュアル section
│       ├── reset.css           リセットcss
│       ├── tripSpots.css       スポット section
│       └── youkais.css         長崎妖怪 section
│
└── tsconfig.json               compilerOptions
```