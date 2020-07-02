const headerBtn = document.querySelector('#header-btn');
const titleContent = document.querySelector('#title-content');


let clickFunction = () => {

}

headerBtn.addEventListener('click', clickFunction);



// //Название JS
// let qwestonJs = prompt(`What is original name JavaScript?`)
// if (qwestonJs === `ECMAScript`) titleContent.innerHTML = `This is true`;
// else {
//     titleContent.innerHTML = `You dont know? It's ECMAScript!`
//     setTimeout(clickFunction, 1500);
// }

// //Проверка числа на знак 
// let num = +prompt(`Введите число`)
// if (num === 0) alert(0);
// else if (num < 0) alert(-1);
// else if (num > 0) alert(1);

//Тернарное выражение
// let a = +prompt();
// let b = +prompt();
// let num = (a + b <= 4) ? `Мало` : `Много`
// alert(num);
// Спрашиваем имя 

// //Скрипт ввода логина и пароля
// let login = prompt(`Please enter yor login`);
// //Добавляем проверку что строка не пустая иначе ошибка
// if (login != null) login = login.toLowerCase();
// let pass = '';
// //Если админ то просим пароль 
// if (login === `admin`) {
//     pass = prompt(`Please enter password`);
//     //если пароль верен пишем привет
//     if (pass === `i'm a boss`) {
//         titleContent.innerHTML = `Hello boss!`
//     }
//     // если нажали отмену
//     else if (pass === null) {
//         titleContent.innerHTML = `Canceled`
//     }
//     //Если пароль неверен
//     else {
//         titleContent.innerHTML = `Password uncorrected`
//     }
// }
// //Если нажали отмену при вводе имени
// else if (login === null) {
//     titleContent.innerHTML = `Canceled`
// }
// //Пустой ввод возвращает пустую строку а отмена возвращает null
// else {
//     titleContent.innerHTML = `I dont know who are you`
// }

//Вывод спец символов
//for (let i = 2000; i < 9000; i++) titleContent.innerHTML += `&#${i}`;