const nickname = document.getElementById('nickname');
const start = document.getElementById('start');
const clickButtton = document.getElementById('click-button');
const bestPlayer = document.getElementById('best-result');
const globalBest = document.getElementById('max-result');
const reset = document.getElementById('clear');
const resetGlobal = document.getElementById('clear-global-best');
let clicks = 0;
const time=5000;

start.addEventListener('click', () => {
  try {
    if (nickname.value === '') {
      throw new Error('Empty nickname');
    }

    clicks = 0;
    clickButtton.addEventListener('click', countClicks);
    setTimeout(gameEnd, time);
  } catch (error) {
    alert(error.message);
  }
});
bestPlayer.addEventListener('click', () => {
  alert(`Best result is: ${getBestForUser()}`);
});
globalBest.addEventListener('click', () => {
  let item = JSON.parse(localStorage.getItem('best'));
  alert(`The best result for the whole time is: ${item.count} by ${item.name}`);
});
reset.addEventListener('click', () => {
  sessionStorage.setItem('player', JSON.stringify(0));
  alert('The best result is cleared');
});
resetGlobal.addEventListener('click', () => {
  let obj = {
    name: null,
    count: 0
  };
  localStorage.setItem('best', JSON.stringify(obj));
  alert('The best result for the whole time is cleared');
});

function countClicks() {
  clicks += 1;
}

function gameEnd() {
  saveBestForUser();
  saveGlobalBest();
  alert(`You clicked ${clicks} times`);
}

function saveBestForUser() {
  if (sessionStorage.getItem('player') === null) {
    sessionStorage.setItem('player', JSON.stringify(clicks));
  } else {
    if (clicks > JSON.parse(sessionStorage.getItem('player'))) {
      sessionStorage.setItem('player', JSON.stringify(clicks));
    }
  }
}

function getBestForUser() {
  return JSON.parse(sessionStorage.getItem('player'));
}

function saveGlobalBest() {
  if (localStorage.getItem('best') === null) {
    let obj = {
      name: nickname.value,
      count: clicks
    };
    localStorage.setItem('best', JSON.stringify(obj));
  } else {
    let item = JSON.parse(localStorage.getItem('best'));
    if (item.count < clicks) {
      let obj = {
        name: nickname.value,
        count: clicks
      };
      localStorage.setItem('best', JSON.stringify(obj));
    }
  }
}
