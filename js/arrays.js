// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// console.log(firstElement);
// const secondElement = fruits[1];
// console.log(secondElement);
// const lastElement = fruits[3];
// console.log(lastElement);

// const planets = ["Earth", "Mars", "Venus", "Uranus"];
// planets[0] = "Jupiter";
// console.log(planets);

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);

// function getOrderQuantity(order) {
//   return order.length;
// }

// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));

// const planets = ["Earth", "Mars", "Venus"];
// const lastEl = planets.length - 1;
// console.log(planets[lastEl]);

// function getLastElementMeta(array) {
//   const lastEl = array.length - 1;

//   return [lastEl, array[lastEl]];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// function getExtremeElements(array) {
//   const firstEl = array[0];
//   const lastEl = array.length - 1;

//   return [firstEl, array[lastEl]];
// }

// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// const array = [false];
// const result = array ? "A" : "B";
// console.log(result);

// function getLength(array) {
//   const newAr = array.join("");
//   return newAr.length;
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLength(["M", "a", "n", "g", "o"]));

// function calculateEngravingPrice(message, pricePerWord) {
//   const newAr = message.split(" ");

//   const price = newAr.length * pricePerWord;
//   return price;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, 4);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// function getSlice(array, value) {
//   const indexOfVal = array.indexOf(value);

//   if (indexOfVal === -1) {
//     return [];
//   }
//   return array.slice(0, indexOfVal + 1);
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));

// const tags = [];

// for (let i = 0; i < 3; i += 1) {
//   tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]

// function createArrayOfNumbers(min, max) {
//   let newAr = [];
//   for (let i = min; i <= max; i += 1) {
//     newAr.push(i);
//   }

//   return newAr;
// }

// console.log(createArrayOfNumbers(1, 3));

// Напиши функцию, которая принимает массив строк и объединяет их в одну строку через запятую и пробел.
// Если массив пустой, вернуть пустую строку.

// function joinStrings(array) {
//   return array.join(", ");
// }

// console.log(joinStrings(["Hello", "world"]));
// console.log(joinStrings(["apple", "banana", "cherry"]));
// console.log(joinStrings([]));

// Напиши функцию, которая принимает строку, где слова разделены пробелами, и возвращает массив этих слов.

// function splitWords(string) {
//   return string.split(" ");
// }

// console.log(splitWords("JavaScript is awesome"));
// console.log(splitWords("split me please"));

// Напиши функцию, которая принимает массив чисел и ещё одно число.
// Функция должна добавить это число в конец массива, если его там ещё нет.

// function addUnique(arr, num) {
//   if (arr.indexOf(num) === -1) {
//     arr.push(num);
//   }
//   return arr;
// }

// console.log(addUnique([1, 2, 3], 4));
// console.log(addUnique([1, 2, 3], 3));

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function getEvenNumbers(start, end) {
//   const newAr = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newAr.push(i);
//     }
//   }
//   return newAr;
// }
// console.log(getEvenNumbers(3, 11));

// function checkStorage(storage, item) {
//   for (let i = 0; i < storage.length; i += 1) {
//     if (storage.includes(item.toLowerCase())) {
//       return `${item.toLowerCase()} is available to order!`;
//     } else {
//       return "Sorry! We are out of stock!";
//     }
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));

// function getCommonElements(array1, array2) {
//   let newAr = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newAr.push(array1[i]);
//     }
//   }
//   return newAr;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function getUniqueElements(array1, array2) {
//   let newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       return array2.concat(array1[i]);
//     }
//   }
//   return newArray;
// }

// console.log(getUniqueElements([1, 2, 3], [2, 3, 4]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

function countEvenNumbers(array) {
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (i % 2 === 0) {
      count += 1;
    }
  }

  return count;
}

console.log(countEvenNumbers([1, 2, 3, 4, 5])); // 2
console.log(countEvenNumbers([10, 15, 20, 25, 30])); // 3
console.log(countEvenNumbers([])); // 0
