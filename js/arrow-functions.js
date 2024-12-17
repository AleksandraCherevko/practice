// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// ==================

// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     numbers.forEach(function (number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     return filteredNumbers;
//   }

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 4));

// const getUserEmails = (users) => {
//   return users.map((user) => user.email);
// };

// console.log(
//   getUserEmails([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ])
// );

// Условие: У тебя есть массив с именами людей. Используя метод map(),
// преобразуй массив так, чтобы каждое имя начиналось с заглавной буквы, а остальная часть была в нижнем регистре.
// const names = ["alice", "bob", "charlie", "dave"];
// const result = names.map(
//   (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// );

// console.log(result);

// Условие: У тебя есть массив объектов, представляющих посты в блоге. Каждый пост имеет массив тегов.
//  Тебе нужно использовать метод flatMap(), чтобы собрать все теги в один массив, без повторений.

// const posts = [
//   { title: "Post 1", tags: ["js", "frontend"] },
//   { title: "Post 2", tags: ["html", "css", "js"] },
//   { title: "Post 3", tags: ["react", "frontend"] }
// ];
// // Ожидаемый результат: ["js", "frontend", "html", "css", "react"]
// Подсказка: Чтобы избежать повторений, можешь использовать метод Set() для хранения уникальных значений.

// const posts = [
//   { title: "Post 1", tags: ["js", "frontend"] },
//   { title: "Post 2", tags: ["html", "css", "js"] },
//   { title: "Post 3", tags: ["react", "frontend"] },
// ];

// const results = posts.flatMap((post) => post.tags);
// const newAr = new Set(results);

// console.log(newAr);

// Условие: У тебя есть массив чисел, и тебе нужно создать новый массив, в котором каждый элемент будет возведён в квадрат, а затем умножен на 2. Используй метод map() и стрелочную функцию для выполнения этих операций.

// Пример:
// const numbers = [1, 2, 3, 4, 5];
// // Ожидаемый результат: [2, 8, 18, 32, 50]
// Подсказка: Внутри стрелочной функции нужно сначала возвести число в квадрат, а потом умножить на 2.
