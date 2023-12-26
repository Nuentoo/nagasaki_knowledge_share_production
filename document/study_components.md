## props
#### (使い方イメージ)
`Social.astro`
```tsx
---
const { platform, username } = Astro.props;
---
<a href={`https://www.${platform}.com/${username}`}>{platform}</a>
```
`Footer.astro`
```tsx
---
import Social from './Social.astro';
---
<footer>
     <Social platform="twitter" username="astrodotbuild" />
     <Social platform="github" username="withastro" />
     <Social platform="youtube" username="astrodotbuild" />
</footer>
```
`index.astro`
```tsx
---
import Footer from '../components/Footer.astro';
---
     <Footer />
</body>
```

### slot
`<slot />`を使うと、`<Component></Component>`の開始タグと終了タグの間に書かれた子コンテンツを、  
Component.astroファイルに挿入（または「スロットイン、slot in」）できる

### glob
```tsx
---
const allPosts = await Astro.glob('../pages/posts/*.md');
---
{allPosts.map((post) => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
```

### getStaticPaths
どのページルートをビルドするかを指定し、各ページに個別のプロパティを渡す。  

ファイル名（[tag].astro）に角括弧が含まれていることに注意。  

`getStaticPaths`関数はページのルートの配列を返します。各ルートに対応するページは、このファイルで定義されたものと同じテンプレートを使用します。  

ページルートを構成するための情報が必要な場合は、getStaticPaths()の内側に書きます。`Astro.glob()`の呼び出し。生成（返却、return）されるルートのリスト。  

ページルートのHTMLテンプレートで情報を受け取るには、getStaticPaths()の外側に書きます。`props`と`params`を受け取るための値。  

`params`（各ページルートの名前）を含むオブジェクトのリストを常に返す必要があります。また、任意で`props`（各ページに渡したいデータ）を含めることもできます。  

```tsx
export async function getStaticPaths() {
  const allPosts = await Astro.glob('../posts/*.md');
  return [
    {params: {tag: "astro"}, props: {posts: allPosts}},
    {params: {tag: "成功"}, props: {posts: allPosts}},
    {params: {tag: "コミュニティ"}, props: {posts: allPosts}},
    {params: {tag: "ブログ"}, props: {posts: allPosts}},
    {params: {tag: "後退"}, props: {posts: allPosts}},
    {params: {tag: "公開学習"}, props: {posts: allPosts}}
  ]
}
const { tag } = Astro.params;
const { posts } = Astro.props;
const filteredPosts = posts.filter((post) => post.frontmatter.tags?.includes(tag));
```
 👇
```tsx
export async function getStaticPaths() {
    const allPosts = await Astro.glob('../posts/*.md');
    const uniqueTags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];  // globされた全ページに含まれるtagArr(重複除去)。
    return uniqueTags.map((tag) => {
        const filteredPosts = allPosts.filter((post) => post.frontmatter.tags.includes(tag));
        return {
            params: { tag },  // globされた全ページに含まれるtag分ページ生成
            props: { posts: filteredPosts },  // globされたページにparamsのtagが含まれていれば、Postsつまりprops(frontmatter)を返す。該当しなければundefined。
        };
    });
}
const { tag } = Astro.params;
const { posts } = Astro.props;
```