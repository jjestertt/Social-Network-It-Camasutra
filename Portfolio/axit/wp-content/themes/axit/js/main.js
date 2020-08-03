let menuBtn = document.querySelector('.header__menu-btn-wrapper');
let menuBtnIn = document.querySelector('.header__menu-btn-inner')
let menuItem = document.querySelector('.header__menu-list');
let body = document.querySelector('body');
let toggleClass = () => {
    menuBtn.classList.toggle('header__menu-btn-wrapper_active');
    menuBtnIn.classList.toggle('header__menu-btn-inner_active');
    menuItem.classList.toggle('header__menu-list_active');
    body.classList.toggle('body__lock-scroll');
}
menuBtn.addEventListener('click', toggleClass);

//tabs 
let tabBtn = document.querySelectorAll('.tabs__change');
let tabText = document.querySelectorAll('.tabs__center');

for (let i = 0; i < tabBtn.length; i++) {
    if (i != 0) {
        tabText[i].style.display = 'none';
    }
    tabBtn[i].addEventListener('click', () => {
        for (let j = 0; j < tabBtn.length; j++) {
            if (j != i) {
                tabText[j].style.display = 'none';
                tabBtn[j].classList.remove('tabs__active');
            }
        }
        tabText[i].style.display = 'block'
        tabBtn[i].classList.add('tabs__active');
    })
}
//scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        toggleClass();
        body.classList.remove('body__lock-scroll');
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

$(document).ready(function () {

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});