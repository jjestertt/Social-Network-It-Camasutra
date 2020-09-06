// show mobile menu
let menu = document.querySelector('.header__menu');
let menuBtn = document.querySelector('.header__menu-icon');
let body = document.querySelector('body');
let menuLinks = document.querySelectorAll('.header__list-item');

let showMenu = () => {
    menu.classList.toggle('header__menu-active');
    menuBtn.classList.toggle('header__menu-icon--active');
    body.classList.toggle('overflow');
}
let clickMenuLink = (e) => {
    e.preventDefault(); // demo mode
    menu.classList.remove('header__menu-active');
    menuBtn.classList.remove('header__menu-icon--active');
    // body.classList.remove('overflow'); //demo mode (deactivate scroll modal window)
}
menuBtn.addEventListener('click', showMenu);
for (let j = 0; j < menuLinks.length; j++) {
    menuLinks[j].addEventListener('click', clickMenuLink);
}

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


//animation on scroll
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});