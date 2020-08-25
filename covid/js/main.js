// menu
let menu = document.querySelector('.header__menu');
let menuBtn = document.querySelector('.header__menu-icon');

let showMenu = () => {
    menu.classList.toggle('header__menu-active');
}

menuBtn.addEventListener('click', showMenu);