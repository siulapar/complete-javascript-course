'use strict';

const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

const player = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];

const score = [score0, score1];
const current = [current0, current1];

const dice = document.querySelector('.dice');

let active;
let player1Score = 0;
let player2Score = 0;

const playerScore = [player1Score, player2Score];

let currentScore = 0;

const hold = function () {
  playerScore[active] += currentScore;
  score[active].textContent = playerScore[active];
};

const rollDice = function () {
  let number = Math.floor(Math.random() * 6) + 1;
  console.log(number);
  dice.src = `dice-${number}.png`;
  currentScore += number;
  current[active].textContent = currentScore;
};

const newGame = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  player1Score = 0;
  player2Score = 0;

  let randNum = Math.floor(Math.random() * 2);
  active = randNum;
  for (let i = 0; i < player.length; i++) {
    i === active
      ? player[i].classList.add('player--active')
      : player[i].classList.remove('player--active');
  }
};

btnNewGame.addEventListener('click', newGame);
btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);

document.addEventListener('DOMContentLoaded', newGame);
