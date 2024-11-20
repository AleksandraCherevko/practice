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



// Обратный отсчет: Используй цикл while, чтобы выводить числа от 10 до 1, затем выведи Старт!.

// Игра угадай число: Используй цикл while, чтобы попросить пользователя вводить числа до тех пор, пока он не угадает случайное число от 1 до 10 (сгенерируй число с помощью Math.random()).
