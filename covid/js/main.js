// show mobile menu
let menu = document.querySelector('.header__menu');
let menuBtn = document.querySelector('.header__menu-icon');
let body = document.querySelector('body');
let menuLinks = document.querySelectorAll('.header__list-item');

let showMenu = () => {
    menu.classList.toggle('header__menu-active');
    body.classList.toggle('overflow');
}
let clickMenuLink = (e) => {
    e.preventDefault();
    menu.classList.toggle('header__menu-active');
    // body.classList.remove('overflow'); bag with lockskroll
}
menuBtn.addEventListener('click', showMenu);
for (let j = 0; j < menuLinks.length; j++) {
    menuLinks[j].addEventListener('click', clickMenuLink);
}
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
let modalInner = document.querySelector('.modal__inner');
let demoLinks = document.querySelectorAll('.demo');

let showModal = (e) => {
    e.preventDefault();
    modal.classList.toggle('modal-active');
    modalInner.classList.add('modal__inner-active');
    body.classList.add('overflow');
}
let hideModal = () => {
    modal.classList.toggle('modal-active');
    modalInner.classList.remove('modal__inner-active');
    body.classList.remove('overflow');
}

for (let i = 0; i < demoLinks.length; i++) {
    demoLinks[i].addEventListener('click', showModal);
}

modalClose.addEventListener('click', hideModal);
btnModalClose.addEventListener('click', hideModal);

