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

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
}

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Radar"));
