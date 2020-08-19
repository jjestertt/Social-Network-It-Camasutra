window.onload = () => {
    let btn = document.querySelector('.btn');
    function setAnimation() {
        let mbody = document.querySelector('.mbody');
        let title = document.querySelector('.title');
        let textFirst = document.querySelector('.text__first');
        let textSecond = document.querySelector('.text__second');
        let pomidorro = document.querySelector('.pomidorro');
        let bg = document.querySelector('.bg');
        setTimeout(() => title.classList.toggle('title__dur'), 1000);
        setTimeout(() => textFirst.classList.toggle('text__dur'), 2000);
        setTimeout(() => textSecond.classList.toggle('text__dur'), 2300);
        setTimeout(() => pomidorro.classList.toggle('pomidorro__dur'), 3000)
        setTimeout(() => {
            mbody.classList.toggle('body__dur');
            bg.classList.toggle('bg__dur');
        }, 4500);
        setTimeout(() => {
            pomidorro.innerHTML = '-_o'
            setTimeout(() => pomidorro.innerHTML = 'O_o', 450);
            setTimeout(() => pomidorro.innerHTML = 'O◡о', 1500);
        }
            , 8000)
        setTimeout(() => {
            btn.classList.toggle('btn__dur')
            btn.addEventListener('click', setAnimation);
        }, 10000);
    }

    setAnimation()

}