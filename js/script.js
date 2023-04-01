//==================Модуль 4 - Заняття 7 - Коллбеки та стрілочні функції==============

// Example 1 - Коллбек функції
// Напишіть наступні функції:
//
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//     const newObj = {
//         ...obj,
//         id: Math.random()
//     }
//
//     callback(newObj);
// }
//
// function logProduct(product) {
//     console.log(product)
// }
//
// function logTotalPrice(product) {
//     // product - { name: 'Apple', price: 20, quantity: 5 }
//     console.log(product.price * product.quantity);
// }
//
// // createProduct({ name: 'Apple', price: 20, quantity: 5 }, logProduct)
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.
//
// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.
//
// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 2000;
//
// const account = {
//     balance: 700,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT || amount > account.balance) {
//             onError();
//             return;
//         }
//
//
//         account.balance -= amount;
//         onSuccess();
//     },
//
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT || amount <= 0) {
//             onError();
//             return;
//         }
//         account.balance += amount;
//         onSuccess();
//     },
//
//     getBalance () {
//         return account.balance;
//     }
// }
//
// function onSuccessWithdraw () {
//     console.log('Success withdraw!');
// }
//
// function onErrorWithdraw () {
//     console.log('Error occurs while withdraw money!');
// }
//
// function onSuccessDeposit () {
//     console.log('Success deposit!');
// }
//
// function onErrorDeposit () {
//     console.log('Error occurs while deposit some money!');
// }
//
// account.deposit(2500, onSuccessDeposit, onErrorDeposit);

// account.withdraw(200, onSuccessWithdraw, onErrorWithdraw);
// account.withdraw(200, onSuccessWithdraw, onErrorWithdraw);
// account.withdraw(200, onSuccessWithdraw, onErrorWithdraw);
// account.withdraw(200, onSuccessWithdraw, onErrorWithdraw);
// console.log(account.getBalance())

// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.
//
// // Рішення
// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }
//
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const createProduct = (partialProduct, callback) => {
//     const product = { id: Date.now(), ...partialProduct };
//     callback(product);
// }
//
// const logProduct = product => console.log(product);
//
// const logTotalPrice = product => console.log(product.price * product.quantity);
//
//
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Можна виконати самостійно
// Example 5 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.
//
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }
// рефакторинг
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = (message) => console.log(`✅ Success! ${message}`);

// const handleError = (message) => console.log(`❌ Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Example 6 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const each = (array, callback) => {
//     const newArr = [];
//     for (const el of array) {
//         newArr.push(callback(el));
//     }
//     return newArr;
// }
//
// console.log(
//     each([64, 49, 36, 25, 16], value => value * 2),
// );
//
// console.log(
//     each([64, 49, 36, 25, 16], value => value - 10),
// );

// Самостійне вирішення
// console.log(
//     each([64, 49, 36, 25, 16], value => {
//         return Math.sqrt(value);
//     }),
// );
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//         return Math.ceil(value);
//     }),
// );
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//         return Math.floor(value);
//     }),
// );

// Example 7 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
//
// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// рефакторинг
// const logItems = (items) => {
//   items.forEach((item, index) => console.log(`${index} - ${item}`));
// };

//  щоб починалося 1 - Mango
//  const logItems = (items) => {
//   items.forEach((item, index) => {
//     console.log(${index + 1} - ${item});
//   });
// };
// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// Example 8 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const printContactsInfo = ({ names, phones }) => {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');

//     // for (let i = 0; i < nameList.length; i += 1) {
//     //     console.log(`${nameList[i]}: ${phoneList[i]}`);
//     // }

//     nameList.forEach(function (element, index) {
//         console.log(`${element}: ${phoneList[index]}`);
//     })
// }

// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Example 9 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
//
// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// рефакторинг;
// const calсulateAverage = (...args) => {
//   let total = 0;
//   args.forEach((arg, index) => (total += args[index]));
//   return total / args.length;
// };

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

//==================Модуль 4 - Заняття 8 - Перебираючі методи масиву============
const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = carsData => carsData.map(car => car.model);
//
// console.table(getModels(cars));

// Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.
//
// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price < threshold);
//
// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
//
// const getCarsWithDiscount = (cars) =>
//   cars.filter(({ onSale }) => onSale === true);
//
// console.table(getCarsWithDiscount(cars));

// Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.
//
// const getCarsWithType = (cars, type) => cars.filter((car) => car.type === type);

// або: звертаємось безпосередньо до type, але так як параметр і ключ має однакове значення, то перейменовуємо на carType
// const getCarsWithType = (cars, type) =>
//   cars.filter(({ type: carType }) => carType === type);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, 'sedan'));

// Example 6 - Метод find

// const getCarByModel = (cars, model) => {
//     return cars.find(car => car.model === model)
// };
// або
// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

//
// const sortByAscendingAmount = cars => {
//     const newArray = [...cars];
//
//     return newArray.sort((a, b) => a.amount - b.amount)
// };

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

// Example 8 - Метод sort
// за спаданням b.amount - a.amount

// Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

//const sortByModel = (cars, order) => ;

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// за назвою моделі в алфавітному порядку
// const sortByModel = (cars) =>
//   [...cars].sort((a, b) => a.model.localeCompare(b.model));

// console.table(sortByModel(cars));

// в зворотному порядку (від я до а) b.model.localeCompare(a.model)

// Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = cars => {
//     return cars.reduce((previousValue, element) => {
//         return previousValue + element.amount
//     }, 0)
// };
//
// console.log(getTotalAmount(cars));

// Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getSortedCarsOnSale = [...cars]
//   .filter(({ onSale }) => onSale)
//   .sort((a, b) => a.price - b.price);
// console.table(getSortedCarsOnSale);

// Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
//
// const getSortedCarsOnSale = [...cars]
//   .filter(({ onSale }) => onSale === true)
//   .sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale);
