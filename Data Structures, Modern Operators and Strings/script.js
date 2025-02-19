'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const airport_code = airport => airport.slice(0, 3).toUpperCase();
const status_check = function (string) {
  let type = string.replaceAll('_', ' ').trim();
  return type.includes('Delayed') ? 'X ' + type : type;
};

for (const flight of flights.split('+')) {
  const [status, from, to, hour] = flight.split(';');
  const output = `${status_check(status)} from ${airport_code(
    from
  )} to ${airport_code(to)} (${hour.replace(':', 'h')})`;
  // console.log(status);
  console.log(output.padStart(50));
}

// Data needed for first part of the section

const openingHours = {
  mon: {
    open: 4,
    close: 16,
  },
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, //24 hours open
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ adress, starterIndex, mainIndex, hourOfDelivery }) {
    console.log(
      `adress: ${adress}, starter: ${this.starterMenu[starterIndex]}, main: ${this.mainMenu[mainIndex]}, hours: ${hourOfDelivery}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Pasta will have ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(
      `The pizza will have ${mainIngredient} and ${otherIngredients}`
    );
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// String
/* 
console.log('a+nice+string'.split('+'));

console.log('Miguel Neto'.split(' '));

const [first_name, last_name] = 'Miguel Neto'.split(' ');
console.log(first_name, last_name);

const new_name = ['Mr', first_name, last_name.toUpperCase()].join(' ');
console.log(new_name);

const capitalize_name = function (name) {
  const name_array = name.split(' ').map(name => name.charAt(0).toUpperCase());
  console.log(name_array);
};

capitalize_name('miguel jose carvalho neto');

//padding

const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '+'));

const mask_card = function (number) {
  const string = number + '';
  const last_char = string.slice(-4);
  console.log('Masked Number: ', last_char.padStart(string.length, '*'));
};

mask_card(77771234);

//repeat method

const message_two = 'Bad Weather... All Departures Delayed... \n';
console.log(message_two.repeat(5));
 */
/* const airline = 'TAP Air Portugal';
const plane = 'A320';
const passenger = 'jOnAs';
console.log(airline.toUpperCase());

const passenger_correct =
  passenger.charAt(0).toUpperCase() + passenger.slice(1).toLowerCase();

console.log(passenger_correct);
 */

/* 

console.log(plane[0]);
console.log('B737'[0]);

console.log(airline.length);

console.log(airline.indexOf('P')); //index of
console.log(airline.lastIndexOf('P')); // last index of
console.log(airline.indexOf('TAP'));

console.log(airline.slice(4, 7)); //slice

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(1, -1));

const middle_seat_checker = function (seat_number) {
  const middle_seats = ['B', 'E'];
  const seat_letter = seat_number.slice(-1);
  console.log(seat_letter);

  return middle_seats.includes(seat_letter) ? true : false;
};

console.log(middle_seat_checker('1B'));
console.log(middle_seat_checker('1c'));
 */
// const array = [1, 2, 3, 4, 5, 5, 6];
// const array_unique = new Set(...array);
// console.log(array_unique);

//maps
//maps  iteration
/* 
const question = new Map([
  ['question', 'what is the best p lang in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 2],
  [true, 'Correct'],
  [false, 'Incorrect'],
]);

console.log(question);
//CONvert Object to Map

//console.log(Object.entries(openingHours));

const hours_map = new Map(Object.entries(openingHours));
//console.log(hours_map);

//Quiz APP
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(key, value);
}

const answer = Number(prompt('Answer: '));

console.log(question.get(answer === question.get('correct')));

//COnvert MAP to ARRAY

console.log([...question]);
 */
//FUNDAMENTALS
/* const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Porto, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest.get('name')); //retrieve from key
console.log(rest.get(true));

console.log('------------------ Time Exercise ------------------');

const time = 21;
console.log(time > rest.get('open') && time < rest.get('close'));

console.log(rest.has('name')); // has method
rest.delete(2); //delete method
console.log(rest.size); //size method

const arr = [1, 2]; //get arrays
rest.set(arr, 'test');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading'); //DOM
console.log(rest);
 */
/* 
//Sets

const italian_foods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexican_foods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

//sets operations
const common_foods = italian_foods.intersection(mexican_foods); //intersection
console.log('intersection:', common_foods);

const italian_mexican_fusion = italian_foods.union(mexican_foods); //union
console.log('union:', italian_mexican_fusion);

const unique_italians = italian_foods.difference(mexican_foods); //difference
console.log('difference:', unique_italians);

const unique_mexicans = mexican_foods.difference(italian_foods); //difference
console.log('difference:', unique_mexicans);

const unique_italian_mexican_foods =
  italian_foods.symmetricDifference(mexican_foods); //symmetric difference
console.log('symmetric difference:', unique_italian_mexican_foods);

const evens = new Set([2, 4, 6, 8]);
const odds = new Set([1, 3, 5, 7, 9]);
console.log(evens, odds);
console.log('Disjoint:', evens.isDisjointFrom(odds));
 */
/* 
const order_set = new Set(['pizza', 'pasta', 'risotto', 'pasta']);
console.log(order_set);
console.log(order_set.size);
console.log(order_set.has('pasta')); // has
console.log(order_set.has('cane'));
order_set.add('IceCream');  //add
order_set.delete('risotto'); //delete
console.log(order_set);   //clear

for (const order of order_set) console.log(order);

console.log(new Set('Miguel Neto'));

const staff = ['waiter', 'waiter', 'waiter', 'chef', 'chef', 'subchef'];

const staff_unique = [...new Set(staff)]; //spread para array
console.log(staff_unique);

console.log(staff_unique.length);
 */
/* //Proprety NAMES
const propreties = Object.keys(openingHours);
//console.log(propreties);
let stringOpen = `Open on ${propreties.length} days : `;
for (const days of propreties) {
  stringOpen += `${days},`;
}

//console.log(stringOpen);

//Proprety Value
for (const days of propreties) {
  const [open, close] = Object.values(openingHours[days]);
  //console.log(open, close);
  console.log(`On ${days} we open at ${open} and close at ${close}`);
}

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(key, open, close);
}
 */
/* //optional chaning
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open); // .open only runs if ...? exists

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(open);
}

console.log(restaurant.order?.(0, 1) ?? 'Does not exist');
console.log(restaurant.orderFood?.(0, 1) ?? 'Does not exist');

const users = [{ name: 'Jonas', email: 'hello.io' }];

console.log(users[0]?.name ?? 'Not Defined');
 */
/*
//for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//element
for (const item of menu) console.log(item);

//element + indexOf element
for (const item of menu.entries()) console.log(item);

//desconstruir elemento
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
} */

/* const rest1 = {
  name: 'restauranteOne',
  numGuests: 0,
};

const rest2 = {
  name: 'restauranteTwo',
  owner: 'Mr. G',
};

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

rest1.numGuests ??= 10; //nulish coalescing operator
rest2.numGuests ??= 10; //nulish coalescing operator

rest2.owner &&= '*****';
console.log(rest1);
console.log(rest2);
 */
/* 
//Nulish Coalescing
restaurant.guests = 0;
const guests = restaurant.guests || 10;
console.log(guests);

const guestCorrect = restaurant.guests ?? 10;
console.log(guestCorrect);
 */

/* //Short Circuiting
const guests1 = restaurant.guests ? restaurant.guests : 11;
console.log(guests1);

restaurant.guests = 0;
const guests2 = restaurant.guests || 21;
console.log(guests2);

restaurant.orderPizza && restaurant.orderPizza('mush', 'a', 'b');
 */
/* const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays, sat);
 */
/* restaurant.orderPizza('a', 'b');

//SPREAD, RIGHT SIDE OF OPERATOR
const arr = [7, 8, ...[1, 2]];
console.log(arr);

//REST, LEFT SIDE OF OPERATOR
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

const [pizza, , risotto, ...restOfMenu] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(restOfMenu);

//REST OBJECTS


//REST FUNCTIONS
const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 2, 3);
add(1, 2, 3, 4, 5);

const x = [25, 30, 11];
add(...x);
 */
/* const ings = [prompt('ing 1'), prompt('ing 2'), prompt('ing 3')]; 
console.log(ings);
restaurant.orderPasta(...ings);*/

/* const newMenu = [...restaurant.mainMenu, 'fries'];
console.log(newMenu);
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
 */
/*  const { name, openingHours, categories } = restaurant;
console.log(openingHours);
restaurant.orderDelivery({
  adress: 'Rua DJoaoIV',
  hourOfDelivery: '22',
  starterIndex: 2,
  mainIndex: 2,
});

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
const { name: restaurantName, openingHours: hours } = restaurant;
console.log(restaurantName, hours);

//Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
/* 
let a = 111;
let b = 222;

const obj = { a: 23, b: 13, c: 55 };
({ a, b } = obj);
console.log(a, b); 

//Nested objects

const { open, close } = openingHours.fri;

const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);


const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mains] = restaurant.order(2, 0);
console.log(starter, mains);

//NESTED
const nested = [2, 4, [5, 6]];
 const [i, , j] = nested;
console.log(i, j); 

const [i, , [j, k]] = nested;
console.log(i, j, k);

// DEFAULT VALUES

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */

//Exercicio 1
/* 
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 7.33,
    x: 3.25,
    team2: 6.5,
  },
};
 */
/* //1.1
let players1 = game.players[0];
let players2 = game.players[1];
console.log(players1);
console.log(players2);

//1.2
const [gk, ...fieldplayers] = players1;
console.log(gk);
console.log(fieldplayers);

//1.3
let allPlayers = [...players1, ...players2];
console.log(allPlayers);

//1.4
let playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

//1.5
let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;
console.log(team1);
console.log(draw);
console.log(team2);

//1.6

function printGoals(...players) {
  console.log(players);
  console.log(players.length);
}

printGoals(...game.scored);

//1.7

team1 < team2 && console.log('team 1 wins');
team1 > team2 && console.log('team 2 wins');
 */

//exercicio 2

/* //2.1
for (const [goal, player] of game.scored.entries()) {
  console.log(`${goal + 1}`, player);
}

//2.2
let meanOdds;
let sumOdds = 0;
let numOdds = Object.keys(game.odds).length;

for (const odd of Object.values(game.odds)) {
  console.log(odd);
  sumOdds += odd;
}
meanOdds = sumOdds / numOdds;
console.log(meanOdds);
 */
//2.3
/* 
let team1 = game.team1;
let team2 = game.team2;
let counter = 1;
for (const [team, odd] of Object.entries(game.odds)) {
  //console.log(team, odd);

  let teamName = game[team];
  teamName = teamName || 'Draw';
  console.log(teamName, odd);
}
 */

//exercise 3
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/* 
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//3.1
let events = [...new Set(gameEvents.values())];
console.log(events);

//3.2
gameEvents.delete(64);
console.log(gameEvents);

//3.3

let default_value = 0;
let time_diff = 0;
let num_events = 0;
for (const time of [...gameEvents.keys()]) {
  time_diff += time - default_value;
  default_value = time;
  num_events++;
}

console.log(time_diff);
console.log(
  `An event happened, on average, every ${time_diff / num_events} minutes`
);

// 3.4

const game_half = new Map([
  [true, '[FIRST HALF]'],
  [false, '[SECOND HALF]'],
]);

for (const [time, event] of gameEvents) {
  // console.log(time, event);
  const half = time <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} Half], ${time}, ':', ${event}`);
}
 */
// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀
/* 
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, r] of rows.entries()) {
    const [first, ...sub] = r.toLowerCase().trim().split('_');
    let camelCasestring = first;

    for (const str of sub) {
      const string = str.replace(str[0], str[0].toUpperCase());
      camelCasestring += string;
    }
    console.log(`${camelCasestring.padEnd(25)}${'*'.repeat(i + 1)}`);
  }
});
 */
