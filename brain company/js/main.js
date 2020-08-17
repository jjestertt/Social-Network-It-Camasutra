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

// //animation button
// let buttonPlay = document.querySelector('.main__video-link');
// let playCircleOne = document.querySelector('.main__video-circle1');
// let playCircleTwo = document.querySelector('.main__video-circle2');
// let buttonAnimationPlay = () => {
//     setTimeout(() => {
//         playCircleOne.classList.toggle('main__video-circle-active');
//         playCircleTwo.classList.toggle('main__video-circle-active');
//     }, 1000)

//     setInterval(() => {
//         playCircleOne.classList.toggle('main__video-circle-active');
//         playCircleTwo.classList.toggle('main__video-circle-active');
//     }, 3000)
// }
// buttonPlay.addEventListener('click', buttonAnimationPlay);


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