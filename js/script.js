//  =====================Модуль 3. Заняття 5. Обєкти =====================
// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:
//
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
// Код

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
//
// user.mood = 'happy';
// user['hobby'] = 'skydiving';
// user.premium = false;
//
// const userKeys = Object.keys(user);
// for (const userKey of userKeys) {
//     console.log(`${userKey}: ${user[userKey]}`)
// }

// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
//

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
//
// const salariesValues = Object.values(salaries);
// let sum = 0;
// for (const salary of salariesValues) {
//     sum += salary;
// }
//
// console.log(sum);

// Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
//

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];
//
// const stoneTotalPrice = calcTotalPrice(stones, 'Діамант');
// console.log(stoneTotalPrice);
//
// function calcTotalPrice (stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity
//         }
//     }
// }

// Домашня практика
// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
//
// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
//
// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */
//
const account = {
  //   // Поточний баланс рахунку
  balance: 0,
  //
  //   // Історія транзакцій
  transactions: [],
  //
  //   /*
  //    * Метод створює та повертає об'єкт транзакції.
  //    * Приймає суму та тип транзакції.
  // історія операцій
  createTransaction(amount, type) {
    return {
      amount,
      type,
      id: account.transactions.length,
    };
  },
  //
  //     //    * Метод, що відповідає за додавання суми до балансу.
  //    * Приймає суму транзакції.
  //    * Викликає createTransaction для створення об'єкта транзакції
  //    * після чого додає його до історії транзакцій
  // поповнення
  deposit(amount) {
    account.balance += amount;
    const transaction = account.createTransaction(amount, Transaction.DEPOSIT);
    account.transactions.push(transaction);
    // 1збільшити баланс
    // amount = 150
    // console.log((account.balance += amount));
    // 2створили обєкт операції=потрібно створити змінну яка викликає об'єкт транзакції та передає суму та тип операції
    // const transaction = account.createTransaction(amount, Transaction.DEPOSIT);
    // console.log(transaction);
    // 3добавили в масив=передаємо в історію операцій
    // account.transactions.push(transaction);
    // console.log(account.transactions);
  },
  //
  //   /*
  //    * Метод, що відповідає за зняття суми з балансу.
  //    * Приймає суму транзакції.
  //    * Викликає createTransaction для створення об'єкта транзакції
  //    * після чого додає його до історії транзакцій.
  //    *
  //    * Якщо amount більше ніж поточний баланс, виводь повідомлення
  //    * про те, що зняття такої суми не можливе, недостатньо коштів.
  //    */зняття
  withdraw(amount) {
    if (amount > account.balance) {
      return "Не вистачає коштів";
    }
    account.balance -= amount;
    const transaction = account.createTransaction(amount, Transaction.WITHDRAW);
    account.transactions.push(transaction);
  },
  //
  //   /*
  //    * Метод повертає поточний баланс
  //    */
  getBalance() {
    return account.balance;
  },
  //
  //   /*
  //    * Метод шукає та повертає об'єкт транзакції по id
  //    */ пошук елемента операції
  getTransactionDetails(id) {
    for (const transaction of account.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return "Операції не знайдено";
  },
  //
  //   /*
  //    * Метод повертає кількість коштів
  //    * певного типу транзакції з усієї історії транзакцій
  //    */ суму поповнення, або суму зняття по типу

  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of account.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

console.log(account.getBalance()); // 0
account.deposit(150); // 150
account.withdraw(50); // 150-50
console.log(account.getBalance()); // 100
console.log(account.transactions);
console.log(getTransactionDetails(1));
console.log(getTransactionTotal(Transaction.DEPOSIT));

//  ===================== Модуль 3. Заняття 6. Деструктуризація ============

// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
//

// function calcBMI ({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }
//
// // Було
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));
//
// // Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );

// На домашку (треба вирішити)
// Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
//
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }
//
// // Було
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );
//
// // Очікується
// console.log(
//   printContactsInfo({
//     names: "Jacob,William,Solomon,Artemis",
//     phones: "89001234567,89001112233,890055566377,890055566300",
//   })
// );

// Example 3 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
//
// function getBotReport(data) {
//     const {
//         companyName,
//         bots: {
//                 repair: repairBots,
//                 defence: defenceBots
//             }
//     } = data;
//
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }
//
// // Було
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));
//
// // Очікується
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"

// Example 4 - Деструктуризація
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.
//
// // Рішення
// function getStockReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }
//
// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"
//
// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"

// Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.
//
// // Рішення
// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }
//
// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );
//
// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }
// Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.
//
// // Рішення
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// }
//
// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );
//
// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );
