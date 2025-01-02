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

// Условие: У тебя есть массив чисел, и тебе нужно создать новый массив, в котором каждый элемент будет возведён в квадрат, а затем умножен на 2.
// Используй метод map() и стрелочную функцию для выполнения этих операций.

// Пример:
// const numbers = [1, 2, 3, 4, 5];
// // Ожидаемый результат: [2, 8, 18, 32, 50]
// Подсказка: Внутри стрелочной функции нужно сначала возвести число в квадрат, а потом умножить на 2.

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((number) => number ** 2 * 2);
// console.log(result);

// const values = [51, -3, 27, 21, -68, 42, -37];
// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log(oddNumbers);

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];
// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// console.log(booksByAuthor);

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };

// console.log(
//   getUsersWithEyeColor(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//       },
//     ],
//     "brown"
//   )
// );

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user) => user.age >= minAge && user.age <= maxAge);
// };

// console.log(
//   getUsersWithAge(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37,
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34,
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24,
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21,
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27,
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38,
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39,
//       },
//     ],
//     20,
//     30
//   )
// );

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// console.log(bookWithTitle);

// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// console.log(bookByAuthor);

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

// console.log(
//   getUserWithEmail(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//       },
//     ],
//     "elmahead@omatom.com"
//   )
// );

// const users = [
//   { id: 1, name: "Alice", isActive: false },
//   { id: 2, name: "Bob", isActive: true },
//   { id: 3, name: "Charlie", isActive: false },
//   { id: 4, name: "Diana", isActive: true },
// ];

// // Найди первый активный аккаунт с помощью find()
// // Результат: { id: 2, name: "Bob", isActive: true }

// const result = users.filter((user) => user.isActive);
// console.log(result);

// const users = [
//   { id: 1, name: "Alice", balance: 1500 },
//   { id: 2, name: "Bob", balance: 4500 },
//   { id: 3, name: "Charlie", balance: 3200 },
//   { id: 4, name: "Diana", balance: 2700 },
// ];

// const result = users.filter((user) => user.balance > 3000);
// console.log(result);

// У тебя есть массив цен на продукты. Нужно создать новый массив, где каждая цена будет увеличена на 20%.
// const prices = [100, 200, 300, 400, 500];
// const percent = 20;

// const newAr = prices.map((price) => price + (price * percent) / 100);
// console.log(newAr);

// Результат: [120, 240, 360, 480, 600]

// Дан массив чисел. Нужно создать массив, где каждый элемент будет преобразован в строку.

// const numbers = [1, 2, 3, 4, 5];
// const newNum = numbers.map((number) => number.toString());
// console.log(newNum);

// Результат: ["1", "2", "3", "4", "5"]

// Дан массив объектов, где каждый объект представляет человека. Нужно оставить только тех, кто старше 18 лет.

// const people = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 19 },
//   { name: "Diana", age: 15 },
// ];

// const adult = people.filter((persone) => persone.age >= 18);
// console.log(adult);

// Дан массив объектов, где у каждого пользователя есть свойство isActive. Нужно оставить только активных пользователей.

// const users = [
//   { name: "Alice", isActive: false },
//   { name: "Bob", isActive: true },
//   { name: "Charlie", isActive: true },
//   { name: "Diana", isActive: false },
// ];

// const activeUser = users.filter((user) => user.isActive);
// console.log(activeUser);

// Дан массив пользователей. Нужно найти первого пользователя с указанным email.

// const users = [
//   { name: "Alice", email: "alice@example.com" },
//   { name: "Bob", email: "bob@example.com" },
//   { name: "Charlie", email: "charlie@example.com" },
// ];

// const getUserName = users.find((user) => user.email === "bob@example.com");
// console.log(getUserName);

// Дан массив книг, у каждой книги есть название и автор. Нужно найти первую книгу с названием "The Great Gatsby".

// const books = [
//   { title: "To Kill a Mockingbird", author: "Harper Lee" },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//   { title: "1984", author: "George Orwell" },
// ];

// const theGreatGatsby = books.find((book) => book.title === "The Great Gatsby");
// console.log(theGreatGatsby);

// Дан массив пользователей. Нужно отфильтровать тех, у кого баланс больше 5000, а затем создать массив, состоящий только из их имён.

// const users = [
//   { name: "Alice", balance: 4800 },
//   { name: "Bob", balance: 5200 },
//   { name: "Charlie", balance: 7300 },
//   { name: "Diana", balance: 3200 },
// ];

// const newUsers = users.filter((user) => user.balance > 5000);
// const newAr = newUsers.map((newUser) => newUser.name);
// console.log(newAr);

// Напиши функцию getUsersByGender(users, gender), которая принимает массив пользователей и строку gender.
// Функция должна возвращать массив объектов пользователей указанного пола.

// const users = [
//   { name: "Alice", gender: "female", age: 25 },
//   { name: "Bob", gender: "male", age: 30 },
//   { name: "Charlie", gender: "male", age: 35 },
//   { name: "Diana", gender: "female", age: 22 },
// ];

// const getUsersByGender = (users, gender) => {
//   return users.filter((user) => user.gender === gender);
// };

// console.log(getUsersByGender(users, "female"));

// Напиши функцию getTotalBalance(users), которая принимает массив объектов, где у каждого объекта есть свойство balance, и возвращает сумму всех балансов.

// const users = [
//   { name: "Alice", balance: 3000 },
//   { name: "Bob", balance: 4500 },
//   { name: "Charlie", balance: 5000 },
// ];

// const getTotalBalance = (users) => {
//   let total = 0;

//   const userBalances = users.map((user) => user.balance);
//   console.log(userBalances);

//   userBalances.forEach(function (userBalance) {
//     total += userBalance;
//   });
//   return total;
// };
// console.log(getTotalBalance(users));

// Напиши функцию findUserByAge(users, age), которая принимает массив пользователей и число age.
// Функция должна возвращать первого пользователя с указанным возрастом или null, если такого пользователя нет.

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

// const findUserByAge = (users, age) => {
//   return users.find((user) => user.age === age);
// };

// console.log(findUserByAge(users, 30));
// // Результат: { name: "Bob", age: 30 }

// console.log(findUserByAge(users, 40));
// Результат: null

// Напиши функцию getUsersOlderThan(users, age), которая принимает массив пользователей и число age.
// Функция должна возвращать массив имён пользователей, которые старше указанного возраста.

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Elena", age: 40 },
// ];

// const getUsersOlderThan = (users, age) => {
//   const filetrUsers = users.filter((user) => user.age > age);
//   return filetrUsers.map((filetrUser) => filetrUser.name);
// };

// console.log(getUsersOlderThan(users, 30));

// Напиши функцию filterProductsByPrice(products, priceLimit), которая принимает массив объектов с товарами и число priceLimit.
// Функция должна возвращать массив названий товаров, цена которых меньше или равна указанному лимиту.

// const products = [
//   { name: "Laptop", price: 1500 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 1200 },
//   { name: "iPhone", price: 900 },
// ];

// const filterProductsByPrice = (products, priceLimit) => {
//   const productFilter = products.filter(
//     (product) => product.price <= priceLimit
//   );

//   return productFilter.map((productFilter) => productFilter.name);
// };
// console.log(filterProductsByPrice(products, 1000));

// Напиши функцию findBookByAuthor(books, authorName), которая принимает массив объектов книг и имя автора.
// Функция должна возвращать объект книги указанного автора.

// const books = [
//   { title: "1984", author: "George Orwell" },
//   { title: "The Catcher in the Rye", author: "J.D. Salinger" },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
// ];

// const findBookByAuthor = (books, authorName) => {
//   return books.find((book) => book.author === authorName);
// };
// console.log(findBookByAuthor(books, "George Orwell"));
// Результат: { title: "1984", author: "George Orwell" }

// Напиши функцию sortUsersByAge(users), которая принимает массив пользователей и возвращает новый массив, отсортированный по возрасту (по возрастанию).

// const users = [
//   { name: "Alice", age: 35 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 30 },
// ];

// const sortUsersByAge = (users) => {
//   return users.sort((a, b) => a.age - b.age);
// };

// console.log(sortUsersByAge(users));

// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive);
// };

// const isEveryUserActive = (users) => {
//   return users.some((user) => user);
// };
// console.log(
//   isEveryUserActive([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ])
// );

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((total, playtime) => {
//   return total + playtime;
// });
// console.log(totalPlayTime);

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   const averagePlayTime = player.playtime / player.gamesPlayed;
//   return acc + averagePlayTime;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const calculateTotalBalance = (users) => {
//   const totalBalance = users.reduce((total, user) => {
//     return total + user.balance;
//   }, 0);

//   return totalBalance;
// };

// console.log(
//   calculateTotalBalance([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ])
// );

// Напиши функцию getSum(numbers), которая принимает массив чисел и возвращает их сумму.
// const numbers = [10, 20, 30, 40, 50];
// const getSum = (numbers) => {
//   const totalValue = numbers.reduce((total, number) => {
//     return total + number;
//   }, 0);
//   return totalValue;
// };
// console.log(getSum(numbers));

// Напиши функцию findMax(numbers), которая принимает массив чисел и возвращает самое большое число.
// const numbers = [10, 25, 5, 70, 15];
// const findMax = (numbers) => {
//   const maxVal = numbers.reduce((min, number) => {
//     number > min ? number : min;
//   }, numbers[0]);

//   return maxVal;
// };

// console.log(findMax(numbers));

// 3. Найди общую длину строк (средняя)
// Напиши функцию getTotalLength(strings), которая принимает массив строк и возвращает их общую длину.

// const strings = ["apple", "banana", "cherry", "date"];
// const getTotalLength = (strings) => {
//   const totalLength = strings.reduce((total, string) => {
//     return total + string.length;
//   }, 0);

//   return totalLength;
// };

// console.log(getTotalLength(strings));

// // Ожидаемый результат: 22
// 4. Подсчитай количество каждого слова (средняя)
// Напиши функцию countWords(words), которая принимает массив слов и возвращает объект, где ключ — это слово, а значение — количество его вхождений.

// const countWords = (words) => {
//   return words.reduce((acc, word) => {
//     if (acc[word]) {
//       acc[word] += 1;
//     } else {
//       acc[word] = 1;
//     }
//     return acc;
//   }, {});
// };

// const words = ["apple", "banana", "apple", "cherry", "banana", "banana"];
// console.log(countWords(words));

// Ожидаемый результат: { apple: 2, banana: 3, cherry: 1 }

// // Ожидаемый результат: { apple: 2, banana: 3, cherry: 1 }
// 5. Преобразуй массив в объект (средняя)
// Напиши функцию arrayToObject(arr), которая принимает массив объектов с ключами id и value и возвращает объект, где id — это ключи, а value — значения.

// const arr = [
//   { id: "a", value: 1 },
//   { id: "b", value: 2 },
//   { id: "c", value: 3 },
// ];

// const arrayToObject = (arr) => {
//   return arr.reduce((acc, item) => {
//     acc[item.id] = item.value;
//     return acc;
//   }, {});
// };

// console.log(arrayToObject(arr));

// // Ожидаемый результат: { a: 1, b: 2, c: 3 }

// 6. Подсчитай общую сумму баланса (средняя)
// Напиши функцию getTotalBalance(users), которая принимает массив пользователей с полем balance и возвращает общую сумму балансов.

// const users = [
//   { name: "Alice", balance: 1200 },
//   { name: "Bob", balance: 3500 },
//   { name: "Charlie", balance: 4700 },
// ];

// const getTotalBalance = (users) => {
//   const total = users.reduce((acc, user) => {
//     return acc + user.balance;
//   }, 0);

//   return total;
// };

// console.log(getTotalBalance(users));
// // Ожидаемый результат: 9400

// 7. Найди средний возраст пользователей (средняя)
// Напиши функцию getAverageAge(users), которая принимает массив пользователей с полем age и возвращает их средний возраст.

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

// const getAverageAge = (users) => {
//   const averageAge = users.reduce((acc, user) => acc + user.page, 0);

//   return averageAge / users.length;
// };
// console.log(getAverageAge(users));

// // Ожидаемый результат: 30

// 8. Создай строку из слов (сложная)
// Напиши функцию concatenateWords(words), которая принимает массив слов и возвращает строку, где все слова объединены через запятую.

// const words = ["apple", "banana", "cherry", "date"];

// const concatenateWords = (words) => {
//   const message = words.reduce((acc, word, index) => {
//     return index === 0 ? word : acc + ", " + word;
//   }, "");
//   return message;
// };

// console.log(concatenateWords(words));

// // Ожидаемый результат: "apple, banana, cherry, date"
// 9. Группировка объектов по категории (сложная)
// Напиши функцию groupByCategory(items), которая принимает массив объектов с полями name и category и возвращает объект, где ключи — это категории, а значения — массивы имен предметов в этой категории.

// const items = [
//   { name: "apple", category: "fruits" },
//   { name: "carrot", category: "vegetables" },
//   { name: "banana", category: "fruits" },
//   { name: "broccoli", category: "vegetables" },
// ];
// const groupByCategory = (items) => {
//   return items.reduce((acc, item) => {
//     if (item.category === item.category) {

//     }
//   }, {});

//   return acc;
// };
// console.log(groupByCategory(items));
// // Ожидаемый результат:
// // {
// //   fruits: ["apple", "banana"],
// //   vegetables: ["carrot", "broccoli"]
// // }
// 10. Подсчитай количество букв в массиве строк (сложная)
// const strings = ["apple", "banana", "cherry"];

// const countLetters = (strings) => {
//   return strings.reduce((acc, string) => {
//     for (const letter of string) {
//       if (acc[letter]) {
//         acc[letter] += 1;
//         acc[letter] = 1;
//       }
//     }
//     return acc;
//   }, {});
// };

// console.log(countLetters(strings));

// // Ожидаемый результат:
// // { a: 6, p: 3, l: 1, e: 2, b: 1, n: 2, c: 1, h: 1, r: 1, y: 1 }

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted();
// console.log(ascendingScores);

// const scores = [27, 2, 41, 4, 7, 3, 75];
// const bla = scores.toSorted();
// console.log(bla);

// const letters = ["b", "B", "a", "A", "c", "C"];
// console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();
// console.log(ascendingReleaseDates);

// const alphabeticalAuthors = authors.toSorted();
// console.log(alphabeticalAuthors);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((min, max) => min - max);
// console.log(ascendingReleaseDates);

// const descendingReleaseDates = releaseDates.toSorted((min, max) => max - min);
// console.log(descendingReleaseDates);

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = authors.toSorted((firstLetter, lastLetter) =>
//   firstLetter.localeCompare(lastLetter)
// );
// console.log(authorsInAlphabetOrder);

// const authorsInReversedOrder = authors.toSorted((firstLetter, lastLetter) =>
//   lastLetter.localeCompare(firstLetter)
// );
// console.log(authorsInReversedOrder);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((firstLetter, lastLetter) =>
//   firstLetter.author.localeCompare(lastLetter.author)
// );

// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = books.toSorted((firstLetter, lastLetter) =>
//   lastLetter.author.localeCompare(firstLetter.author)
// );
// console.log(sortedByReversedAuthorName);

// const sortedByAscendingRating = books.toSorted(
//   (min, max) => min.rating - max.rating
// );
// console.log(sortedByAscendingRating);

// const sortedByDescentingRating = books.toSorted(
//   (min, max) => max.rating - min.rating
// );
// console.log(sortedByDescentingRating);

const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];
// const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
// console.log(sortedByAscendingScore);

// const names = sortedByAscendingScore.map((student) => student.name);
// console.log(names);

// const names = students
//   .toSorted((a, b) => a.score - b.score)
//   .map((student) => student.name);

// console.log(names);

// const uniqCourser = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(uniqCourser);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(names);

// task 1
// Напиши стрілочну функцію getUserNames(users),
// яка прийматиме один параметр users — масив об’єктів користувачів.
// Функція має повертати масив імен усіх користувачів (властивість name) із масиву users.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її викликів.
// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// task 2
// Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів
// другий параметр friendName — ім’я друга для пошуку.
// Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName.
// Друзі кожного користувача зберігаються у властивості friends.
// Якщо користувачів, у яких є такий друг немає, то функція має повернути порожній масив.

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName));
// };

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//   },
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

// task 3
// Напиши стрілочну функцію sortByDescendingFriendCount(users) ,
// яка прийматиме один параметр users — масив об’єктів користувачів.

// Функція має повертати масив усіх користувачів,
// відсортованих за спаданням кількостій їх друзів (властивість friends).

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// const sortByDescendingFriendCount = (users) => {
//   return users.toSorted((a, b) => b.friends.length - a.friends.length);
// };
// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female",
//     },
//   ])
// );

// Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів
// (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.
// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .reduce((total, user) => {
//       return total + user.balance;
//     }, 0);
// };
// const clients = [
//   {
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811,
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821,
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793,
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278,
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951,
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498,
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764,
//   },
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863

// const sortedWordsByLength = (phrases) => {
//   return phrases.toSorted((short, long) => long.localeCompare(short));
// };

// const phrases = ["short", "medium length", "longer phrase", "tiny"];
// console.log(sortedWordsByLength(phrases));

// function isEven(num) {
//   if (num % 2 === 0) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// console.log(isEven(4)); // true
// console.log(isEven(7)); // false

// function unique(arr) {
//   const newArr = [];

//   for (let i = 0; i <= arr.length; i += 1) {
//     let index = arr.indexOf(i + 1);
//     if (index === ) {
//       console.log(arr.splice(index));
//     }
//   }
//   return newArr;
// }

// console.log(unique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
// // console.log(unique(["a", "b", "a", "c", "b"])); // ["a", "b", "c"]
