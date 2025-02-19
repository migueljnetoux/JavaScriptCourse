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

let flight = 'LH123';
const jonas = {
  name: 'Jonas',
  passport: 321789654,
};
//passing a primitive type === passing a copy
//passing a object type === passing the object
const check_In = function (flight_num, passenger) {
  flight_num = 'LH199';
  passenger.name = 'Mr.' + passenger.name;

  //   passenger.passport === 321789654
  //     ? alert('Checked in')
  //     : alert('Wrong passport');
};

// check_In(flight, jonas);

// console.log(flight);
// console.log(jonas);

const new_passport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

new_passport(jonas);
check_In(flight, jonas);
