const titleContent = document.querySelector(`#title-content`);
//Форма входа
const showWindowFormSignBtn = document.querySelector(`#header-btn`); //Кнопка показа формы входа
const showWindowFormSign = document.querySelector(`#form-wrapper`); //Сама форма
const userName = document.querySelector(`#user-name`); // Имя пользователя
const userPass = document.querySelector(`#user-pass`); // Пароль
const buttonSign = document.querySelector(`#btn-sign`); // Кнопка входа на сайт
const showCheckPass = document.querySelector(`#show-check-pass`); // Показ правильности введенного пароля 
let checkOpenForm = false; //Проверка открытого окна входа


//Функция показа окна
let showWindowJoin = () => {
    if (checkOpenForm === false) {
        showWindowFormSign.style.display = `block`;
        checkOpenForm = true;
    }
    else if (checkOpenForm === true) {
        showWindowFormSign.style.display = `none`;
        checkOpenForm = false;
    }
}
//Функция анимации формы входа
let setAnimation = () => {
    let pLeft = 0;
    sideCheck = true;
    let intervalAnimationCheckPassOne = setInterval(() => {
        if (pLeft < 5 && sideCheck === true) {
            pLeft++;
            showCheckPass.style.paddingLeft = `${pLeft}px`;
        }
        else if (pLeft === 5) {
            sideCheck = false;
        }
        if (pLeft > 0 && sideCheck === false) {
            pLeft--;
            showCheckPass.style.paddingLeft = `${pLeft}px`;
        }
        else if (pLeft === 0 && sideCheck === false) {
            clearInterval(intervalAnimationCheckPassOne);
        }
    }, 13);
}
let signToSite = (event) => {
    event.preventDefault();
    //Скрипт ввода логина и пароля
    let login = userName.value;
    let pass = userPass.value;
    showCheckPass.style.color = `red`;
    //Добавляем проверку что строка не пустая иначе ошибка
    if (login != null) login = login.toLowerCase(); //Убираем чувствительность регистра
    //Если админ то просим пароль 
    if (login === `admin`) {
        //если пароль верен пишем привет
        if (pass === `123`) {
            showCheckPass.style.color = `green`;
            showCheckPass.innerHTML = `Добро пожаловать`
        }
        else if (pass === ``) {
            showCheckPass.style.color = `rgb(136, 136, 136)`;
            showCheckPass.innerHTML = `Введите пароль`
        }
        // // если нажали отмену (отмены больше нет)
        // else if (pass === null) {
        //     showCheckPass.innerHTML = `Canceled`
        // }
        //Если пароль неверен
        else {
            showCheckPass.innerHTML = `Неправильный пароль`
            setAnimation();
        }
    }
    //Пустой ввод возвращает пустую строку  
    else {
        showCheckPass.innerHTML = `Введите имя пользователя`
        setAnimation();
    }
}
showWindowFormSignBtn.addEventListener(`click`, showWindowJoin);// Слушатель показа окна
buttonSign.addEventListener(`click`, signToSite); // Слушатель входа на сайт


