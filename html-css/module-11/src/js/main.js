let topButton = document.getElementById("top-button");

// When the user scrolls down 250px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    // if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    //     topButton.style.display = "block";
    // } else {
    //     topButton.style.display = "none";
    // }
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



function burgerMenu() {
    let menu = document.querySelector(".nav-list-wrapper");
    let burger = document.querySelector(".nav__burger");
    let links = document.querySelectorAll(".navigation__list-link");


    burger.addEventListener("click", (e) => {
        toggleMenu();
    });
    [].forEach.call(links, function (el) {
        el.addEventListener("click", () => toggleMenu());
    });
    //another way of 'forEach':
    // for (let link of links) {
    //     link.addEventListener('click', () => toggleClass());
    // }


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