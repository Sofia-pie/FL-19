/* eslint-disable no-magic-numbers */

document.addEventListener('DOMContentLoaded', () => {
  let rows = 3;
  let cols = 3;
  let isGameActive = true;

  const displayPlayer = document.querySelector('.display-player');
  const gameBoard = document.querySelector('.container');
  const announcer = document.querySelector('.announcer');

  const dragables = document.querySelectorAll('.avatar-icon');
  const avatarContainers = document.querySelectorAll('.avatar-container');
  const iconsContainer = document.querySelector('.icons');
  const reset = document.getElementById('reset');

  const players = ['X', 'O'];
  let currentPlayer = players[0];

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function createBoard() {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let col = document.createElement('div');
        col.classList.add('tile');
        gameBoard.appendChild(col);
      }
    }
  }
  createBoard();

  const tiles = document.querySelectorAll('.tile');
  let currentElement = null;
  let index = document.activeElement.index;

  const active = (event) => {
    if (event.key === 'ArrowRight') {
      tiles.forEach((i) => {
        i.classList.remove('active');
      });
      index = 0;
      currentElement = tiles[index];
      currentElement.classList.add('active');
      currentElement.focus();
    }
  };

  document.addEventListener('click', () => {
    document.addEventListener('keydown', active, { once: true });
  });

  document.addEventListener('keydown', active, { once: true });

  tiles.forEach((i) => {
    i.tabIndex = 1;
    i.addEventListener('keydown', (event) => {
      const { key } = event;

      if (key === 'ArrowRight') {
        if (index >= 8) {
          index = 8;
        } else {
          index++;
          currentElement = tiles[index];
          tiles[index - 1].classList.remove('active');
          tiles[index].classList.add('active');
        }
      } else if (key === 'ArrowLeft') {
        if (index <= 0) {
          index = 0;
        } else {
          index--;
          currentElement = tiles[index];
          tiles[index + 1].classList.remove('active');
          tiles[index].classList.add('active');
        }
      }
    });
  });

  const customEvent = new CustomEvent('enterClick');
  gameBoard.tabIndex = 1;
  gameBoard.addEventListener('enterClick', () => {
    if (isGameActive) {
      turn(currentElement);
    }
  });

  gameBoard.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      gameBoard.dispatchEvent(customEvent);
    }
  });

  gameBoard.addEventListener('click', function (event) {
    let target = event.target;
    if (isGameActive) {
      turn(target);
    }
  });

  function turn(target) {
    target.innerText = currentPlayer;
    target.classList.add(`player${currentPlayer}`);
    checkWinner();
    currentPlayer =
      players[(players.indexOf(currentPlayer) + 1) % players.length];
    if (currentPlayer === 'O') {
      displayPlayer.classList.add(`playerO`);
    } else {
      displayPlayer.classList.remove(`playerO`);
    }
    displayPlayer.innerText = currentPlayer;
  }

  const announce = (type) => {
    switch (type) {
      case 'X':
        announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
        break;
      case 'O':
        announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
        break;
      case 'tie':
        announcer.innerText = 'Tie';
        break;
      default:
        break;
    }
    announcer.classList.remove('hide');
  };

  function checkWinner() {
    let board = Array.from(tiles).map((el) => el.innerText);
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      if (a === '' || b === '' || c === '') {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
    if (roundWon) {
      announce(currentPlayer);
      isGameActive = false;
      return;
    }
    if (!board.includes('')) {
      announce('tie');
    }
  }

  dragables.forEach((dragable) => {
    dragable.addEventListener('dragstart', () => {
      dragable.classList.add('dragging');
    });
  });

  dragables.forEach((dragable) => {
    dragable.addEventListener('dragend', () => {
      dragable.classList.remove('dragging');
    });
  });

  iconsContainer.addEventListener('dragover', () => {
    const dragable = document.querySelector('.dragging');
    iconsContainer.appendChild(dragable);
  });

  avatarContainers.forEach((container) => {
    container.addEventListener('dragover', (e) => {
      if (container.innerHTML.length === 0) {
        e.preventDefault();
        const dragable = document.querySelector('.dragging');
        container.appendChild(dragable);
      }
    });
  });

  reset.addEventListener('click', function () {
    announcer.classList.add('hide');
    isGameActive = true;
    currentPlayer = players[0];
    displayPlayer.classList.remove(`playerO`);
    displayPlayer.innerText = currentPlayer;

    tiles.forEach((el) => {
      el.innerText = '';
      el.classList.remove('playerX');
      el.classList.remove('playerO');
    });
  });
});
