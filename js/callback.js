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

function concatenateStrings(strings) {
  strings.forEach(function (string) {
    strings.join(" ");
  });

  return strings.join(" ");
}
console.log(concatenateStrings(["Hello", "world", "from", "forEach"]));
