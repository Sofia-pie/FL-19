import { dictionary } from './dictionary.js';

let guessesRemaining = 6;
let rows=6;
let cols=5;
let currentWord = '';
let rightWord = dictionary[Math.floor(Math.random() * dictionary.length)];
console.log(rightWord);

function createBoard() {
  const gameBoard = document.getElementById('game-board');
  for (let i = 0; i < rows; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < cols; j++) {
      let square = document.createElement('input');
      square.setAttribute('type', 'text');
      square.maxLength = 1;
      square.classList.add('square');
      row.appendChild(square);
    }
    gameBoard.appendChild(row);
  }
}
createBoard();

let cell = document.getElementsByTagName('input');
for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener('focus', focusOnInput);
}
function focusOnInput() {
  let row = document.getElementsByClassName('row')[rows - guessesRemaining];
  for (let i = 0; i < cols-1; i++) {
    let el = row.children[i];
    el.addEventListener('keyup', function () {
      if (el.value.length === 1) {
        el.nextElementSibling.focus();
      }
    });
  }
}
let check = document.getElementById('check');
check.addEventListener('click', checkGuess);
let reset = document.getElementById('reset');
reset.addEventListener('click', resetGame);

function rowInput() {
  let row = document.getElementsByClassName('row')[rows - guessesRemaining];
  for (let i = 0; i < cols; i++) {
    let square = row.children[i];
    let letter = square.value.charAt(0);
    currentWord += letter;
  }
}

function checkGuess() {
  let row = document.getElementsByClassName('row')[rows - guessesRemaining];
  rowInput();
  if (currentWord.length !== cols) {
    alert('Not enought letters');
    currentWord = '';
    return;
  }
  if (!dictionary.includes(currentWord)) {
    alert('Word not in list!');
    currentWord = '';
    return;
  }

  let rightGuess = Array.from(rightWord);
  for (let i = 0; i < cols; i++) {
    let letterColor = '';
    let square = row.children[i];
    let letterIsAbsent =-1;
    let letterPosition = rightGuess.indexOf(currentWord[i]);
    if (letterPosition === letterIsAbsent) {
      letterColor = 'grey';
    } else {
      if (currentWord[i] === rightGuess[i]) {
        letterColor = 'green';
      } else {
        letterColor = 'yellow';
      }
      rightGuess[letterPosition] = '#';
    }

    square.style.backgroundColor = letterColor;
  }

  if (currentWord === rightWord) {
    alert('Congratulations! You won.');
    guessesRemaining = 0;
    return;
  } else {
    guessesRemaining -= 1;
    currentWord = '';
    if (guessesRemaining === 0) {
      alert('Game over.');
    }
  }
}

function resetGame() {
  window.location.reload();
}
