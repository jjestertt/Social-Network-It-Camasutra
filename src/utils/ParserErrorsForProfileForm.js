//Функция парсинга
export const parseWord = (array) => {
    return array.map(item => {
        const regExp = /\(([^)]+)\)/; //Создаем регулярку
        const matches = regExp.exec(item); //ищем слова в скобках
        const lastWord = matches[1].split("->"); // если в строке есть "->" то она разобьется на массив и длинна масива увеличится
        if (lastWord.length && lastWord.length <= 1) { // Если массив есть и  длинна  1
            return lastWord[0][0].toLowerCase() + lastWord[0].slice(1); //то 1 слово делаем с маленькой буквы
        } else if (lastWord.length && lastWord.length === 2) { //Если длинна массива 2
            let obj = {}; // инициализируем обьект
            const contactKey = lastWord[1][0].toLowerCase() + lastWord[1].slice(1); //определяем ключ продукта
            obj[contactKey] = item; // записываем ключ и информацию в обьект
            return obj;// и возвращаем его
        }
        return undefined;
    });
}


//Функция принимает в себя массив ошибок и возврщает нужный нам обьект для валидации
export const createErrorsObjectForReduxForm = (array) => {
    let errors = {}; //инициализируем обьект
    array.forEach(error => { //Перебираем массив даных
        if (typeof (error) == "object") { //если нам поподается обьект, разворачиваем его в обьект contacts
            errors = { ...errors, contacts: { ...errors.contacts, ...error } }; // внутри errors
        } else { // если приходит строка
            errors[error] = error; //то суем ее в корень обьекта errors
        }
    });
    return errors; //Возвращаем обьект
}

