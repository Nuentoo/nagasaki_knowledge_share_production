/* calousel inner function */


/* calousel export function */

export const calousel = () => {
    const containers = document.querySelectorAll('[data-js="carousel"]');
    containers.forEach((element) => {
        const clonedList = element.cloneNode(true);
        element.parentNode.appendChild(clonedList);
    })
};

export const caloselBentTailCats = () => {
    // 処理
}