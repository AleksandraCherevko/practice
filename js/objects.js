// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 8,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.propKey = "author";
// apartment.rating = 12;

// console.log(apartment.owner.name);
// console.log(apartment.tags.length);

// console.log(apartment["rating"]);
// console.log(apartment);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys);

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const keys = Object.keys(book);
// console.log(keys);

// for (let key of keys) {
//   console.log(key);
//   console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// console.log(keys);

// for (let key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// function countProps(object) {
//   return Object.keys(object).length;
// }
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// function countProps(object) {
//   const propCount = Object.keys(object);
//   console.log(propCount);
//   for (let propCount of object) {
//     console.log(object[propCount]);
//   }
// }
// console.log(countProps({ name: "Mango", age: 2 }));

// const obj = {
//   name: "Mango",
//   age: 2,
//   hasTail: true,
// };

// const value = Object.entries(obj);
// console.log(value); 0

// function getOwnProps(object) {
//   for (let key in object) {
//     console.log(key);
//   }
// }
// getOwnProps(obj);

// function getOwnProps(object) {
//   const keys = Object.keys(object);
//   console.log(keys);
// }
// getOwnProps(obj);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);

// const values = Object.values(apartment);
// console.log(keys, values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const keys = Object.values(salaries);

//   for (let key in salaries) {
//     totalSalary += salaries[key];
//   }

//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const products = {
//   apple: 50,
//   banana: 30,
//   orange: 40,
// };

// function calculateTotalPrice(products) {
//   let totalPrice = 0;
//   const keys =Object.values( products);
//   for (let key in products) {
//     totalPrice += products[key];
//   }
//   return totalPrice;
// }
// console.log(calculateTotalPrice(products));

// const employees = {
//   Alice: 29,
//   Bob: 35,
//   Charlie: 46,
// };
// function findBestEmployee(employees) {
//   const values = Object.values(employees);
//   const keys = Object.keys(employees);

//   let maxTasks = Math.max(...values);
//   let bestEmployeeIndex = values.indexOf(maxTasks);
//   return keys[bestEmployeeIndex];
// }

// console.log(findBestEmployee(employees));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors, rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Engine"));

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 6.8,
//   },
// ];

// const titles = [];
// for (let book of books) {
//   titles.push(book.title);
// }
// console.log(titles);

// let totalRating = 0;
// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = totalRating / books.length;
// console.log(averageRating);

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const newAr = [];

//   for (const product of products) {
//     if (propName in product) {
//       return newAr.push(product[propName]);
//     }
//   }
//   return newAr;
// }

// console.log(getAllPropValues("name"));

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const newAr = [];

//   for (const product of products) {
//     if (propName in product) {
//       newAr.push(product[propName]);
//     }
//   }

//   return newAr;
// }

// console.log(getAllPropValues("quantity"));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//     return `Product ${productName} not found!`;
//   }
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));

// const products = [
//   { name: "Молоко", price: 50, category: "Продукты" },
//   { name: "Телефон", price: 30000, category: "Электроника" },
//   { name: "Хлеб", price: 30, category: "Продукты" },
//   { name: "Наушники", price: 5000, category: "Электроника" },
//   { name: "Яблоки", price: 100, category: "Продукты" },
// ];

// const newAr = [];
// for (let product of products) {
//   if (product.category === "Продукты") {
//     newAr.push(product);
//   }
// }
// console.log(newAr);

// let totalPrice = 0;
// for (let product of products) {
//   if (product.category === "Электроника") {
//     totalPrice += product.price;
//   }
// }
// console.log(totalPrice);

// const products = [
//   { name: "Молоко", price: 50, category: "Продукты", quantity: 2 },
//   { name: "Телефон", price: 30000, category: "Электроника", quantity: 1 },
//   { name: "Хлеб", price: 30, category: "Продукты", quantity: 3 },
//   { name: "Наушники", price: 5000, category: "Электроника", quantity: 2 },
//   { name: "Яблоки", price: 100, category: "Продукты", quantity: 5 },
// ];

// let totalPrice = 0;

// for (let product of products) {
//   if (product.category === "Электроника") {
//     totalPrice += product.price * product.quantity;
//   }
// }

// console.log(totalPrice);

// // ✅ Логічно й синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     return "Returning all books";
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
// };

// // Виклики методів
// console.log(bookShelf.getBooks()); // поверне "Returning all books"
// console.log(bookShelf.addBook("New book 1")); // поверне "Adding book New book 1"
// console.log(bookShelf.addBook("New book 2")); // поверне "Adding book New book 2"

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },

//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Power potion"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.getPotions());

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion("Invisibility");
// atTheOldToad.addPotion("Power potion");
// console.log(atTheOldToad.getPotions());

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   },
// };

// bookShelf.addBook({ title: "Dream Guardian", rating: 9 });
// console.log(bookShelf.getBooks());

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// bookShelf.getAvarageRating(); // 7

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.getTotalPrice());

// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.getTotalPrice());

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.getTotalPrice());

// const person = {
//   name: "Иван",
//   age: 25,
//   city: "Москва",
//   job: "Программист",
// };

// function keyValue() {
//   const values = Object.values(person);
//   console.log(values.length);
// }
// keyValue();

// const salaries = {
//   John: 3000,
//   Ann: 5000,
//   Pete: 2500,
//   Mary: 4000,
// };

// function calculateTotalSalaries() {
//   const values = Object.values(salaries);
//   console.log(values);
//   let total = 0;
//   for (let value of values) {
//     total += value;
//   }

//   return total;
// }
// console.log(calculateTotalSalaries());

// const book = {
//   title: "1984",
//   author: "George Orwell",
//   year: 1949,
// };

// function printEntries() {
//   const booksLists = Object.entries(book);

//   for (let [key, value] of booksLists) {
//     console.log(`Ключ: ${key}, Значение: ${value}`);
//   }
// }

// printEntries();

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion("Invisibility");
// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }

//     return totalPrice;
//   },
// };

// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };

// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.getPotions());

// function foo(...args) {
//   console.log(args);
// }
// foo("a", "b");
// function add(...args) {
//   console.log(args);
//   let total = 0;

//   for (let arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(12, 4, 11, 48));

// const profile = {
//   username: "mango",
//   age: 2,
// };

// const profileUpd = {
//   username: "poly",
// };

// const updProfile = {
//   ...profile,
//   ...profileUpd,
// };

// console.log(updProfile);

// const firstObj = { A: 1, B: 2 };
// const secondObj = { A: 3, C: 4 };

// const thirdObj = {
//   A: 5,
//   ...firstObj,
//   ...secondObj,
//   C:  6,
// };
// console.log(thirdObj);

// function foo(...args) {
//   console.log(args);
// }
// foo(1, 2, 3, 4, 5);

// function isEnoughCapacity(products, containerSize) {
//   let productValues = Object.values(products);

//   let totalPorductValues = 0;
//   for (let productValue of productValues) {
//     totalPorductValues += productValue;
//   }

//   if (totalPorductValues <= containerSize) {
//     return "true";
//   }

//   return "false";
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));
// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14));

// function calcAverageCalories(days) {
//   let totalCalories = 0;

//   for (let day of days) {
//     totalCalories += day.calories;
//   }
//   const averageCalories = totalCalories / days.length;
//   return averageCalories;
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

// const profile = {
//   username: "Jacob",
//   playTime: 300,
//   getInfo() {
//     return `${profile.username} has ${profile.playTime} active hours!`;
//   },
//   changeUsername(newName) {
//     profile.username = newName;
//   },

//   updatePlayTime(hours) {
//     profile.playTime += hours;
//   },
// };

// console.log(profile.getInfo());
// profile.changeUsername("Marco");
// console.log(profile.getInfo());
// profile.updatePlayTime(20);
// console.log(profile.getInfo());
