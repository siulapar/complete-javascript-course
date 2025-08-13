'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉🎉🎉 Correct Number!';

// document.querySelector('.number').textContent = 17;
// document.querySelector('.score').textContent = 88;

// document.querySelector('.guess').value = 28;
// console.log(document.querySelector('.guess').value);

const number = Math.round(Math.random() * 20);

console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (guess === number) {
    document.querySelector('.message').textContent = '🎉🎉🎉 Correct Number!';
  } else if (guess > number) {
    document.querySelector('.message').textContent = '🐘 Too big!';
  } else {
    document.querySelector('.message').textContent = '🐭 Too small!';
  }

  if (!guess) {
    document.querySelector('.message').textContent = '⚠️ No number!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
