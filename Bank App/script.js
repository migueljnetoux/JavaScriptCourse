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
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'premium',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'standard',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
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

/////////////////////////////////////////Exercises/////////////////////////////////////////////////
const grouped_account_type = Object.groupBy(accounts, ({ type }) => type);
console.log(grouped_account_type);

const total_deposits = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000)
  .reduce((acc, cur, i, array) => array.length, 0);

console.log(total_deposits);

const object_deposits = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      // cur > 0 ? (sum.deposits += cur) : (sum.withdrawals += cur);
      sum[cur > 0 ? 0 : 1] += cur;
      return sum;
    },
    [0, 0]
  );

console.log(object_deposits);

const title_case = function (string) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const title_cased_string = string
    .toLowerCase()
    .split(' ')
    .map(item => (exceptions.includes(item) ? item : capitalize(item)))
    .join(' ');

  return capitalize(title_cased_string);
};

console.log(
  title_case(
    'this is a nice title with SOME exceptions to words like "a" or "an"'
  )
);

console.log(title_case('an interesting title'));
