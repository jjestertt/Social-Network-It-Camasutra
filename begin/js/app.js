const headerBtn = document.querySelector('#header-btn');
const titleContent = document.querySelector('#title-content');
//Функция быстрого вывода 
let addToDocument = (parametr) => {
    let textNode = document.createTextNode(parametr);
    titleContent.appendChild(textNode);
}

let clickFunction = () => {
    let temp = '';
    for (let i = 1; i < 9; i++) {
        temp = temp + `7 * ${i} = ${7 * i}`;
    }

    addToDocument(temp);
}

headerBtn.addEventListener('click', clickFunction);