'use strict';
// //default parameters
// const bookings = [];
// const create_booking = function (
//   flight_number,
//   n_passengers = 1,
//   price = 500 * n_passengers
// ) {
//   const booking = {
//     flight_number,
//     n_passengers,
//     price,
//   };
//   console.log(booking);

//   bookings.push(booking);
// };

// create_booking('LH123');
// create_booking('TP099', 2, 300);
// create_booking('TP099', 2);
// create_booking('TP099', undefined);
// // console.log(bookings);

// Passing Arguments : Value vs Reference

// let flight = 'LH123';
// const jonas = {
//   name: 'Jonas',
//   passport: 321789654,
// };
// //passing a primitive type === passing a copy
// //passing a object type === passing the object
// const check_In = function (flight_num, passenger) {
//   flight_num = 'LH199';
//   passenger.name = 'Mr.' + passenger.name;

//   //   passenger.passport === 321789654
//   //     ? alert('Checked in')
//   //     : alert('Wrong passport');
// };

// // check_In(flight, jonas);

// // console.log(flight);
// // console.log(jonas);

// const new_passport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// new_passport(jonas);
// check_In(flight, jonas);

//higher order functions

// const one_word = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upper_first_word = function (str) {
//   const [first, ...rest] = str.split(' ');
//   return [first.toUpperCase(), ...rest].join(' ');
// };

// // HIGHER ORDER FUNCTION

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);

//   console.log(`-`.repeat(10));
// };

// transformer('python is really fun', upper_first_word /* callback function */);
// transformer('python is really fun', one_word /* callback function */);

// const high_five = function () {
//   console.log('hi');
// };

// document.body.addEventListener('click', high_five);

// returning functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(greeting, name);
//   };
// };

// const greeter_hey = greet('hey');

// greeter_hey('Miguel');
// greet('HEY')('Joao');

// const greet = greeting => name => console.log(greeting, name);

// greet('hello')('Isabella');

//call and apply

// const book = function (flight_num, passenger_name) {
//   console.log(
//     `${passenger_name} booked a seat on ${this.airline} flight ${this.iata_code}${flight_num}`
//   );
//   this.bookings.push({
//     flight: `${this.iata_code}${flight_num}`,
//     passenger_name,
//   });
// };

// const lufthansa = {
//   airline: 'Lufthansa',
//   iata_code: 'LH',
//   bookings: [],
//   book,
// };

// const eurowings = {
//   airline: 'Eurowings',
//   iata_code: 'EW',
//   bookings: [],
//   book,
// };

// const tap = {
//   airline: 'Tap Portugal',
//   iata_code: 'TP',
//   bookings: [],
//   book,
// };

// book.call(/* keuword */ eurowings, 123, 'Miguel Neto'); //call function THIS POINTS TO OBJECT
// book.call(/* keuword */ lufthansa, 123, 'Miguel Neto'); //call function
// book.call(/* keuword */ tap, 123, 'Miguel Neto'); //call function

// // apply method takes an array
// const flight_data = [583, 'Isabella Rocha'];
// book.apply(tap, flight_data);

// //call method takes items
// book.call(tap, ...flight_data);

// // bind method
// // creates new function binded to object // changes the THIS keywaord
// const book_ew = book.bind(eurowings);
// const book_lh = book.bind(eurowings);
// const book_tp = book.bind(eurowings);
// book_ew(333, 'Joao Neto');

// /* bind more than one parameter */
// const book_ew_23 = book.bind(eurowings, 12345);
// book_ew_23('Jorge');

// console.log(eurowings.bookings);
// console.log(lufthansa.bookings);
// console.log(tap.bookings);

// lufthansa.planes = 300;
// lufthansa.buy_plane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buy_plane.bind(lufthansa)); //have to define THIS keyword to the object

// //Partial application

// const add_tax = (rate, value) => value + value * rate;

// console.log(add_tax(0.1, 100));

// const add_vat = add_tax.bind(
//   null /* define THIS keyword */,
//   0.24 /* define first parameter */
// );

// console.log(add_vat(100));

// const new_tax = function (value) {
//   return function (rate) {
//     return value + value * rate;
//   };
// };

// const object = new_tax(200);
// console.log(object(0.24));

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?


GOOD LUCK 😀
*/
// exercise 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question} \n ${this.options.join('\n')} `)
    );
    answer < this.answers.length
      ? this.answers[answer]++
      : console.log('Invalid Answer');

    this.display_results();
    this.display_results('string');
  },

  display_results(type = 'array') {
    if (type == 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are  ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const array = [5, 2, 3];
poll.display_results.call({ answers: [5, 2, 3] }, 'string');
