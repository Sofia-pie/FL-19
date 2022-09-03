// Your code goes here
const num1 = parseInt(prompt('Enter first number:'), 10);
const num2 = parseInt(prompt('Enter second number:'), 10);
if (isNaN(num1) || isNaN(num2) || num1 >= num2) {
  alert('Invalid input data');
} else {
  let result = '';
  for (let i = num1 + 1; i < num2; i++) {
    result += i + ' ';
  }
  alert(result);
}
