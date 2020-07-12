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
// //object calc
// class Calc {
//     constructor(a, b) {
//         this.a = a,
//             this.b = b
//     }
//     plus = () => {
//         return (+this.a + +this.b);
//     }
//     minis = () => {
//         return (this.a - this.b);
//     }
//     divid = () => {
//         return (this.a / this.b);
//     }
//     multiply = () => {
//         return (this.a * this.b);
//     }
//     equals = () => {
//         if (this.b == 0) {
//             console.log('error divid at null imposible')
//         }
//         else if (this.b != null && this.b != '' && +this.b > 0 && +this.a >= 0) {
//             console.log(`${this.a} + ${this.b} = ${this.plus()}`);
//             console.log(`${this.a} - ${this.b} = ${this.minis()}`);
//             console.log(`${this.a} / ${this.b} = ${this.divid()}`);
//             console.log(`${this.a} * ${this.b} = ${this.multiply()}`);
//         }
//     }
// }
// let rndNum = new Calc(prompt(`first number`), prompt(`second number`));
// rndNum.equals();