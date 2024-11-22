// const message = "JavaScript is awesome";
// console.log(message.toUpperCase());

// task 2
// str.slice(startIndex, endIndex)

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }
// console.log(getSubstring("Hello world", 3));

// task 3
// function normalizeInput(input, to) {
//   return to === "upper" ? input.toUpperCase() : input.toLowerCase();
// }

// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));

// task 4

// const message = "Please buy our stuff!";
// const hasSpam = message.includes("buy");

// if (hasSpam) {
//   console.log("Warning: This message contains forbidden words.");
// } else {
//   console.log("You can safely open this message.");
// }

// task 5

// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Jason Neis", "Jacob"));

//  task 6

// function checkFileExtension(fileName, ext) {
//   return fileName.toLowerCase().endsWith(ext)
//     ? "File extension matches"
//     : "File extension does not match";
// }

// console.log(checkFileExtension("styles.css", ".css"));
// console.log(checkFileExtension("index.html", ".js"));

// task 7

// const message = "Welcome to Bahamas!";
// const index = message.indexOf("to");
// console.log(index); // 8

// task 8

// function getFileName(file) {
//   return file.includes(".") ? file.slice(0, file.indexOf(".")) : file;
// }

// console.log(getFileName("styles.css"));
// console.log(getFileName("app"));

// task 9

// function createFileName(name, ext) {
//   return `${name.trim()}.${ext}`;
// }

// console.log(createFileName("report ", "csv"));
// console.log(createFileName(" presentation", "xml"));

// task 10

// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// task 11

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// task 12

// function calculateTotal(number) {
//   let total = 0;
//   let i = 1;

//   while (i <= number) {
//     total += i;
//     i++;
//   }

//   return total;
// }

// console.log(calculateTotal(3));
// console.log(calculateTotal(18));

// task 13

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
// }
// console.log(calculateTotal(18));

// task 14 Вывод чисел от 1 до 10: Напиши цикл, который выводит в консоль все числа от 1 до 10.

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

// task 15 Сумма четных чисел: Напиши функцию, которая принимает число n и возвращает сумму всех четных чисел от 1 до n.

// function countNum(n) {
//   let total = 0;

//   for (let i = 1; i <= n; i += 1) {
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }

//   return total;
// }

// console.log(countNum(4));

// task 16 Обратный порядок: Используй цикл for, чтобы вывести числа от 10 до 1 в обратном порядке.

// for (let i = 10; i >= 1; i -= 1) {
//   console.log(i);
// }

// task 17 Вывод таблицы умножения: Напиши цикл, который выводит таблицу умножения для числа 5:

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }

// Задачи для цикла while
// Сумма чисел до n: Напиши функцию, которая принимает число n и возвращает сумму всех чисел от 1 до n, используя цикл while.

// function sumNum(n) {
//   let total = 0;
//   let i = 1;
//   while (total <= n) {
//     total += i;
//     i++;
//   }

//   return total;
// }

// console.log(sumNum(2));

// Нахождение минимального числа: Напиши цикл while, который находит минимальное число больше 100, которое делится на 7.
// let num = 100;

// while (num % 7 !== 0) {
//   num++;
// }

// console.log(num);
// Обратный отсчет: Используй цикл while, чтобы выводить числа от 10 до 1, затем выведи Старт!.

// const message = "Start";

// let i = 10;

// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// console.log("Start");

// Игра угадай число: Используй цикл while, чтобы попросить пользователя вводить числа до тех пор,
// пока он не угадает случайное число от 1 до 10 (сгенерируй число с помощью Math.random()).

// function guessNumberGame() {
//     const target = Math.floor(Math.random() * 10) + 1; // Генерируем число от 1 до 10
//     let guess = null;

//     while (guess !== target) {
//       guess = parseInt(prompt("Угадай число от 1 до 10: "), 10); // Запрашиваем число у пользователя

//       if (guess < target) {
//         console.log("Больше!");
//       } else if (guess > target) {
//         console.log("Меньше!");
//       } else {
//         console.log("Правильно!");
//       }
//     }
//   }

//   guessNumberGame();

// function calculateTotal(number) {
//   let total = 0;
//   let i = 1;

//   for (let i = 1; i <= number; i += 1) {
//     i += 1;
//     total++;
//     console.log(total);
//   }
// }

// console.log(calculateTotal(7));

// ===============================================

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   let totalPrice = quantity * pricePerDroid;

//   if (totalPrice > customerCredits) {
//     return "Insufficient funds!";
//   } else {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   }
// }

// console.log(makeTransaction(10, 500, 5000));
// console.log(makeTransaction(8, 2000, 10000));

// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     return message.slice(0, maxLength) + "...";
//   }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));

// function checkForSpam(message) {
//   const spamCheck = "spam";
//   const saleCheck = "sale";

//   if (
//     message.toLowerCase().includes(spamCheck) ||
//     message.toLowerCase().includes(saleCheck)
//   ) {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

// function getShippingCost(country) {
//   switch (country) {
//     case "China":
//       return "Shipping to China will cost 120 credits";

//     case "Chile":
//       return "Shipping to Chile will cost 134 credits";

//     case "Australia":
//       return "Shipping to Australia will cost 341 credits";

//     case "Jamaica":
//       return "Shipping to Jamaica will cost 120 credits";

//     default:
//       return "Sorry, there is no delivery to your country";
//   }
// }

// console.log(getShippingCost("China"));
// console.log(getShippingCost("Sweden"));

// Физз-Базз
// Напиши функцию, которая принимает число n и выводит в консоль числа от 1 до n. При этом:

// Если число делится на 3, выведи "Fizz".
// Если число делится на 5, выведи "Buzz".
// Если число делится и на 3, и на 5, выведи "FizzBuzz".
// В остальных случаях выведи само число.

// function checkNum(n) {
//   for (let i = 1; i <= n; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// checkNum(20);

// Напиши функцию, которая принимает строку и возвращает true, если строка является палиндромом
// (читается одинаково слева направо и справа налево), и false в противном случае.

// function isPalindrome(str) {
//   // Убираем пробелы и приводим строку к нижнему регистру
//   const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   let reversedStr = "";

//   // Создаём перевёрнутую строку
//   for (let i = cleanedStr.length - 1; i >= 0; i--) {
//     reversedStr += cleanedStr[i];
//   }

//   // Сравниваем оригинал и перевёрнутую строку
//   return cleanedStr === reversedStr;
// }

// console.log(isPalindrome("cat")); // false
// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("A man a plan a canal Panama")); // true

// Напиши функцию, которая принимает два числа start и end и возвращает сумму всех чисел в этом диапазоне включительно.

// function sumRange(start, end) {
//   let total = 0;

//   for (let i = start; i <= end; i++) {
//     total += i;
//   }

//   return total;
// }

// console.log(sumRange(1, 5));
// console.log(sumRange(3, 7));

// Напиши функцию, которая принимает два числа start и end и выводит в консоль все чётные числа в этом диапазоне включительно.

// function logEvenNumbers(start, end) {
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       console.log(i++);
//     }
//   }
//   return;
// }
// console.log(logEvenNumbers(3, 10));
// console.log(logEvenNumbers(4, 4));
// console.log(logEvenNumbers(5, 5));

// Напиши функцию, которая принимает число n и возвращает его факториал. Факториал числа исла
// n — это произведение всех чисел от 1 до n.

// function factorial(n) {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }

//   return result;
// }

// console.log(factorial(5));
