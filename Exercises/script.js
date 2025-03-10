// Integer Array

// test data = [1,2,3], [1,2,9], [9,9,9],

// iterar array no sentido inverso
// se menor que 9 em i => ++
// se = 9 em i => 0 e i-1++

// function incrementer(array) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] < 9) {
//       array[i] += 1;
//       return array;
//     } else {
//       array[i] = 0;
//     }
//   }
//   array.unshift(1);
//   return array;
// }

// console.log("[1, 2, 3] ", incrementer([1, 2, 3]));
// console.log("[1, 2, 9] ", incrementer([1, 2, 9]));
// console.log("[9, 9, 9] ", incrementer([9, 9, 9]));

// RNA transcription

// - G -> C
// - C -> G
// - T -> A
// - A -> U

// const dnaPairs = new Map([
//   ["G", "C"],
//   ["C", "G"],
//   ["T", "A"],
//   ["A", "U"],
// ]);

// function rnaTranscription(str) {
//   const dnaArray = typeof str === "string" ? str.split("") : str;
//   console.log(dnaArray);

//   const rndCode = dnaArray
//     .map((item) => item.toUpperCase())
//     .map((item) => dnaPairs.get(item));
//   console.log(rndCode);
// }

// rnaTranscription("gcta");
// rnaTranscription(["g", "c", "t", "a"]);

//Dog food

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
//   { weight: 18, curFood: 244, owners: ["Joe"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// // recommendedFood = weight ** 0.75 * 28

// // 1.1
// dogs.forEach((dog) => (dog.recFood = (dog.weight ** 0.75 * 28).toFixed(2)));
// console.log(dogs);

// // 1.2

// const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
// console.log(sarahDog);
// console.log(
//   `Sarah's dog eats too ${
//     sarahDog.curFood > sarahDog.recFood ? "much" : "little"
//   }`
// );

// // 1.3

// const ownersTooMuch = dogs
//   .filter((dog) => dog.curFood > dog.recFood)
//   .flatMap((dog) => dog.owners);
// console.log(ownersTooMuch);

// const ownersTooLittle = dogs
//   .filter((dog) => dog.curFood < dog.recFood)
//   .flatMap((dog) => dog.owners);
// console.log(ownersTooLittle);

// // 1.4

// console.log(`${ownersTooLittle.join(" and ")}´s dogs eat too little`);

// // 1.5

// console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// // 1.6

// const checkEatingOkay = (dog) =>
//   dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;
// console.log(dogs.every(checkEatingOkay));

// // 1.7
// const eatsOkay = dogs.filter(checkEatingOkay);
// console.log(eatsOkay);

// // 1.8

// const dogsGroupBy = Object.groupBy(dogs, function (dog) {
//   if (dog.curFood === dog.recFood) return "exact";
//   if (dog.curFood > dog.recFood) return "too much";
//   if (dog.curFood < dog.recFood) return "too little";
// });
// console.log(dogsGroupBy);

// // 1.9

// const dogsByOwners = Object.groupBy(
//   dogs,
//   (dog) => `${dog.owners.length} owners`
// );

// console.log(dogsByOwners);

// // 1.10

// const dogsSorted = dogs.toSorted((a, b) => a.recFood - b.recFood);

// console.log(dogsSorted);

// pangram

// function isPangram(string) {
//   const lettersSet = [...new Set(string.split(""))];
//   console.log(lettersSet.length);
//   console.log(lettersSet);
//   return lettersSet.length == 26;
// }

// console.log(isPangram("abacdefghijklmnopqrstuvwxyz"));

// Fibonacci

// function fibonacci(n) {
//   const fibArray = [0, 1];
//   for (let i = 1; i < n; i++) {
//     let first = fibArray[i - 1];
//     let second = fibArray[i];
//     let current = first + second;
//     fibArray.push(current);
//   }
//   return fibArray;
// }

// console.log(fibonacci(10));

// [0,1,1,2,3,5,8,13]

// Manual Array Methods

// teste data
// let array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];

// // Append
// array1 = [...array1, ...array2];
// console.log(array1);

// // filter

// const filterdList = [];
// for (let i = 0; i < array1.length; i++) {
//   if (array1[i] >= 5) filterdList.push(array1[i]);
// }

// console.log(filterdList);

// //

// nTh Prime

function nThPrime(n) {
  // gerar numeros primos
  let counter = 0;
  for (let i = 1; counter != n; i++) {
    let isPrime = true;
    for (let j = i - 1; j > 1; j--) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
      if (isPrime == true) {
        counter++;
        console.log(i);
      }
    }
  }
}
// counter++ ate counter == n

function nThPrime(n) {
  let primeList = [2];
  for (let i = 3; primeList.length < n; i++) {
    let isPrime = true;

    for (let j = i - 1; j > 1; j--) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    isPrime ? primeList.push(i) : false;
  }
  console.log(primeList);

  return primeList[n - 1];
}

console.log("4th ", nThPrime(4));
console.log("9th ", nThPrime(9));
console.log("6th ", nThPrime(6));
