// EXAMPLE 1 - Check if an Array contains only Numbers in JavaScript

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 'three'];
const arr3 = ['1', '2', '3'];

function onlyNumbers(array) {
  return array.every(element => {
    return typeof element === 'number';
  });
}

console.log(onlyNumbers(arr1)); // 👉️ true
console.log(onlyNumbers(arr2)); // 👉️ false
console.log(onlyNumbers(arr3)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if an array contains only numbers using a `for...of` loop

// function onlyNumbers(array) {
//   let containsOnlyNumbers = true;

//   for (const element of array) {
//     if (typeof element !== 'number') {
//       containsOnlyNumbers = false;
//       break;
//     }
//   }

//   return containsOnlyNumbers;
// }

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 'three'];
// const arr3 = ['1', '2', '3'];

// console.log(onlyNumbers(arr1)); // 👉️ true
// console.log(onlyNumbers(arr2)); // 👉️ false
// console.log(onlyNumbers(arr3)); // 👉️ false
