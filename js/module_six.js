// // const pizzaPalace = {
// //   pizzas: ["Supercheese", "Smoked", "Four meats"],
// //   checkPizza(pizzaName) {
// //     return this.pizzas.includes(pizzaName);
// //   },
// //   order(pizzaName) {
// //     const isPizzaAvailable = this.checkPizza(pizzaName);

// //     if (!isPizzaAvailable) {
// //       return `Sorry, there is no pizza named «${pizzaName}»`;
// //     }

// //     return `Order accepted, preparing «${pizzaName}» pizza`;
// //   },
// // };

// // console.log(pizzaPalace.order("Smoked"));

// // "use strict";

// // function showThis() {
// //   console.log("this in showThis: ", this);
// // }

// // const user = {
// //   username: "Poly",
// // };

// // user.showContext = showThis;

// // // Викликаємо в контексті об'єкта
// // user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // // Викликаємо в глобальному контексті
// // showThis(); // "this in showThis: undefined"
// "use strict";

// // const book = {
// //   updateAuthor(newAuthor) {
// //     console.log(this);
// //     this.author = newAuthor;
// //   },
// // };

// // book.updateAuthor("Jacob");
// // console.log(book.author);

// // const book = {
// //   updateTitle(newTitle) {
// //     console.log(this);
// //     this.title = newTitle;
// //   },
// // };

// // const update = book.updateTitle;

// // book.update("Lord Of The Rings");
// // console.log(book.title);

// // function greet(str) {
// //   console.log(` ${str} , ${this.username} , ваша комната ${this.room} !`);
// // }

// // const mango = {
// //     username: "Mango",
// //   room: 27,
// // };

// // const poly = {
// //     username: "Poly",
// //   room: 191,
// // };

// // greet.apply(mango, ["Добро пожаловать"]); // "Добро пожаловать, Манго, твоя комната 27!"
// // greet.apply(poly, ["Алоха"]); // "Алоха, Поли, твоя комната 191!"

// // const parent = {
// //   name: "Stacey",
// //   surname: "Moore",
// //   age: 54,
// //   heritage: "Irish",
// // };

// // const child = Object.create(parent);
// // child.name = "Jason";
// // child.age = 27;
// // console.log(child.age);

// // const animal = {
// //   legs: 4,
// // };

// // const dog = Object.create(animal);
// // console.log(dog);

// // dog.name = "mango"
// // console.log(dog.name);
// // console.log(dog.legs)

// // const ancestor = {
// //   name: "Paul",
// //   age: 83,
// //   surname: "Dawson",
// //   heritage: "Irish",
// // };

// // const parent = Object.create(ancestor);
// // parent.name = "Stacey";
// // parent.surname = "Moore";
// // parent.age = 54;

// // const child = Object.create(parent);
// // child.name = "Jason";
// // child.age = 27;

// // console.log(parent.hasOwnProperty("surname"));
// // console.log(child);

// // class Car {
// //   #brand;
// //   #model;
// //   #price;

// //   constructor(params) {
// //     this.#brand = params.brand;
// //     this.#model = params.model;
// //     this.#price = params.price;
// //   }

// //   get brand() {
// //     return this.#brand;
// //   }

// //   set brand(newBrand) {
// //     this.#brand = newBrand;
// //   }

// //   get moderl() {
// //     return this.#model;
// //   }

// //   set model(newModel) {
// //     this.#model = newModel;
// //   }

// //   get price() {
// //     return this.#price;
// //   }

// //   set price(newPrice) {
// //     this.#price = newPrice;
// //   }
// // }

// // console.log(Car);

// // class MyClass {
// // 	static b = 5;

// // 	constructor(value) {
// // 		this.a = value;
// // 	}
// // }

// // const instance = new MyClass(10);
// // console.log(MyClass.a);

// // class Car {
// //     static maxPrice = 50000;
// //     #price;

// //     constructor({ price }) {
// //       this.#price = price;
// //     }

// //     get price() {
// //       return this.#price;
// //     }

// //     set price(newPrice) {

// //       if (newPrice <= Car.maxPrice) {
// //         this.#price = newPrice;
// //       }
// //     }
// //   }

// // const audi = new Car({ price: 35000 });
// // console.log(audi.price); // 35000

// // audi.price = 49000;
// // console.log(audi.price); // 49000

// // audi.price = 51000;
// // console.log(audi.price);

// // class Car {
// //   static #maxPrice = 50000;
// //   static checkPrice(price) {
// //     return price > Car.#maxPrice
// //       ? "Error! Price exceeds the maximum"
// //       : "Success! Price is within acceptable limits";
// //   }
// //   constructor(params) {
// //     this.price = params.price;
// //   }
// // }

// // const audi = new Car({ price: 36000 });
// // const bmw = new Car({ price: 64000 });

// // console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// // console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// // class User {
// //   constructor(email) {
// //     this.email = email;
// //   }

// //   get email() {
// //     return this.email;
// //   }

// //   set email(newEmail) {
// //     this.email = newEmail;
// //   }
// // }

// // class Admin extends User {
// //   static role = { BASIC: "basic", SUPERUSER: "superuser" };
// // }

// // console.log(Admin.role.SUPERUSER)

// // class User {
// //   email;

// //   constructor(email) {
// //     this.email = email;
// //   }

// //   get email() {
// //     return this.email;
// //   }

// //   set email(newEmail) {
// //     this.email = newEmail;
// //   }
// // }

// // class Admin extends User {
// //   constructor(params) {
// //     super(params);
// //     this.email = params.email;
// //     this.access = params.access;
// //   }

// //   static role = {
// //     BASIC: "basic",
// //     SUPERUSER: "superuser",
// //   };
// // }

// // const mango = new Admin({
// //   email: "mango@mail.com",
// //   access: Admin.role.SUPERUSER,
// // });

// // console.log(mango.email); // "mango@mail.com"
// // console.log(mango.access); // "superuser"

// // class User {
// //   email;

// //   constructor(email) {
// //     this.email = email;
// //   }

// //   get email() {
// //     return this.email;
// //   }

// //   set email(newEmail) {
// //     this.email = newEmail;
// //   }
// // }
// // class Admin extends User {
// //   static role = {
// //     BASIC: "basic",
// //     SUPERUSER: "superuser",
// //   };

// //   constructor(params) {
// //     super(params.email);
// //     this.access = params.access;
// //     this.blacklistedEmails = [];
// //   }
// //   blacklist(email) {
// //     return this.blacklistedEmails.push(email);
// //   }

// //   isBlacklisted(email) {
// //     return this.blacklistedEmails.includes(email);
// //   }
// // }

// // const mango = new Admin({
// //   email: "mango@mail.com",
// //   access: Admin.role.SUPERUSER,
// // });

// // console.log(mango.email); // "mango@mail.com"
// // console.log(mango.access); // "superuser"

// // mango.blacklist("poly@mail.com");
// // console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// // console.log(mango.isBlacklisted("mango@mail.com")); // false
// // console.log(mango.isBlacklisted("poly@mail.com")); // true

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.getBalance -= cost - cost * this.getDiscount;
//    return this.order.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
