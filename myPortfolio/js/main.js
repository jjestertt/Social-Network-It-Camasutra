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

let changeWord = (vstring = prompt(`send word`)) => {
    let score = 10;
    let hideWord = vstring.toLowerCase();
    let arrayHideWord = [];
    console.log(hideWord);
    for (let i = 0; i < hideWord.length; i++) arrayHideWord[i] = '_';
    console.log(arrayHideWord);
    let checkLatter = (letter = prompt(`send letter`)) => {
        let hideLetter = letter.toLowerCase();
        for (let j = 0; j < hideWord.length; j++) {
            if (hideWord[j] === hideLetter) {
                arrayHideWord[j] = hideLetter;
            }
            // else if (hideWord[j] != hideLetter) {
            //     score--;
            //     console.log(score);
            //     checkLatter();
            //     break;
            // }
        }
        console.log(arrayHideWord);
    }
    checkLatter();
}
changeWord();