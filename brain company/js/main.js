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
$(document).ready(function () {
    $('.feedback__slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true

    });
});
