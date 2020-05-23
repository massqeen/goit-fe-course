function burgerMenu() {
    let menu = document.querySelector(".nav-list-wrapper");
    let burger = document.querySelector(".nav__burger");
    let links = document.querySelector(".navigation__list-link");


    burger.addEventListener("click", (e) => {
        toggleMenu();
    });
    [].forEach.call(links, function (el) {
        el.addEventListener("click", () => toggleMenu());
    });


    function toggleMenu() {
        menu.classList.toggle("active");
        burger.classList.toggle("active");
        if (menu.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }
}
burgerMenu();