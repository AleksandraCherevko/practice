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

// function countEvenNumbers(array) {
//   let count = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     if (i % 2 === 0) {
//       count += 1;
//     }
//   }

//   return count;
// }

// console.log(countEvenNumbers([1, 2, 3, 4, 5])); // 2
// console.log(countEvenNumbers([10, 15, 20, 25, 30])); // 3
// console.log(countEvenNumbers([])); // 0

// const values = "8 11";
// function calculatSquare(values) {
//   const newAr = values.split(" ");

//   const width = newAr[0];
//   const heigth = newAr[1];

//   return width * heigth;
// }

// const res = calculatSquare(values);
// console.log(res);

// const fruits = ["banana", "orange", "plum", "apple", "grape"];
// function consoleFruits(array) {
//   for (let i = 0; i < fruits.length; i += 1) {
//     const element = fruits[i];
//     console.log(`${i}: ${element}`);
//   }
// }

// const result = consoleFruits(fruits);

// Напиши функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий только те числа, которые больше заданного значения.

// const numbers = [1, 5, 10, 15, 20];
// function filterNumbers(array, count) {
//   const newAr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (count < numbers[i]) {
//       console.log(numbers[i]);
//     }
//   }
// }
// const result = filterNumbers(numbers, 10);

// function sumArray(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//   }
//   return `total: ${total}`;
// }

// console.log(sumArray([2, 4, 6, 8]));

// const numbers = [412, 371, 94, 63, 176];
// function calculateTotalPrice(array) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i += 1) {
//     total += numbers[i];
//     console.log(total);
//   }
//   return total;
// }

// const result = calculateTotalPrice(numbers);

// Задача: Работа с массивом строк
// Напишите функцию processArray(strings, delimiter, targetWord), которая выполняет следующие действия:

// Соединяет массив строк в одну строку с использованием разделителя delimiter.
// Разделяет получившуюся строку обратно в массив слов.
// Проверяет, входит ли targetWord в массив. Если слово есть:
// Удаляет его с помощью pop() или splice().
// Добавляет его в конец массива через push().
// Возвращает новый массив, содержащий только первые 3 элемента (или меньше, если массив короче) и последние 2 элемента.
// Если слово отсутствует в массиве, просто возвращает его индекс через indexOf().

// const strings = ["Hello", "world", "this", "is", "JavaScript"];
// const delimiter = " ";
// const targetWord = "this";

// function processArray(strings, delimiter, targetWord) {
//   for (const string of strings) {
//     if (targetWord === string) {
//       return strings.join(delimiter);
//     }
//   }
//   return strings.indexOf(targetWord);
// }

// console.log(processArray(strings, delimiter, targetWord));

// const strings = ["Hello", "world", "this", "is", "JavaScript"];
// const delimiter = " ";
// const targetWord = "this";

// function processArray(strings, delimiter, targetWord) {
//   if (strings.includes(targetWord)) {
//     return strings.join(delimiter);
//   }

//   return strings.indexOf(targetWord);
// }

// console.log(processArray(strings, delimiter, targetWord));

// function slugify(title) {
//   return title.toLowerCase().split(" ").join("-");
// }
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);

//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   return newArray;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// function filterArray(numbers, value) {
//   const newAr = [];
//   for (let number of numbers) {
//     if (number > value) {
//       newAr.push(number);
//     }
//   }
//   return newAr;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// const students = [
//   { name: "Анна", age: 22 },
//   { name: "Иван", age: 19 },
//   { name: "Мария", age: 25 },
//   { name: "Петр", age: 20 },
//   { name: "Сергей", age: 23 },
// ];

// function filterAndSortStudents(students) {
//   return students
//     .filter((student) => student.age > 20)
//     .toSorted((firstStudent, secondStudent) =>
//       firstStudent.name.localeCompare(secondStudent.name)
//     )
//     .map((student) => `Имя: ${student.name}, Возраст: ${student.age}`);
// }

// console.log(filterAndSortStudents(students));

// function countCharacters(str) {
//   const newObj = { ...str };
//   console.log(newObj);
// }

// console.log(countCharacters("javascript"));
// // Ожидаемый результат: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

const products = [
  { name: "iPhone", category: "electronics" },
  { name: "T-shirt", category: "clothing" },
  { name: "MacBook", category: "electronics" },
  { name: "Jeans", category: "clothing" },
  { name: "Blender", category: "home" },
  { name: "TV", category: "electronics" },
];

// const categoryCount = products.reduce((accumulator, product) => {
//   const category = product.category;
//   const name = product.name;

//   if (accumulator[category]) {
//     accumulator[category] += name;
//   } else {
//     accumulator[category] = name;
//   }

//   return accumulator;
// }, {});

// console.log(categoryCount);

// const categoryCount = products
//   .map((p) => p.name)
//   .reduce((acc, name) => {
//     return acc + name.length;
//   }, 0);

// const nameOfProducts = products.forEach((product) => console.log(product.name));
// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const wordCount = words.reduce((acc, word) => {
//   if (acc[word]) {
//     acc[word] += 1;
//   } else {
//     acc[word] = 1;
//   }
//   return acc;
// }, {});

// console.log(wordCount);

// const words = ["dog", "elephant", "cat", "hippopotamus", "lion"];

// const theLongestWord = words.reduce((acc, word) => {
//   if (word.length > acc.length) {
//     return word;
//   } else {
//     return acc;
//   }

//   // если word длиннее acc, вернуть word
//   // иначе вернуть acc
// }, "");

// console.log(theLongestWord);

// const theLongestWord = words.reduce((acc, word) => {
//   return word.length > acc.length ? word : acc;
// });
// console.log(theLongestWord);

// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.reduce(
//   (acc, num) => {

//     if (num % 2 === 0) {
//       acc.even.push(num);
//     } else {
//       acc.odd.push(num);
//     }
//     return acc;
//   },
//   { even: [], odd: [] }
// );

// console.log(result);

// const letters = ["H", "e", "l", "l", "o"];
// const word = letters.reduce((acc, letter) => acc + letter, "");
// console.log(word);

// const numbers = [10, 20, 30, 40, 50];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// const average = sum % numbers.length;
// console.log(average);

// const numbers = [10, 20, 30, 40, 50];

// const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;

// console.log(average); // 30

const numbers = [10, 15, 20, 25, 30, 35];


function newAr(items) {
  const even = items.filter((item) => item % 2 === 0); // [10, 20, 30]

  const sum = even.reduce((acc, num) => acc + num, 0); // 60

  const average = sum / even.length; // 60 / 3 = 20

  return average;
}

console.log(newAr(numbers)); // 👉 20

// const even = numbers.filter((number) => {
//   if (number % 2 === 0) {
//     return number;
//   }
// });

// const sum = even.reduce((acc, num) => {
//   let total = acc + num;
//   return total;
// }, 0);

// const average = sum / even.length;
// console.log(average);
