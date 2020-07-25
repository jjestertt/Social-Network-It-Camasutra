let btn = document.querySelector('.btn__wrap');
let btnIn = document.querySelector('.btn__in')
let toggleClass = () => {
    btn.classList.toggle('btn__wrap_active');
    btnIn.classList.toggle('btn__in_active')
}
btn.addEventListener('click', toggleClass);