//Возведение массива в степень
const arr = [1, 2, 3, 4, 5];
let arrToPow = (parametr = prompt('Введите степень')) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** parametr;
    }
    return arr;
}
console.log(arrToPow());



// // Вывод четных чиел из массива
// let numbes = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) { //Остаток деления на 2 = 0 
//             console.log(arr[i]);
//         }
//     }
// }
// const y = [];
// // ты сам задашь массив
// for (let i = 0; i < 10; i++) y.push(prompt(`Введи значени массива ${i}`));
// numbes(y);


// Счетчик For и While
// // for (let i = 0; i < 3; i++) {
// //     console.log(`number ${i}!`);
// // }
// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}!`);
//     i++;
// }



// //простое если при делении на любое число кроме 1 и n есть остаток.
// let num = 22;
// setCounter:
// for (let i = 2; i < num; i++) {
//     for (let j = 2; j < i - 1; j++) {
//         if (i % j == 0) {
//             continue setCounter;
//         }
//     }
//     console.log(i);
// }

