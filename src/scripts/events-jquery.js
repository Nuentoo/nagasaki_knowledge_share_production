/* events inner function */


/* events export */

export const filterEvents = () => {
    /**
     * データ属性がtagの要素
     */
    const tags = $('[data-eventsItem = tag]');
    /**
     * データ属性がpostの要素
     */
    const post = $('[data-eventsItem = post]');
    /**
     * データ属性がpostTagの要素
     */
    const postTag = $('[data-eventsItem = postTag]');

    // タグボタンを非アクティブ化
    const disableTag = () => {
        tags.removeClass('events__active');
    }
    // 押したタグボタンをアクティブ化
    const activeTag = (target) => {
        target.addClass('events__active');
    }
    // 記事を非アクティブ化
    const disablePost = () =>{
        post.removeClass('events__active');
    }
    // 押したタグボタンと紐づく記事をアクティブ化
    const activePost = (target) => {
        /**
         * クリックしたタグのinnerHTMLの文字列
         * @type {string}
         */
        const tarTag = target.context.innerHTML;
        /**
         * innerHTMLがtarTagと同一のpostTag
         */
        const tarPostTag = postTag.
        filter((index, element)=>{
            return element.innerHTML === tarTag;
        });
        // tarPostTagの親postをアクティブ化
        tarPostTag.closest('[data-eventsItem = post]').addClass('events__active');
    }

    // タグボタンを押したとき発火
    tags.on('click', (e) => {
        const target = $(e.target)
        disableTag();
        activeTag(target);
        disablePost();
        activePost(target);
    });
}
