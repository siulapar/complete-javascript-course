'use strict';

let number = Math.round(Math.random() * 20);
if (number === 0) number = 1;
// console.log(number);

let i = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (
    !document.querySelector('.message').textContent.includes('Correct Number')
  ) {
    if (!guess) {
      document.querySelector('.message').textContent = '⚠️ No number!';
    } else if (document.querySelector('.score').textContent != 0) {
      if (guess === number) {
        document.querySelector('.message').textContent =
          '🎉🎉🎉 Correct Number!';
        document.querySelector('.number').textContent = number;
        document.querySelector('.score').textContent = i;
        highScore = Number(document.querySelector('.highscore').textContent);
        if (!highScore) {
          document.querySelector('.highscore').textContent = i;
        } else {
          if (i > highScore) {
            document.querySelector('.highscore').textContent = i;
          }
        }
      } else if (guess > number) {
        document.querySelector('.message').textContent = '🐘 Too big!';
        i -= 1;
      } else {
        document.querySelector('.message').textContent = '🐭 Too small!';
        i -= 1;
      }
    }
    document.querySelector('.score').textContent = i;
    if (document.querySelector('.score').textContent == 0) {
      document.querySelector('.message').textContent = '💀 Game Over...';
      document.querySelector('.number').textContent = number;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  i = 20;
  number = Math.round(Math.random() * 20);
});
