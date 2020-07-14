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

let lives = 10;
let theHiddenWord = prompt('type the word');
const arrayHiddenWord = [];
theHiddenWord = theHiddenWord.toLowerCase();
for (let i = 0; i < theHiddenWord.length; i++) {
    arrayHiddenWord[i] = '_';
}

let checkLetter = () => {
    let point = prompt('type the char');
    point = point.toLowerCase();
    for (let j = 0; j < theHiddenWord.length; j++) {
        if (theHiddenWord[j] === '_') {
            continue;
        }
        else if (point === theHiddenWord[j]) {
            arrayHiddenWord[j] = point;
            console.log(arrayHiddenWord);
        }
        else {
            console.log(1);
            break;
        }

    }
    checkLetter();
}


checkLetter();