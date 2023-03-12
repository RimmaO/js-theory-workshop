// Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"
// const nameJavaScript = prompt("Яка офіційна назва JavaScript?");

// if (nameJavaScript === "ECMAScript") {
//   alert("Правильно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }
// console.log(nameJavaScript);

// Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.
// const hours = 14;
// const minutes = 26;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} г. ${minutes} хв.`;
// } else {
//   timestring = `${hours} г.`;
// }

// console.log(timestring);

// Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".
// const userInput = prompt("Введіть число");

// if (userInput > 0) {
//   alert("Це позитивне число");
// } else if (+userInput < 0) {
//   alert("Це негативне число");
// } else if (+userInput === 0) {
//   alert("Це нуль");
// } else {
//   alert("Це не число");
// }

// console.log(userInput);
// +userInput=Number(userInput)

// Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.
// const a = 120;
// const b = 180;
// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

// Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.
// let link = "https://my-site.com/about";
// let userLink;
// if (link.endsWith("/")) {
//   userLink = link;
// } else {
//   userLink = link + "/";
// }
// console.log(userLink);

// Example 6 - Форматування посилання (includes та логічне «І»)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.
// let link = "https://somesite.com/about";
// if (link.endsWith("/")) {
//   link = link;
// } else if (link.includes("my-site")) {
//   link += "/";
// } else {
//   link = link;
// }
// console.log(link);

// Example 7 - Форматування посилання (тернарний оператор)
// Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.
// let link = 'https://somesite.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);

// Задача 4
// const a = 190;
// const b = 180;
// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }
// рефакторинг коду задачі номер 4
// const a = 190;
// const b = 180;
// const result = a > 100 && b > 100 ? Math.max(a, b) : b + 512;
// console.log(result);

// Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.
// Якщо значення змінної hours:
// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"
// const hours = 10;
// let hoursStatus;
// if (hours < 17) {
//   hoursStatus = "Pending";
// } else if (hours >= 17 && hours <= 24) {
//   hoursStatus = "Expires";
// } else {
//   hoursStatus = "Overdue";
// }
// console.log(hoursStatus);

// Example 9 - Дедлайн здачі проекту (if...else)
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"
// const daysUntilDeadline = 5;
// let deadline;
// if (daysUntilDeadline === 0) {
//   deadline = "Сьогодні";
// } else if (daysUntilDeadline === 1) {
//   deadline = "Завтра";
// } else if (daysUntilDeadline === 2) {
//   deadline = "Післязавтра";
// } else {
//   deadline = "Дата у майбутньому";
// }
// console.log(deadline);

// Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.
// Задача 5 рефакторинг
// let link = "https://my-site.com/about/;ljhm/bnbmbk/";
// let userLink;
// switch (link) {
//   case link.endsWith("/"):
//     userLink = link;
//     break;

//   default:
//     userLink = link + "/";
// }
// console.log(userLink);
// Задача 9 рефакторинг
// const daysUntilDeadline = 2;
// let deadline;
// switch (daysUntilDeadline) {
//   case 0:
//     deadline = "Сьогодні";
//     break;
//   case 1:
//     deadline = "Завтра";
//     break;
//   case 2:
//     deadline = "Післязавтра";
//     break;
//   default:
//     deadline = "Дата у майбутньому";
// }
// console.log(deadline);

// Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.
// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.
// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:
// Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
// Інакше виводити рядок "Невірний пароль"

const password = "Я адмін";
let userPassword;
// do {
//   userPassword = prompt("Ввести пароль");
//   console.log(userPassword);
// } while (userPassword !== password);
// let text;
// let userInput;
// if (text === "Адмін") {
//   userInput = prompt("Ввести пароль");
// } else if ((text = "" || null)) {
//   userInput = prompt("Скасовано");
// } else {
//   userInput = prompt("Я вас не знаю");
// }
// console.log(userInput);
