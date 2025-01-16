// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Smoked"));

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// // Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"
"use strict";

// const book = {
//   updateAuthor(newAuthor) {
//     console.log(this);
//     this.author = newAuthor;
//   },
// };

// book.updateAuthor("Jacob");
// console.log(book.author);

// const book = {
//   updateTitle(newTitle) {
//     console.log(this);
//     this.title = newTitle;
//   },
// };

// const update = book.updateTitle;

// book.update("Lord Of The Rings");
// console.log(book.title);

function greet(str) {
  console.log(` ${str} , ${this.username} , ваша комната ${this.room} !`);
}

const mango = {
    username: "Mango",
  room: 27,
};

const poly = {
    username: "Poly",
  room: 191,
};

greet.apply(mango, ["Добро пожаловать"]); // "Добро пожаловать, Манго, твоя комната 27!"
greet.apply(poly, ["Алоха"]); // "Алоха, Поли, твоя комната 191!"
