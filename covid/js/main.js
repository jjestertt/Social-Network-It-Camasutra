// show mobile menu
let menu = document.querySelector('.header__menu');
let menuBtn = document.querySelector('.header__menu-icon');
let body = document.querySelector('body');

let showMenu = () => {
    menu.classList.toggle('header__menu-active');
    body.classList.toggle('overflow');
}

menuBtn.addEventListener('click', showMenu);