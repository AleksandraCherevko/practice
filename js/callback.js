// function greet(name) {
//     return `Welcome ${name}!`;
//   }

//   // Викликаємо функцію greet і виводимо результат у консоль
//   console.log(greet("Mango")); // "Welcome Mango!"

//   // Виводимо функцію greet у консоль, не викликаючи її
//   console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(makePizza(""));

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Ultracheese", deliverPizza));

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (orderedItems) {
//     totalPrice += orderedItems;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
//   const newAr = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       newAr.push(number);
//     }
//   });

//   return newAr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function doubleNumbers(numbers) {
//   const newAr = [];
//   numbers.forEach(function (number) {
//     newAr.push(number * 2);
//   });

//   return newAr;
// }

// console.log(doubleNumbers([1, 2, 3, 4]));

// function sumArray(numbers) {
//   let total = 0;
//   numbers.forEach(function (number) {
//     total += number;
//   });

//   return total;
// }

// console.log(sumArray([5, 10, 15]));

// function filterByLength(strings, number) {
//   const newAr = [];

//   strings.forEach(function (string) {
//     if (string.length > number) {
//       newAr.push(string);
//     }
//   });

//   return newAr;
// }

// console.log(filterByLength(["cat", "dog", "elephant", "fox"], 4));
// console.log(filterByLength(["short", "tiny", "medium", "verylong"], 5));

// function countEvenOdd(numbers) {
//   let even = 0;
//   let odd = 0;

//   numbers.forEach(function (number) {
//     if (number % 2 == 0) {
//       even++;
//     } else {
//       odd++;
//     }
//   });

//   return `even: ${even}, odd: ${odd}`;
// }

// console.log(countEvenOdd([1, 2, 3, 4, 5]));

// function concatenateStrings(strings) {
//   strings.forEach(function (string) {
//     strings.join(" ");
//   });

//   return strings.join(" ");
// }
// console.log(concatenateStrings(["Hello", "world", "from", "forEach"]));

// function areAllPositive(numbers) {
//   let isPositive = true;
//   numbers.forEach(function (number) {
//     if (number <= 0) {
//       isPositive = false;
//     }
//   });
//   return isPositive;
// }

// console.log(areAllPositive([1, 2, 3])); // true
// console.log(areAllPositive([1, -2, 3])); // false

// function findUniques(array) {
//   const uniqueValues = [];
//   array.forEach(function (item) {
//     if (!uniqueValues.includes(item)) {
//       uniqueValues.push(item);
//     }
//   });

//   return uniqueValues;
// }

// console.log(findUniques([1, 2, 2, 3, 3, 3, 4])); // [1, 2, 3, 4]
// console.log(findUniques([7, 7, 8, 9, 9, 10, 10, 10])); // [7, 8, 9, 10]

// Задача 8: Подсчёт букв в строках
// Напиши функцию countLetters, которая принимает массив строк и возвращает массив, где каждый элемент — это количество букв в соответствующей строке массива. Используй метод forEach.

// function countLetters(items) {
//   const newAr = [];
//   items.forEach(function (value) {
//     newAr.push(value.length);
//   });

//   return newAr;
// }

// console.log(countLetters(["cat", "elephant", "dog"]));
// console.log(countLetters(["hello", "world"]));

// Задача 9: Создание массива из чисел больше N
// Напиши функцию greaterThanN, которая принимает массив чисел и число n. Функция должна возвращать массив чисел, которые больше n. Используй метод forEach.

// function greaterThanN(values, N) {
//   const newAr = [];
//   values.forEach(function (value) {
//     if (value > N) {
//       newAr.push(value);
//     }
//   });

//   return newAr;
// }
// console.log(greaterThanN([10, 20, 30, 40], 25));
// console.log(greaterThanN([5, 15, 25, 35], 20));

// Задача 10: Форматирование объектов
// Напиши функцию formatUsers, которая принимает массив объектов с информацией о пользователях (name и age) и выводит в консоль строки вида "User: John, Age: 25". Используй метод forEach.

// function formatUsers(users) {
//   users.forEach(function (user) {
//     console.log(`User: ${user.name}, Age: ${user.age}`);
//   });
// }
// const users = [
//   { name: "John", age: 25 },
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 20 },
// ];
// formatUsers(users);
// // Вывод:
// // User: John, Age: 25
// // User: Alice, Age: 30
// // User: Bob, Age: 20
