//Функция парсинга
export const parseValidatorsField = (array) => {
    let parseArray = array.map(item => {
        const regExp = /\(([^)]+)\)/; //Создаем регулярку
        const matches = regExp.exec(item); //ищем слова в скобках
        const lastWord = matches[1].split("->"); // если в строке есть "->" то она разобьется на массив и длинна масива увеличится
        let obj = {}// инициализируем обьект
        if (lastWord.length && lastWord.length <= 1) { // Если массив есть и  длинна  1
            const contactKey = lastWord[0][0].toLowerCase() + lastWord[0].slice(1);
            obj[contactKey] = item; // записываем ключ и информацию в обьект
            return obj;// и возвращаем его

        } else if (lastWord.length && lastWord.length === 2) { //Если длинна массива 2
            const parentObjectKey = lastWord[0][0].toLowerCase() + lastWord[0].slice(1);
            const contactKey = lastWord[1][0].toLowerCase() + lastWord[1].slice(1); //определяем ключ продукта
            obj = { ...obj, [parentObjectKey]: { ...obj[parentObjectKey], [contactKey]: item } }
            return obj;// и возвращаем его
        }
        return null;
    });
    return parseArray.reduce((a, b) => ({...a, ...b}));
}
