// Your code goes here

while (confirm('Do you want to  play a game?')) {
  let rangeMax = 8;
  let num = Math.floor(Math.random() * (rangeMax + 1));
  let moneyWon = 0;
  let prize = 100;
  moneyWon = game(num, prize, moneyWon, rangeMax);
  if (moneyWon !== 0) {
    const prizeIncrease = 2;
    const rangeIncrease = 4;
    while (
      confirm(
        `Congratulation, you won! Your prize is: ${moneyWon}$. Do you want to continue?`
      )
    ) {
      rangeMax += rangeIncrease;
      prize *= prizeIncrease;
      num = Math.floor(Math.random() * (rangeMax + 1));
      let money = game(num, prize, moneyWon, rangeMax);
      if (money === 0) {
        break;
      }
      moneyWon += money;
    }
  }
  alert(`Thank you for your participation. Your prize is: ${moneyWon}$`);
}
alert('You did not become a billionaire, but can');

function game(num, prize, moneyWon, rangeMax) {
  let attempts = 3;

  while (attempts !== 0) {
    let userGues = parseInt(
      prompt(
        `Chose a roulette pocket number from 0 to ${rangeMax}
       Attempts left: ${attempts}
       Total prize: ${moneyWon}
       Possible prize on current attempt: ${prize}$
      `
      ),
      10
    );
    if (userGues === num) {
      return prize;
    }
    attempts--;
    prize /= 2;
  }
  return 0;
}
