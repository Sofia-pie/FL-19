// #1
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(calculateSum([1, 2, 3, 4, 5])); //15

// #2
function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  return a + b > c && b + c > a && c + a > b;
}

console.log(isTriangle(5, 6, 7)); //true
console.log(isTriangle(2, 9, 3)); //false

// #3
function isIsogram(word) {
  if (word === "") {
    return true;
  }
  word.toLowerCase();
  let arr = word.split("");
  let sortedArr = arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (sortedArr[i] == sortedArr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("abab")); //false

// #4
function isPalindrome(word) {
  let j = word.length - 1;
  for (let i = 0; i < j / 2; i++) {
    if (word[i] != word[j - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("Dermatoglyphics")); //false
console.log(isPalindrome("abbabba")); //true

// #5
function showFormattedDate(dateObj) {
  return `${dateObj.getDate()} of ${dateObj.toLocaleString("en-EN", {
    month: "long",
  })}, ${dateObj.getFullYear()}`;
}

console.log(showFormattedDate(new Date("05/12/22"))); //'12 of May, 2022'

// #6
const letterCount = (str, letter) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
};

console.log(letterCount("abbaba", "b")); //3

// #7
function countRepetitions(arr) {
  let countObj = arr.reduce(function (acc, item) {
    return acc[item] ? ++acc[item] : (acc[item] = 1), acc;
  }, {});
  return countObj;
}

console.log(countRepetitions(["banana", "apple", "banana"])); // { banana: 2, apple: 1 }

// #8
function calculateNumber(arr) {
  return parseInt(arr.join(""), 2);
}

console.log(calculateNumber([0, 1, 0, 1])); //5
console.log(calculateNumber([1, 0, 0, 1])); //9
