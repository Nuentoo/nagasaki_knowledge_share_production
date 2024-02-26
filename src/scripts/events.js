/* events inner function */


/* events export */

export const filterEvents = () => {
    /**
     * データ属性がtagの要素
     * @type {NodeList}
     */
    const tags = document.querySelectorAll('[data-eventsItem = tag]');
    /**
     * データ属性がpostの要素
     * @type {NodeList}
     */
    const posts = document.querySelectorAll('[data-eventsItem = post]');
    /**
     * データ属性がpostTagの要素
     * @type {NodeList}
     */
    const postTags = document.querySelectorAll('[data-eventsItem = postTag]');

    // タグボタンを非アクティブ化
    const disableTag = () => {
        $(tags).removeClass('events__active');
    }
    // 押したタグボタンをアクティブ化
    const activeTag = (target) => {
        $(target).addClass('events__active');
    }
    // 記事を非アクティブ化
    const disablePost = () =>{
        $(posts).removeClass('events__active');
    }
    // 押したタグボタンと紐づく記事をアクティブ化
    const activePost = (target) => {
        postTags.forEach(postTag => {
            /**
             * クリックしたタグのinnerHTMLの文字列
             * @type {string}
             */
            const tarTag = target.innerHTML;
            /**
             * postTagのinnerHTMLの文字列
             * @type {string}
             */
            const postTagHTML = postTag.innerHTML;
            if(postTagHTML === tarTag){
                /**
                 * クリックしたタグと紐付くpost
                 * @type {HTMLElement}
                 */
                const tarPost = postTag.closest('[data-eventsItem = post]')
                $(tarPost).addClass('events__active');
            }
        });
    }

    // タグボタンを押したとき発火
    $(tags).on('click', (e) => {
        const target = e.target
        disableTag();
        activeTag(target);
        disablePost();
        activePost(target);
    });
}
