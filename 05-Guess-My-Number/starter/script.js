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

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        document.querySelector('.score').textContent = i;

        if (i > highScore) {
          highScore = i;
          document.querySelector('.highscore').textContent = i;
        }
      } else {
        document.querySelector('.message').textContent =
          guess > number ? '🐘 Too big!' : '🐭 Too low!';
        i -= 1;
      }
    }
    document.querySelector('.score').textContent = i;
    if (document.querySelector('.score').textContent == 0) {
      document.querySelector('.message').textContent = '💀 Game Over...';
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  i = 20;
  document.querySelector('.score').textContent = i;
  document.querySelector('body').style.backgroundColor = 'black';
  number = Math.round(Math.random() * 20);
});
