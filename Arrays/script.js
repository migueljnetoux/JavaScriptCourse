"use strict";

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
//     breed: "German Shepherd",
//     averageWeight: 32,
//     activities: ["fetch", "swimming"],
//   },
//   {
//     breed: "Dalmatian",
//     averageWeight: 24,
//     activities: ["running", "fetch", "agility"],
//   },
//   {
//     breed: "Labrador",
//     averageWeight: 28,
//     activities: ["swimming", "fetch"],
//   },
//   {
//     breed: "Beagle",
//     averageWeight: 12,
//     activities: ["digging", "fetch"],
//   },
//   {
//     breed: "Husky",
//     averageWeight: 26,
//     activities: ["running", "agility", "swimming"],
//   },
//   {
//     breed: "Bulldog",
//     averageWeight: 36,
//     activities: ["sleeping"],
//   },
//   {
//     breed: "Poodle",
//     averageWeight: 18,
//     activities: ["agility", "fetch"],
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

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
//   { weight: 18, curFood: 244, owners: ["Joe"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// // exercise 5

// // 5.1
// dogs.forEach((dog) => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// // 5.2
// const sarah_dog = dogs.find((dog) => dog.owners.includes("Sarah"));
// console.log(sarah_dog);

// const sarah_dog_max = 1.1 * sarah_dog.recFood;
// const sarah_dog_min = 0.9 * sarah_dog.recFood;

// if (sarah_dog.curFood > sarah_dog_min && sarah_dog.curFood < sarah_dog_max)
//   console.log("okay");

// // 5.3
// // find dogs who eat too much and eat too little
// // grab names

// const too_much = dogs
//   .filter((dog) => dog.curFood > 1.1 * dog.recFood)
//   .flatMap((dog) => dog.owners);
// console.log(too_much);

// const too_little = dogs
//   .filter((dog) => dog.curFood < 0.9 * dog.recFood)
//   .flatMap((dog) => dog.owners);
// console.log(too_little);

// // 5.4

// const str_over = `${too_much.join(" and ")}"s eat too much`;
// console.log(str_over);

// // 5.5

// console.log(
//   dogs.some(
//     (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
//   )
// );
// // 5.6

// const okay_food = dogs.filter(
//   (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
// );

// console.log(okay_food);

// // 5.8

// const dogs_grouped = Object.groupBy(dogs, (dog) => {
//   if (dog.curFood === dog.recFood) return "exact";
//   if (dog.curFood < dog.recFood) return "too little";
//   if (dog.curFood > dog.recFood) return "too much";
// });

// console.log(dogs_grouped);

// // 5.9

// const dogs_grouped_owners = Object.groupBy(dogs, (dog) => {
//   return `${dog.owners.length}-owners`;
// });

// console.log(dogs_grouped_owners);

// // 5.10
// const sorted_rec = dogs.toSorted((a, b) => a.recFood - b.recFood);
// console.log(sorted_rec);

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners);

// console.log(owners.sort()); //mutates array
// console.log(owners);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// // A and B are the current and thevalue of the next index
// // keep order => return < 0 // A, B
// // reverse order => return > 0 // B, A

// //Ascending
// movements.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
// });
// console.log(movements);

// //Descending
// movements.sort((a, b) => b - a); //if b > a it returns a positive //reverses the order

// console.log(movements);

//array groupingclo

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);

// const grouped_movements = Object.groupBy(movements, (mov) =>
//   mov > 0 ? "deposits" : "withdrawals"
// );
// console.log(grouped_movements.deposits);

// const grouped_activity = Object.groupBy(movements, (mov) => {
//   if (mov >= 2000) return "big movement";
//   if (mov >= 1000) return "mid movement";
//   if (mov >= 0) return "small movement";
//   return "negative";
// });
// console.log(grouped_activity);

// const new_arr = new Array(7);
// console.log(new_arr);

// new_arr.fill(1, 3 /* start index */, 5 /* end index */);
// console.log(new_arr);

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //existing array
// arr.fill(99, 3, 5);
// console.log(arr);

// const array_from = Array.from(
//   { length: 7 },
//   (cur) => 1 /* mapping callback func */
// );
// console.log(array_from);

// // recreating [1,2,3,4,5,6,7]

// const array_ascending = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(array_ascending);

// const dice_roll = Array.from({ length: 100 }, () =>
//   Math.ceil(Math.random() * 6)
// );
// console.log(dice_roll);

// const movement_ui = Array.from(document.querySelectorAll(".movements_value"));
// console.log(movement_ui);
