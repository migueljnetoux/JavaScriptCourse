'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const display_movement = function (movements) {
  containerMovements.innerHTML = ''; //clear container
  movements.forEach(function (mov, i) {
    const mov_type = mov < 0 ? 'withdrawal' : 'deposit';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${mov_type}">${
      i + 1
    } ${mov_type} </div>
          <div class="movements__value">${mov}</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

display_movement(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Array Methods

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // slice
// console.log('slice: ', arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// console.log(arr.slice()); //shallow copy

// // splice MUTATES ARRAY
// arr.splice(2);
// console.log('splice: ', arr);

// // reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['f', 'g', 'h', 'i', 'j'];

// arr.reverse();
// console.log('reverse: ', arr);

// //concat
// const letter = arr.concat(arr2);
// console.log('concat: ', letter);
// console.log([...arr, ...arr2]);

// //join
// console.log('join: ', letter.join('-'));

// const arr = [23, 11, 64];

// //at position
// console.log(arr.at(0));

// //last element
// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

//for Each
//cant CONTINUE or BREAK

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [mov, value] of movements.entries()) {
//   mov < 0
//     ? console.log(mov + 1, 'Withdrew', Math.abs(value))
//     : console.log(mov + 1, 'Deposited ', value);
// }

// console.log('-'.padEnd(25, '-'), 'FOR EACH');

// movements.forEach(function (mov, index, array) {
//   mov < 0
//     ? console.log(index, 'Withdrew', Math.abs(mov))
//     : console.log(index, 'Deposited ', mov);
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// //for Each map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value} `);
// });

// // for Each set
// //so ha o parametro Value, sets nao aceitam keys ou indexs
// const currencies_unique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currencies_unique);
// currencies_unique.forEach(function (value, _, set) {
//   console.log(`${key}: ${value} `);
// });

// exercise 1

const check_dogs = function (dogs_julia, dogs_kate) {
  const total_data = dogs_kate.concat(dogs_julia.slice(1, -2));
  total_data.forEach(function (age, i, array) {
    const string =
      age < 3 ? 'still a puppy' : `an adult, and is ${age} years old`;

    console.log(`Dog number ${i + 1} is ${string}     ${age}`);
  });
};

// Julias
const arr_julia = [3, 5, 2, 12, 7];
// Kate
const arr_kate = [4, 1, 15, 8, 3];

check_dogs(arr_julia, arr_kate);

console.log('-'.repeat(20));

// Julias
const arr_j = [9, 16, 6, 8, 3];
// Kate
const arr_k = [10, 5, 6, 1, 4];

check_dogs(arr_j, arr_k);
