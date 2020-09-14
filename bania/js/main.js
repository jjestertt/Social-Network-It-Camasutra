// scroll
const smoothLinks = document.querySelectorAll('.scroll-to');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
};
//scroll

//popap
let getPopapButton = document.querySelectorAll('.popap-btn');
let closePopapButton = document.querySelector('.popap__button-close');
let popapWindow = document.querySelector('.popap');
let popapWindowInner = document.querySelector('.popap__inner');
let body = document.querySelector('body');
//show popap
let showPopap = (e) => {
    e.preventDefault();
    popapWindow.classList.add('popap-active');
    popapWindowInner.classList.add('popap__inner-active');
    body.classList.add('overflow');
}
//hide popap
let hidePopap = (e) => {
    e.preventDefault();
    popapWindowInner.classList.remove('popap__inner-active');
    body.classList.remove('overflow');
    setTimeout(() => {
        popapWindow.classList.remove('popap-active');
    }, 400)
}

for (i = 0; i < getPopapButton.length; i++) {
    getPopapButton[i].addEventListener('click', showPopap);
}
closePopapButton.addEventListener('click', hidePopap);



//animation
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
    duration: 450, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});