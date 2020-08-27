// show mobile menu
let menu = document.querySelector('.header__menu');
let menuBtn = document.querySelector('.header__menu-icon');
let body = document.querySelector('body');

let showMenu = () => {
    menu.classList.toggle('header__menu-active');
    body.classList.toggle('overflow');
}

menuBtn.addEventListener('click', showMenu);

//hidden top
let topBar = document.querySelector('.header__top');
let mainSection = document.querySelector('.main');
let header = document.querySelector('.header__nav');

let hideTopBar = setTimeout(() => {
    topBar.classList.add('hide');
    mainSection.style.marginTop = "47px";
    header.style.padding = "6px 0";
}, 6000)

//hide modal
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close');
let btnModalClose = document.querySelector('.modal__button');
let modalOverlay = document.querySelector('.modal__wrapper');
let demoLinks = document.querySelectorAll('.demo');

modalClose.addEventListener('click', () => modal.classList.toggle('hide'));
btnModalClose.addEventListener('click', () => modal.classList.toggle('hide'));


for (let i = 0; i <= demoLinks.length; i++) {
    demoLinks[i].addEventListener('click', () => {
        modal.classList.toggle('hide');
    })
}
