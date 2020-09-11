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

//show popap
let showPopap = (e) => {
    e.preventDefault();
    popapWindow.classList.remove('popap__hide');
}

//hide popap
let hidePopap = (e) => {
    e.preventDefault();
    popapWindow.classList.add('popap__hide');
}

for (i = 0; i < getPopapButton.length; i++) {
    getPopapButton[i].addEventListener('click', showPopap);
}
closePopapButton.addEventListener('click', hidePopap);
