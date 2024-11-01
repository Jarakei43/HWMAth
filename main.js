// N1
// const num1 = +prompt("Min");
// const num2 = +prompt("Max");
// const num3 = +prompt("Number of");

// for (let i = 0; i < num3; i++) {
//   console.log(Math.round(Math.random() * num2 + num1));
// }

// N2
// const num4 = +prompt("Num");
// let i = 0;
// while (i < num4) {
//   console.log(Math.round(Math.random() * 100));
//   i++
// }

// N3
// const arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.round(Math.random() * 100));
// }
// const evenArr = arr.filter((item) => {
//   return item % 2 === 0;
// });
// console.log(evenArr);

// N4
// const arr = [];
// for (let i = 0; i < 20; i++) {
//   arr.push(Math.round(Math.random() * 100));
// }
// const biggerArr = arr.filter((item) => {
//   return item > 50;
// });
// console.log(biggerArr);

// N5
// const arr = [];
// const uniqueArr = []
// for (let i = 0; i < 15; i++) {
//   arr.push(Math.round(Math.random() * 100));
// }

// arr.forEach((item) => {
//   if(!uniqueArr.includes(item)) {
//     uniqueArr.push(item)
//   }
// })
// console.log(uniqueArr);

// N6
// const arr = ["apple", "banana", "cherry", "date"]
// const randomIndex = Math.round(Math.random()*arr.length)
// console.log(arr[randomIndex]);

// N7
// const num1 = +prompt("Min");
// const num2 = +prompt("Max");
// const num3 = +prompt("Number of");
// const randomArr = []

// for (let i = 0; i < num3; i++) {
//   randomArr.push((Math.round(Math.random() * num2 + num1)));
// }
// console.log(randomArr);

// N8
// const randomArr = [];

// for (let i = 0; i < Math.round(Math.random() * 15); i++) {
//   randomArr.push(Math.round(Math.random() * 100));
// }
// const isTrue = randomArr.find((item) => {
//   if (item >= 30 && item <= 70) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// });

// N9
// const randomArr = [];
// for (let i = 0; i < 10; i++) {
//   randomArr.push(Math.round(Math.random() * 100));
// }
// console.log(randomArr);
// const randomPlus = [];
// randomArr.forEach((item) => {
//   randomPlus.push(item + Math.round(Math.random() * 10));
// });
// console.log(randomPlus);

// N10
// const randomArr = [];
// let numOf = []

// for (let i = 0; i < 30; i++) {
//   randomArr.push(Math.round(Math.random() * 200));
// }
// const isTrue = randomArr.find((item) => {
//   if (item >= 50 && item <= 150) {
//     numOf.push(item)
//   }
// });
// console.log(numOf.length);

// N1
// const demical = +prompt("Num with demical part")
// console.log(Math.round(demical));

// N2
// const num = [3.1, 2.7, 4.4, 5.5]
// const rounded = []
// num.forEach((item) => {
//    rounded.push(Math.round(item))
// })
// console.log(rounded);

// N3
// const demical1 = +prompt("Num with demical part1")
// const demical2 = +prompt("Num with demical part2")
// console.log(Math.round(demical1 + demical2));

// N4
// const num = [3.7, 2.5, 3.5, 4.5];
// let sum = 0;
// let middle = 0;
// num.forEach((item) => {
//   sum += item;
//   middle = Math.round(sum / num.length);
// });
// console.log(middle);

// N5
// const num = [12.3, 45.7, 22.8, 19.9];
// const roundedArr = [];
// num.forEach((item) => {
//   roundedArr.push(Math.round(item));
// });
// console.log(roundedArr);

// N6
// const rounding = +prompt("num for round")
// console.log(Math.round(rounding/5) * 5);

// N7
// const toTens = +prompt("");
// console.log(Math.round(toTens * 10) / 10);

// N8
// const randomArr = [];
// let numOf = []

// for (let i = 0; i < 10; i++) {
//   randomArr.push(Math.round(Math.random() * 100));
// }
// const isTrue = randomArr.find((item) => {
//   if (item >= 20 && item <= 80) {
//     numOf.push(item)
//   }
// });
// console.log(numOf);

// N9
// const fraction = +prompt("");
// console.log(Math.round(fraction * 10) / 10);

// N10
// const toHalf = +prompt("");
// let num = Math.round(toHalf * 10);
// while (num % 10 < 3 && num % 10 != 0) {
//   num++;
// }
// while (num % 10 > 3 && num % 10 != 0) {
//   num++;
// }
// console.log(num / 10 + "0");

// N1
// const demical = +prompt("Num with demical part")
// console.log(Math.floor(demical));

// N2
// const num = [3.1, 2.7, 4.4, 5.5]
// const floored = []
// num.forEach((item) => {
//    floored.push(Math.floor(item))
// })
// console.log(floored);

// N3
// const demical1 = +prompt("Num with demical part1")
// const demical2 = +prompt("Num with demical part2")
// console.log(Math.floor(demical1 - demical2));

// N4
// const num = [3.7, 2.5, 3.5, 4.5];
// let sum = 0;
// let middle = 0;
// num.forEach((item) => {
//   sum += item;
//   middle = Math.floor(sum / num.length);
// });
// console.log(middle);

// N5
// const num = [12.3, 45.7, 22.8, 19.9];
// const roundedArr = [];
// num.forEach((item) => {
//   roundedArr.push(Math.floor(item));
// });
// console.log(roundedArr);

// N6
// const flooring = +prompt("num for floor")
// console.log(Math.floor(flooring/5) * 5);

// N7
// const toTens = +prompt("");
// console.log(Math.floor(toTens * 10) / 10);

// N8
// const randomArr = [];
// let numOf = []

// for (let i = 0; i < 10; i++) {
//   randomArr.push(Math.floor(Math.random() * 100));
// }
// const isTrue = randomArr.find((item) => {
//   if (item >= 20 && item <= 80) {
//     numOf.push(item)
//   }
// });
// console.log(numOf);

// N9
// const fraction = +prompt("");
// console.log(Math.floor(fraction * 10) / 10);

// N10
// const toLess = +prompt("");
// let num = Math.floor(toLess * 10);
// while (num % 10 < 3 && num % 10 != 0) {
//   num--;
// }
// while (num % 10 > 3 && num % 10 != 0) {
//   num++;
// }
// console.log(num / 10 + ".00");
