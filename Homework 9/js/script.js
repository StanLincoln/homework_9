// Задача Объявить функцию, которая считывает значение через prompt и выводит “ДА” если число четное и “НЕТ” в ином случае.

// function checkNumber() {
//   let number = Number(prompt("Enter your number"));
//   if (number % 2 == 0) {
//     console.log("Да");
//   } else {
//     console.log("Нет");
//   }
// }
// checkNumber();

// Задача. Создать функцию, которая в качестве аргументов получает два числа и выводит в консоль наибольшее.

// function checkNumber(a, b) {
//   if (a > b) {
//     return a;
//   }
//   return b;
// }
// console.log(checkNumber(12, 6));
// console.log(checkNumber(-2, 6));

// Задача Описать функцию, которая получает число и возвращает true, если число четное и false в ином случае

// function checkNumber(num) {
//     if (num % 2 == 0) {
//       return true;
//     }
//     return false;
//   }
//   console.log(checkNumber(6));
//   console.log(checkNumber(7));

// Задача Описать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.

// function range(num) {
//   let array = [];
//   for (let i = 0; i < num; i++) {
//     array.push(i);
//   }
//   return array;
// }
// console.log(range(6));
// console.log(range(15));

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.

// function range(a, b) {
//   let array = [];
//   if (a < b) {
//     for (let i = a; i < b; i++) {
//       array.push(i);
//     }
//     return array;
//   } else {
//     if (a > b) {
//       for (let i = b; i < a; i++) {
//         array.push(i);
//       }
//     }
//   }
//   return array;
// }
// console.log(range(6, 12));
// console.log(range(15, 1));

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему.

// function range(a, b) {
//     let array = [];
//     if (a < b) {
//       for (let i = a; i < b; i++) {
//         array.unshift(i);
//       }
//       return array;
//     } else {
//       if (a > b) {
//         for (let i = b; i < a; i++) {
//           array.unshift(i);
//         }
//       }
//     }
//     return array;
//   }
//   console.log(range(6, 12));
//   console.log(range(15, 1));

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.

// let list = [5, 14, -5, 33, 0, 5, 6, 18, -9];
// let sum = 0;
// for(let i = 0; i < list.length; i++){
//     sum += list[i];
// }
// console.log(sum);

// В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.

// let list = [5, 14, -5, 33, 0, 5, 6, 18, -9];
// let sum = 0;
// for (let i = 0; i < list.length; i++) {
//   if (list[i] > 0) {
//     sum += list[i];
//   }
// }
// console.log(sum);

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.

// let list = [5, 14, -5, 33, 0, 5, 6, 18, -9];
// let sum1 = 0;
// let sum2 = 0;
// for (let i = 0; i < list.length; i++) {
//   if (list[i] % 2 == 0) {
//     sum1 += list[i];
//   }else{
//     sum2 += list[i];
//   }
// }
// console.log(sum1-sum2);

// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.

// let arr = [5, 14, -5, 33, 0, 5, 6, 18, -9];
// let min = 0;
// let max = 0;
// let sum = 0;
// let avg = sum / arr.length;

// function analyzeArray(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     sum += arr[i];
//   }
//   return {
//     min: min,
//     max: max,
//     avg: avg,
//   }
// }
// console.log(analyzeArray(arr));

// Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.

// let sum = 0;
// for(let i = 0; i <= 50; i++){
//     if(i % 5 == 0){
//         sum += i;
//     }
// }
// console.log(sum);

// В программе объявлена переменная list, содержащая массив данных. Используя цикл, посчитайте сумму значений до первого булевого значения. Дойдя до булевого значения остановите цикл. Результат суммы выведите в консоль

// let list = [5, 14, -5, 33, 0, 5, 6, 18, -9, true, 42, false, 10];
// let sum = 0;

// for (let i = 0; i < list.length; i++) {
//   if (typeof list[i] === "boolean") {
//     break;
//   }
//   sum += list[i];
// }
// console.log(sum);

// В следующих задачах будет использоваться массив из объектов, каждый из которых описывает определенный товар.
// Пример массива
// let arr = [
//   {
//     id: 1,
//     title: "bicycle",
//     price: 45000,
//     discount: 10,
//   },
//   {
//     id: 2,
//     title: "roller-skates",
//     price: 15000,
//     discount: 5,
//   },
//   {
//     id: 3,
//     title: "Kick scooter",
//     price: 10000,
//     discount: 30,
//   },
//   {
//     id: 4,
//     title: "skis",
//     price: 25000,
//     discount: 20,
//   },
//   {
//     id: 5,
//     title: "skate",
//     price: 10000,
//     discount: 0,
//   },
// ];

// Написать цикл, который выводит только названия товаров.

// for (let i = 0; i < arr.length; i++) {
//   for (let key in arr[i]) {
//     console.log(arr[i].title);
//   }
// }

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”

// for (let i = 0; i < arr.length; i++) {
//     for (let key in arr[i]) {
//       console.log(`${arr[i].title} (${arr[i].price})`);
//     }
//   }

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”

// for (let i = 0; i < arr.length; i++) {
//     for (let key in arr[i]) {
//         let discountPrice = arr[i].price * ( 1 - arr[i].discount / 100);
//       console.log(`${arr[i].title} (${discountPrice})`);
//     }
//   }

// Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром (без учета скидки).

// let max = 0;
// function analyzeArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].price > max) {
//       max = arr[i].title;
//     }
//   }
//   return {
//     max: max,
//   }
// }
// console.log(analyzeArray(arr));

// Написать код, выполнив задание: если значение объекта является числом (number), то его значение надо увеличить вдвое.

// Пример объекта:

// let menu = {
//   width: 200,
//   height: 300,
//   title: "my menu",
// };

// Результат:

// let menu = {
//     width: 400,
//     height: 600,
//     title: "my menu"
// };

// for (let key in menu) {
//   if (typeof menu[key] === "number") {
//     menu[key] *= 2;
//   }
// }
// console.log(menu);

// Написать функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.

// function checkNumber(a, b){
//     if(a > b){
//         return 1;
//     }else if(a < b){
//         return -1;
//     }else{
//         return 0;
//     }
// }
// console.log(checkNumber(15, 2));
// console.log(checkNumber(4, 8));
// console.log(checkNumber(3, 3));


// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

function checkNumber(a, b){
    if(a % 2 == 0 && b % 2 == 0){
        return  a * b;
    }else if(a % 2 == 1 && b % 2 == 1){
        return  a + b;
    }else if(a % 2 == 1 && b % 2 == 0) {
        return a;
    }else{
        return b;
    }
}
console.log(checkNumber(4, 6));
console.log(checkNumber(5, 7));
console.log(checkNumber(7, 2));
