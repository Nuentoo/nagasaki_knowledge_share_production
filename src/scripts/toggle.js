/* toggle inner function */


/* toggle export */

export const hamburgerToggle = () => {
    const hamburger = $('[data-headerItem = hamburger]');
    const navList = $('[data-headerItem = "nav"]');
    const navItems = $('[data-headerItem = "navItems"]');
    const toggleScrollable = () => {
        if ($("body").css("overflow") === "hidden") {
            $("body").css({height:"", overflow:""});
        } else {
            $("body").css({height:"100%", overflow:"hidden"});
        }
    }
    hamburger.on('click', (e) => {
        const target = e.target;
        $(target).toggleClass('opened');
        $(navList).toggleClass('opened');
        e.stopPropagation();
        toggleScrollable();
    });
    navItems.on("click",() => {
        $(hamburger).removeClass('opened');
        navList.removeClass('opened');
        toggleScrollable();
    });

}