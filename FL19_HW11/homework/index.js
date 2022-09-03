/* eslint-disable no-magic-numbers */
function getWeekDay(dateObj) {
  if (typeof dateObj === 'number') {
    dateObj = new Date(dateObj);
  }
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const day = dateObj.getDay();
  return weekday[day];
}

function getAmountDaysToNewYear() {
  let today = new Date(Date.now());
  let newYear = today.getFullYear() + 1;
  const newYearDate = new Date(newYear, 0, 1);
  let dayMilliseconds = 1000 * 60 * 60 * 24;

  return Math.floor(
    (newYearDate.getTime() - today.getTime()) / dayMilliseconds
  );
}

function getApproveToPass(dateObj) {
  
  let monthDiff = Date.now() - dateObj.getTime();

  let ageDt = new Date(monthDiff);

  let year = ageDt.getUTCFullYear();

  let age = Math.abs(year - 1970);

  if (age < 18) {
    if (age >= 17) {
 return ` Hello adventurer, you are to yang for this quest wait for few more months`; 
} else {
      return ` Hello adventurer, you are to yang for this quest wait for ${
        18 - age
      } years more!`;
    }
  }
  return `Hello adventurer, you may pass!`;
}

function transformStringToHtml(str) {
  let myRegexp = /(tag=")(\w+)(")/gm;
  let match = myRegexp.exec(str);
  let tag = match[2];
  let el = str
    .replace(/(tag=")(\w+)(")/gm, '')
    .replace(/(\svalue=")/g, '>')
    .replace(/(")$/g, '</' + tag + '>')
    .replace(/({|})/g, '"');

  el = '<' + tag + el;
  return el;
}

// const elementP = 'tag="p" class="text" style={color: #aeaeae;} value="Aloha!"';
// console.log(transformStringToHtml(elementP));
function isValidIdentifier(str) {
  const rgx = /^([_$[a-zA-z]+\d?)$/g;
  return rgx.test(str);
}

// console.log(isValidIdentifier("myVar!"));
// console.log(isValidIdentifier("myVar$"));
// console.log(isValidIdentifier("myVar_1"));
// console.log(isValidIdentifier("1_myVar"));

function capitalize(str) {
  str = str.replace(/\b\w/g, function (c) {
    return c.toUpperCase();
  });
  return str;
}
// const testStr = "My name is John Smith. I am 27.";

// console.log(capitalize(testStr)); // "My Name Is John Smith. I Am 27."

function isValidPassword(str) {
  const rgx = /^(?=.*[0-9])(?=.*[a-z])(?=[A-Z])[a-zA-Z0-9][\W]*[^\s]{8,}$/g;
  return rgx.test(str);
}

// console.log(isValidPassword("agent007"));
// console.log(isValidPassword("AGENT007"));
// console.log(isValidPassword("AgentOOO"));
// console.log(isValidPassword("Age_007"));
// console.log(isValidPassword("Agent007"));

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([7, 5, 2, 4, 3, 9]));

function sortByItem(obj) {
  let item = obj.item;
  let arr = obj.array;
  arr = arr.sort(function (a, b) {
	if ( a[item] < b[item] ){
		return -1;
	}
	if ( a[item] > b[item] ){
		return 1;
	}
	return 0;
	});
  return arr;
}
// const inventory = [
//   { name: 'milk', brand: 'happyCow', price: 2.1 },
//   { name: 'chocolate', brand: 'milka', price: 3 },
//   { name: 'beer', brand: 'hineken', price: 2.2 },
//   { name: 'soda', brand: 'coca-cola', price: 1 }
// ];

// console.log(sortByItem({ item: 'name', array: inventory }));
