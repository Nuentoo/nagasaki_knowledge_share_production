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

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tags.forEach(allTag => {
                allTag.classList.remove('events__active')
            });
            tag.classList.add('events__active');
            /**
             * クリックしたタグのinnerHTMLの文字列
             * @type {string}
             */
            const tarTag = tag.innerHTML;
            posts.forEach(post => {
                post.classList.remove('events__active');
            });
            postTags.forEach(postTag => {
                /**
                 * postTagのinnerHTMLの文字列
                 * @type {string}
                 */
                const tarPostTag = postTag.innerHTML;
                if(tarPostTag === tarTag){
                /**
                 * クリックしたタグと紐付くpost
                 * @type {HTMLElement}
                 */
                const tarPost = postTag.closest('[data-eventsItem = post]')
                tarPost.classList.add('events__active');
                }
            });
        });
    });
}
