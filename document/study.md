##
```tsx
import MyReactComponent from '../components/MyReactComponent.jsx';

<!-- 100%HTMLで、ページ上に読み込まれるJavaScriptはゼロ！ -->
<MyReactComponent />

<!-- このコンポーネントは、ページ上でインタラクティブに動作するようになります！
     残りの部分は静的でJSゼロのままです。 -->
<MyReactComponent client:load />
```
## ハイドレート制御  

### `client:load`
優先度: 高  
すぐに表示されるUI要素  

### `client:idle`
優先度 : 中  
ページの初期ロードが完了し、`requestIdleCallback`イベントが発生したら、  
コンポーネント JavaScript をロードしてハイドレート。

### `client:visible`
優先度 : 低  
コンポーネントがユーザーのビューポートに入ったら、  
コンポーネントの JavaScript をロードしてハイドレート。（`IntersectionObserver`内部を使用して可視性を追跡）

### `client:media`
優先度　： 低  
client:media={string}特定のCSSメディアクエリが満たされると、  
コンポーネント JavaScript をロードしてハイドレート。  
（コンポーネントが非表示の場合、`<SidebarToggle client:media="(max-width: 50em)" />`と直接書いた方が使い勝手良かったり）

### `client:only`
`client:only={string}`HTMLサーバーのレンダリングをスキップし、  
クライアント上でのみレンダリングします。  
`client:load`ページの読み込み時にすぐにコンポーネントを読み込み、  
レンダリングし、ハイドレートするという点では、同様に動作します。  
※ コンポーネントの正しいフレームワークを値として渡す必要があり。
```tsx
<SomeReactComponent client:only="react" />
```

### `addClientDirective`
client:*ディレクティブを追加して、コンポーネントをいつどのようにハイドレートするかを変更することもできる。
[addClientDirectiveAPI](https://docs.astro.build/en/reference/integrations-reference/#addclientdirective-option)


* ページタイトルと見出しの動的な定義
* 概要ページでのスキルリストのマッピング
* HTML要素の条件に応じた表示  
これらの命令はすべてビルド時に実行され、サイトの静的HTMLを作成したあと、コードは「捨てられます」。

`script`タグ内のJavaScriptはブラウザに送信され、ユーザーの操作に応じてページの更新や入力の切り替えなどを実行します。
クライアントサイドのインタラクティブな機能。（DOM操作など）※フロントマターに書かれたJSはビルド時に実行。

### `is:inline`
デフォルトでは、Astro はページ上にある`<script>`タグと`<style>`タグを処理、最適化、バンドルします。  
`is:inline`ディレクティブを使用して、この動作をオプトアウトできる。
* 外部ファイルにはバンドルされません。つまり、 外部ファイルの読み込みを制御する defer などの属性は効果がありません。
* 重複は排除されません。要素はレンダリングされるたびに表示されます。
* import/@import/url() 参照は、.astro
* **最終出力 HTML の作成場所に正確にレンダリング**されます。
* **スタイルはグローバル**になり、スコープはコンポーネントに限定されません。