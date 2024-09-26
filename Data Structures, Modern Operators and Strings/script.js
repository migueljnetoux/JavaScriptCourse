'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    adress,
    starterIndex,
    mainIndex,
    hourOfDelivery,
  }) {
    console.log(
      `adress: ${adress}, starter: ${this.starterMenu[starterIndex]}, main: ${this.mainMenu[mainIndex]}, hours: ${hourOfDelivery}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta will have ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(
      `The pizza will have ${mainIngredient} and ${otherIngredients}`
    );
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
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
