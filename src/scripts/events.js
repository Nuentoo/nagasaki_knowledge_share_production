/* events inner function */


/* events export */

export const filterEvents = () => {
    const tags = document.querySelectorAll(
        '[data-eventsItem = tag]'
    );
    const postTags = document.querySelectorAll(
        '[data-eventsItem = postTag]'
    );

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const tarTag = tagItem.innerHTML;
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
