/* toggle inner function */


/* toggle export */

export const hambergerToggle = () => {
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.navLinks').classList.toggle('expanded');
    });
}