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

//display movements
const display_movement = function (acc) {
  containerMovements.innerHTML = ''; //clear container
  acc.movements.forEach(function (mov, i) {
    const mov_type = mov < 0 ? 'withdrawal' : 'deposit';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${mov_type}">${
      i + 1
    } ${mov_type} </div>
    <div class="movements__value">${mov} €</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//Calc Balance
const calc_balance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

// calc display summary
const calc_display_summary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}€ `;

  const expenses = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(expenses)}€ `;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}€ `;
};

//computing usernames
const create_username = function (accs) {
  //accepts any account array
  accs.forEach(function (acc) {
    acc.username = acc.owner //takes the owner of each acc and creates an account element
      .toLowerCase()
      .split(' ')
      .map(n => n.charAt(0))
      .join('');
  });
};
create_username(accounts);

//UPDATE UI

const update_ui = function (acc) {
  calc_display_summary(acc);
  calc_balance(acc);
  display_movement(acc);
};

/////////////////////////////////////////Login/////////////////////////////////////////////////

let current_account;

btnLogin.addEventListener('click', function (event) {
  event.preventDefault();

  current_account = accounts.find(
    acc => acc.username === inputLoginUsername.value //check login username
  );

  console.log(current_account);

  if (current_account?.pin === Number(inputLoginPin.value)) {
    // display ui and welcome message
    labelWelcome.textContent = `Welcome back, ${
      current_account.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 1;
    //Clearinput fields
    inputLoginUsername.value = inputLoginPin.value = '';
    //Focus Off input
    inputLoginPin.blur();
    // display movements
    // display balance
    // display summary
    update_ui(current_account);
  }
});

/////////////////////////////////////////Transfer/////////////////////////////////////////////////

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(current_account);

  // transfer to object
  const transfer_recepient = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(transfer_recepient);

  //amount
  const transfer_amount = Number(inputTransferAmount.value);
  console.log(transfer_amount);

  //check if possible
  if (
    transfer_amount <= current_account.balance && //balance > transfer
    transfer_recepient && //receiver exists
    transfer_amount > 0 && //amount is positive
    transfer_recepient?.username !== current_account.username //receiver !== sender
  ) {
    //add movement to users
    current_account.movements.push(-transfer_amount);
    transfer_recepient.movements.push(transfer_amount);

    update_ui(current_account);

    console.log(transfer_recepient.movements);
  } else {
    console.log('Transfer is not possible');
  }

  inputTransferTo.value = inputTransferAmount.value = '';
  //Focus Off input
  inputTransferAmount.blur();
});

/////////////////////////////////////////Loan Button/////////////////////////////////////////////////

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();

  const amount = inputLoanAmount.value;

  if (
    amount > 0 &&
    current_account.movements.some(mov => mov >= amount * 0.1)
  ) {
    current_account.movements.push(amount);
    update_ui(current_account);
  } else {
    loan_aut: console.log('Loan was not authorized');
  }

  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

/////////////////////////////////////////Close Account/////////////////////////////////////////////////

btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  // console.log(current_account);

  //check input data
  if (
    inputCloseUsername.value === current_account.username &&
    Number(inputClosePin.value) === current_account.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === current_account.username
    );
    console.log(index, current_account);

    //remove from account array
    accounts.splice(index, 1);

    //hide ui
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
  inputClosePin.blur();
  console.log('close');
  console.log(accounts);
});

console.log(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

/////////////////////////////////////////////////

// Array Methods
//find method
// console.log(movements.find(mov => mov < 0));

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

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

// const check_dogs = function (dogs_julia, dogs_kate) {
//   const total_data = dogs_kate.concat(dogs_julia.slice(1, -2));
//   total_data.forEach(function (age, i, array) {
//     const string =
//       age < 3 ? 'still a puppy' : `an adult, and is ${age} years old`;

//     console.log(`Dog number ${i + 1} is ${string}     ${age}`);
//   });
// };

// // Julias
// const arr_julia = [3, 5, 2, 12, 7];
// // Kate
// const arr_kate = [4, 1, 15, 8, 3];

// check_dogs(arr_julia, arr_kate);

// console.log('-'.repeat(20));

// // Julias
// const arr_j = [9, 16, 6, 8, 3];
// // Kate
// const arr_k = [10, 5, 6, 1, 4];

// check_dogs(arr_j, arr_k);

// map method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euro_to_usd = 1.1;

// const mov_usd = movements.map(function (mov) {
//   return mov * euro_to_usd;
// });
// const mov_usd_arrow = movements.map(mov => mov * euro_to_usd);

// console.log(movements);
// console.log(mov_usd);
// console.log(mov_usd_arrow);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// const deposits_arrow = movements.filter(mov => mov > 0);

// console.log(deposits);
// console.log(deposits_arrow);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration nº ${i + 0}, accumulator equals to ${acc}`);
//   return acc + cur;
// }, 0 /* default value for accumulator */);
// console.log('total: ', balance);

// const max_value = movements.reduce(function (acc, cur) {
//   return (acc = cur > acc ? cur : acc);
// }, 0);

// console.log(max_value);

// exercise 2
// const dogs_year = [5, 2, 4, 1, 15, 8, 3];
// const puppy_year = [16, 6, 10, 5, 6, 1, 4];

// const human_years = function (dogs_years) {
//   return dogs_years
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, cur, i, arr) => {
//       return acc + cur / arr.length;
//     }, 0);
// };

// console.log(human_years(dogs_year));
// console.log(human_years(puppy_year));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// const euro_mov = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);

//     return mov * 1.1;
//   })
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(euro_mov);

//Find last find last index
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// const last_withdrawal = movements.findLast(mov => mov < 0);
// const last_withdrawal_index = movements.findLastIndex(mov => mov < 0);
// console.log(last_withdrawal);
// console.log(last_withdrawal_index);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// console.log(movements.includes(-130)); //iquality

// console.log(movements.some(mov => mov > 0)); //condition for any

// console.log(account4.movements.every(mov => mov > 0)); //consition for every

// //outer callback
// const is_deposit = mov => mov > 0;
// console.log(movements.some(is_deposit));
// console.log(movements.every(is_deposit));
// console.log(movements.filter(is_deposit));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arr_deep = [[[1, 2], 3], [4, 5, 6], 7, 8]; //flat onyle goes one level deep
// console.log(arr_deep.flat());
// console.log(arr_deep.flat(2)); //this goes 2 levels deep

// const account_movements = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(account_movements);

// //FLAT MAP
// const account_movements_flat = accounts
//   .flatMap(acc => acc.movements) //only goes down one level
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(account_movements_flat);

// exercise 4

// const breeds = [
//   {
//     breed: 'German Shepherd',
//     averageWeight: 32,
//     activities: ['fetch', 'swimming'],
//   },
//   {
//     breed: 'Dalmatian',
//     averageWeight: 24,
//     activities: ['running', 'fetch', 'agility'],
//   },
//   {
//     breed: 'Labrador',
//     averageWeight: 28,
//     activities: ['swimming', 'fetch'],
//   },
//   {
//     breed: 'Beagle',
//     averageWeight: 12,
//     activities: ['digging', 'fetch'],
//   },
//   {
//     breed: 'Husky',
//     averageWeight: 26,
//     activities: ['running', 'agility', 'swimming'],
//   },
//   {
//     breed: 'Bulldog',
//     averageWeight: 36,
//     activities: ['sleeping'],
//   },
//   {
//     breed: 'Poodle',
//     averageWeight: 18,
//     activities: ['agility', 'fetch'],
//   },
// ];
// // 4.1
// const husky_weight = breeds.find(
//   breed => breed.breed === 'Husky'
// ).averageWeight;
// console.log(husky_weight);

// // 4.2
// const dog_both_activities = breeds.find(breed =>
//   // breed.activities.includes('running') && breed.activities.includes('fetching')
//   breed.activities.includes('running', 'fetching')
// ).breed;

// console.log(dog_both_activities);

// // 4.3 and 4.4
// const all_activities = new Set(breeds.flatMap(breed => breed.activities));

// console.log(all_activities);

// // 4.5
// const swimming_adjacent = new Set(
//   breeds
//     .filter(breed => breed.activities.includes('swimming'))
//     .flatMap(breed => breed.activities)
//     .filter(act => act != 'swimming')
// );

// console.log(swimming_adjacent);

// // 4.6
// const average_weight_above_ten = breeds.every(
//   breed => breed.averageWeight > 10
// );
// console.log(average_weight_above_ten);

// // 4.7
// const any_active = breeds.some(breed => breed.activities.length >= 3);
// console.log(any_active);

// // bonus

// const fetch_weights = breeds
//   .filter(breed => breed.activities.includes('fetch'))
//   .map(breed => breed.averageWeight);

// const heaviest_fetch_weight = Math.max(...fetch_weights);
// console.log(heaviest_fetch_weight);

// console.log(
//   breeds.find(breed => breed.averageWeight == heaviest_fetch_weight).breed
// );
