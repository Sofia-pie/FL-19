/* eslint-disable no-magic-numbers */
// #1
function extractCurrencyValue(param) {
  let n = param.replace(/\D/g, '');
  if (n.length >= 16) {
    return BigInt(n);
  }

  return parseInt(n);
}

console.log(extractCurrencyValue('120 USD')); // 120
console.log(extractCurrencyValue('1283948234720742 EUR')); // 1283948234720742n

// #2

let object = {
  name: 'Ann',
  age: 16,
  hobbies: undefined,
  degree: null,
  isChild: false,
  isTeen: true,
  isAdult: false,
};

function clearObject(obj) {
  for (let i in obj) {
    if (!obj[i]) {
      delete obj[i];
    }
  }
  return obj;
}

console.log(clearObject(object)); // { name: 'Ann', age: 16, isTeen: true }

// #3

function getUnique(param) {
  return Symbol(param);
}

console.log(getUnique('Test')); // Symbol('Test')

// #4

function countBetweenTwoDays(startDate, endDate) {
  let start = new Date(startDate);
  let end = new Date(endDate);
  let difference = end - start;
  let days = Math.floor(difference / (1000 * 3600 * 24));
  let weeks = Math.floor(difference / (1000 * 3600 * 24 * 7));
  let months = Math.floor(difference / (1000 * 3600 * 24 * 4));
  let res = `The difference between dates is: ${days} day(-s), ${weeks} week(-s), ${months} month(-s)`;
  return res;
}

console.log(countBetweenTwoDays('03/22/22', '05/25/22')); // The difference between dates is: 64 day(-s), 9 week(-s), 2 month(-s)

// #5

function filterArray(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
function filterArrayWithSet(arr) {
  return Array.from(new Set(arr));
}

console.log(filterArray([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(filterArrayWithSet([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
