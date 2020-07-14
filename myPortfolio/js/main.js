// let buttonSlider = document.querySelector(`#button__slider`);
// let buttonSliderInner = document.querySelector(`#button__slider-inner`);
// let buttonSliderOn = false;
// let posStart = 6;

// let chageButtonSLider = () => {
//     if (buttonSliderOn == false) {
//         buttonSliderOn = true;
//         let setAnimation = setInterval(() => {
//             if (posStart < 36) {
//                 posStart = posStart + 2;
//                 buttonSliderInner.style.marginLeft = `${posStart}%`;
//                 console.log(posStart)
//             }
//             else {
//                 buttonSliderInner.style.backgroundColor = `#4feb12
//                 `;
//                 clearInterval(setAnimation);
//             }
//         }, 1);
//     }
//     else {
//         let setAnimation = setInterval(() => {
//             if (posStart > 6) {
//                 posStart = posStart - 2;
//                 buttonSliderInner.style.marginLeft = `${posStart}%`;
//                 console.log(posStart)
//             }
//             else {
//                 buttonSliderInner.style.backgroundColor = `#ccc`;
//                 clearInterval(setAnimation);
//             }
//         }, 1);
//         buttonSliderOn = false;
//     }
// }
// buttonSlider.addEventListener(`click`, chageButtonSLider);

let setWord = prompt('type the word');
setWord = setWord.toLowerCase();
const arrWord = [];
let lives = 10;
for (let i = 0; i < setWord.length; i++) {
    arrWord[i] = '_';
}


let checkChar = () => {
    let point = prompt('type the char');
    point = point.toLowerCase();
    for (let j = 0; j < setWord.length; j++) {
        if (point === setWord[j] && setWord[j] != '_') {
            arrWord[j] = point;
        }
        else { console.log('*') }
    }
    console.log(arrWord);
    console.log(lives);
    checkChar();
}



checkChar();



























