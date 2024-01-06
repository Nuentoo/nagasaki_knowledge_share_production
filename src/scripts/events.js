/* events inner function */


/* events export */

export const filterEvents = () => {
    const tags = document.querySelectorAll(
        '[data-eventsItem = tag]'
    );
    const posts = document.querySelectorAll(
        '[data-eventsItem = post]'
    );
    const postTags = document.querySelectorAll(
        '[data-eventsItem = postTag]'
    );

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tags.forEach(allTag => {
                allTag.classList.remove('events__active')
            });
            tag.classList.add('events__active');
            const tarTag = tag.innerHTML;
            posts.forEach(post => {
                post.classList.remove('events__active');
            });
            postTags.forEach(postTag => {
                const tarPostTag = postTag.innerHTML;
                if(tarPostTag === tarTag){
                const tarPost = postTag.closest('[data-eventsItem = post]')
                tarPost.classList.add('events__active');
                }
            });
        });
    });
}
