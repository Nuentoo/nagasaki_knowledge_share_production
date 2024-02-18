/* toggle inner function */


/* toggle export */

export const hamburgerToggle = () => {
    const hamburger = document.querySelector('[data-headerItem = hamburger]');
    const navList = document.querySelector('[data-headerItem = "nav"]');
    $(hamburger).on('click', (e) => {
        const target = e.target;
        $(target).toggleClass('opened');
        $(navList).toggleClass('opened');
        e.stopPropagation();
    });
}