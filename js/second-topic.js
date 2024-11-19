// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
// }

// console.log(checkAge(20));
// console.log(checkAge(10));

// task 2

// function checkStorage(available, ordered) {
//   if (available <= ordered) {
//     return "Not enough goods in stock!";
//   } else {
//     return "Order is processed, our manager will contact you";
//   }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(200, 20));

// task 3

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "There are no products in the order!";
//   } else if (ordered > available) {
//     return "Your order is too large, there are not enough items in stock!";
//   } else {
//     return "The order is accepted, our manager will contact you";
//   }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(80, 80));

// task 4

// function checkPassword(password) {
//   const correctPassword =
//     "jqueryismyjam" == password
//       ? "Access granted"
//       : "Access denied, wrong password!";

//   return correctPassword;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));

// task 5
// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return "price: 0";
//       break;

//     case "professional":
//       return "price: 20";
//       break;

//     case "organization":
//       return "price: 50";
//       break;

//     default:
//       return "Invalid subscription type!";
//   }
// }
// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("random"));

// task 6
// const a = 20;
// console.log(a > 10 && a < 30); // true && true -> true
// const b = 50;
// console.log(b > 10 && b < 30);

// task 7

// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if (screenWidth <= sm) {
//   console.log("Mobile screen");
// } else if (screenWidth > sm && screenWidth <= md) {
//   console.log("Tablet screen");
// } else if (screenWidth > md && screenWidth <= lg) {
//   console.log("Desktop screen");
// } else {
//   console.log("Godzilla screen");
// }

// task 8

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
//   //   17 > 10 - true; 17 < 30 - true - true
//   //   5 > 10 - false -> false
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));

// task 9

// function checkAccess(subType) {
//   return subType === "pro" || subType === "vip";
// }

// console.log(checkAccess("pro"));
// console.log(checkAccess("starter"));

// task 10

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }

// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));

// task 11

// function checkNumber(num) {
//   if (num > 0) {
//     return "Положительное число";
//   } else if (num < 0) {
//     return "Отрицательное число";
//   } else {
//     return "Это ноль";
//   }
// }

// console.log(checkNumber(3));
// console.log(checkNumber(-1));
// console.log(checkNumber(0));

// task 12

// function calculate(a, b, operator) {
//   switch (operator) {
//     case "+":
//       return a + b;

//     case "-":
//       return a - b;

//     case "/":
//       return a / b;

//     case "*":
//       return a * b;

//     default:
//       return "Неизвестный оператор";
//   }
// }

// console.log(calculate(2, 3, "+"));
// console.log(calculate(2, 3, "-"));
// console.log(calculate(2, 3, "="));

// task 13

// function canDrive(age) {
//   return age >= 18 ? "Можно водить машину" : "Рано садиться за руль";
// }

// console.log(canDrive(20));
// console.log(canDrive(9));

// task 14

// function getDiscount(amount) {
//   if (amount > 5000) {
//     return "Скидка 20%";
//   } else if (amount >= 3000) {
//     return "Скидка 15%";
//   } else if (amount >= 1000) {
//     return "Скидка 10%";
//   } else {
//     return "Скидка не предусмотрена";
//   }
// }

// console.log(getDiscount(5500));
// console.log(getDiscount(4000));
// console.log(getDiscount(2000));
// console.log(getDiscount(999));

// task 15

// function isEven(num) {
//   if (num % 2 === 0) {
//     return "Четное число";
//   } else {
//     return "Нечетное число";
//   }
// }

// function isEven(num) {
//   return num % 2 === 0 ? "Четное число" : "Нечетное число";
// }
// console.log(isEven(4));
// console.log(isEven(5));

// task 16

// function getDayType(day) {
//   switch (day) {
//     case "понедельник":

//     case "вторник":

//     case "среда":

//     case "четверг":

//     case "пятница":
//       return "Рабочий день";
//     case "суббота":
//     case "воскресенье":
//       return "Выходной";
//     default:
//       return "Неверный день";
//   }
// }
// console.log(getDayType("пятница"));
// console.log(getDayType("суббота"));
// console.log(getDayType("аувцвц"));

// task 17

// function login(username, password) {
//   if (username === "admin" && password === "12345") {
//     return "Добро пожаловать, админ!";
//   } else if (username === "user" && password === "password") {
//     return "Добро пожаловать, пользователь!";
//   } else {
//     return "Неверный логин или пароль";
//   }
// }

// console.log(login("admin", "12345"));
// console.log(login("user", "password"));
// console.log(login("xdwdw", "1wddw2345"));

// task 18

// function isMultiple(num, divisor) {
//   return num % divisor === 0
//     ? "Число кратно делителю"
//     : "Число не кратно делителю";
// }

// console.log(isMultiple(4, 2));
// console.log(isMultiple(5, 2));

//task 19

// const hours = 14;
// const minutes = 0;
// let timestring =
//   minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;

// console.log(timestring);

// if (minutes > 0) {
//   console.log(timestring);
// } else {
//   console.log(`${hours} г.`);
// }

// task 20

// const dayUntilDeadline = 10;

// if (dayUntilDeadline === 0) {
//   console.log("Today");
// } else if (dayUntilDeadline === 1) {
//   console.log("Tomorrow");
// } else if (dayUntilDeadline === 2) {
//   console.log("Owermorrow");
// } else {
//   console.log("Date in the future");
// }

// const dayUntilDeadline = 0;
// switch (dayUntilDeadline) {
//   case 0:
//     console.log("Today");
//     break;
//   case 1:
//     console.log("Tomorrow");
//     break;
//   case 2:
//     console.log("Owermorrow");
//     break;
//   default:
//     console.log("Date in the future");
//     break;
// }

// task 21
const option = 3;
let message = "";

switch (option) {
  case 1:
    message = "Можете отримати товар до 12.00";
    break;
  case 2:
    message = "Курєр доставить ваш товар";
  case 3:
    message = "Посилка буде відправлена сьогодні";
    break;
  default:
    message = "вам зателефонує менеджер";
    break;
}
console.log(message);
