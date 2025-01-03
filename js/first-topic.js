// "use strict";

// // task 2

// function getShippingMessage(country, price, deliveryFee) {
//   return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
// }

// console.log(getShippingMessage("Australia", 120, 50));

// // task 3

// function getElementWidth(content, padding, border) {
//   return parseFloat(content) + 2 * parseFloat(padding) + 2 * parseFloat(border);
// }
// console.log(getElementWidth("50px", "8px", "4px"));

// // task 4

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(4)); // true
// console.log(isEven(7)); // false

// // task 5

// function square(num) {
//   return num * num;
// }

// console.log(square(5)); // 25
// console.log(square(2)); // 4

// // task 6

// function getLength(str) {
//   return str.length;
// }
// console.log(getLength("Hello")); // 5
// console.log(getLength("JavaScript")); // 10

// // task 7

// function max(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(max(3, 7)); // 7
// console.log(max(10, 2)); // 10
// const num = 30.8;
// console.log(Math.pow(num));

// a1 = true && true;
// // true
// a2 = true && false;
// // false
// a3 = false && true;
// // false
// a4 = false && 3 == 4;
// // false
// a5 = "Cat" && "Dog";
// // dog
// a6 = false && "Cat";
// // false
// a7 = "Cat" && false;
// // false
// a8 = "" && false;
// // ""
// a9 = false && "";
// // false

o1 = true || true;
// turn
o2 = false || true;
// true
o3 = true || false;
// true
o4 = false || 3 == 4;
// false
o5 = "Cat" || "Dog";
// cat
o6 = false || "Cat";
// cat
o7 = "Cat" || false;
//cat
o8 = "" || false;
// false
o9 = false || "";
// ''
o10 = false || varObject;
// varObj
