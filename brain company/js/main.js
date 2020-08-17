//scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
//slider
$(document).ready(function () {
    $('.feedback__slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 707,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});
//modal

let btnReg = document.querySelector('.main__btn-registration');
let btnLesson = document.querySelector('.main__btn-lesson');
let btnCourse = document.querySelector('.course__btn')
let modal = document.querySelector('.modal');
let btnClose = document.querySelector('.modal__close');

let openModal = (e) => {
    e.preventDefault();
    modal.classList.toggle('modal__active');
}
let closeModal = () => modal.classList.remove('modal__active');

btnReg.addEventListener('click', openModal);
btnLesson.addEventListener('click', openModal);
btnCourse.addEventListener('click', openModal);

btnClose.addEventListener('click', closeModal);