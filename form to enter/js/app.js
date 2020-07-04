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
        formTojoin = true;
    }
    else if (checkOpenForm === true) {
        showWindowFormSign.style.display = `none`;
        formTojoin = false;
    }
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
            showCheckPass.innerHTML = `Привет Босс!`
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
        }
    }
    //Пустой ввод возвращает пустую строку  
    else {
        showCheckPass.innerHTML = `Я не знаю кто ты`
    }
}
showWindowFormSignBtn.addEventListener(`click`, showWindowJoin);// Слушатель показа окна
buttonSign.addEventListener(`click`, signToSite); // Слушатель входа на сайт
