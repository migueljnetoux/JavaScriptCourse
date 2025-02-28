'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
//display movements
const display_movement = function (acc, sort = false) {
  containerMovements.innerHTML = ''; //clear container

  //sort movement array
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const mov_type = mov < 0 ? 'withdrawal' : 'deposit';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${mov_type}">${
      i + 1
    } ${mov_type} </div>
    <div class="movements__value">${mov.toFixed(2)} €</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//Calc Balance
const calc_balance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)} €`;
};

// calc display summary
const calc_display_summary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€ `;

  const expenses = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(expenses).toFixed(2)}€ `;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€ `;
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

  if (current_account?.pin === +inputLoginPin.value) {
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
  const transfer_amount = +inputTransferAmount.value;
  console.log(typeof transfer_amount);

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

  const amount = Math.floor(inputLoanAmount.value);

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
    +inputClosePin.value === current_account.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === current_account.username
    );
    console.log(index, current_account);

    //remove from account array
    accounts.splice(index, 1);

    //hide ui
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Login to get started';
  }
  inputClosePin.value = inputCloseUsername.value = '';
  inputClosePin.blur();
  console.log('close');
  console.log(accounts);
});

console.log(accounts);

/////////////////////////////////////////Sort Button/////////////////////////////////////////////////
let sorted = false;

btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  display_movement(current_account, !sorted);

  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// console.log(1 === 1.0);

// // parsing
// console.log(Number.parseInt('30px', 10 /* base 10 */));
// console.log(Number.parseInt('e30px'));

// // ^parse float
// console.log(Number.parseFloat('2.5px', 10));
// console.log(Number.parseInt('2.5px', 10));

// console.log(Number.isNaN(20));
// console.log(typeof 20);

// console.log(Number.isFinite(20));
// console.log(Number.isFinite(20 / 0));

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2)); //square root
// console.log(8 ** (1 / 3)); //cubic root

// console.log(Math.max(5, 18, 6, '50', 45));
// console.log(Math.min(5, 18, 6, '50', 45));

// console.log(
//   'area of a circle: ',
//   Math.PI * Number.parseInt('10px' /* radius */) ** 2
// );

// console.log(Math.ceil(Math.random() * 6));

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(randomInt(10, 20));

// Rounding integers

// console.log(20.25);
// console.log(Math.trunc(20.25));
// console.log('Round: ', Math.round(20.25));
// console.log('Ceil: ', Math.ceil(20.25));
// console.log('Floor: ', Math.floor(20.25));
// console.log('Floor: ', Math.floor(-20.25));

// console.log('Fixed 2 Decimals: ', (2.757).toFixed(2));

//remainder operator

console.log(5 % 2);
console.log(8 % 3);

const isEven = num => num % 2 == 0;

console.log(isEven(2));
console.log(isEven(3));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0,2,4,6,8
    if (i % 2 /* each 2 */ === 0) row.style.backgroundColor = 'orangered';
    // 0,3,6,9
    if (i % 3 /* each 3 */ === 0) row.style.backgroundColor = 'green';
  });
});
