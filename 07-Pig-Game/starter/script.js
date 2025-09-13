'use strict';

const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

const player = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];

const diceEl = document.querySelector('.dice');

let active;
let isOver = false;

let playerScore = [0, 0];

let currentScore = 0;

const gameOver = function () {
  // console.log(playerScore[0], playerScore[1]);
  isOver = playerScore[0] > 99 || playerScore[1] > 99;
  if (isOver) {
    diceEl.classList.add('hidden');
    if (!player[active].classList.contains('player--winner')) {
      player[active].classList.add('player--winner');
    }
  }
  return isOver;
};

const switchPlayer = function () {
  active ? (active = 0) : (active = 1);
  console.log('Active', active);
  if (!gameOver()) {
    console.log('Activate Player.');
    player[0].classList.toggle('player--active');
    player[1].classList.toggle('player--active');
    current0.textContent = 0;
    current1.textContent = 0;
    currentScore = 0;
  }
};

const hold = function () {
  if (!gameOver()) {
    playerScore[active] += currentScore;
    // score[active].textContent = playerScore[active];
    document.querySelector(`#score--${active}`).textContent =
      playerScore[active];

    switchPlayer();
  }
};

const rollDice = function () {
  if (!gameOver()) {
    if (diceEl.classList.contains('hidden')) {
      diceEl.classList.remove('hidden');
    }
    let number = Math.floor(Math.random() * 6) + 1;
    console.log(number);
    diceEl.src = `dice-${number}.png`;
    if (number === 1) {
      switchPlayer();
    } else {
      currentScore += number;
      // current[active].textContent = currentScore;
      document.querySelector(`#current--${active}`).textContent = currentScore;
      if (currentScore + playerScore[active] > 99) {
        playerScore[active] += currentScore;
        document.querySelector(`#score--${active}`).textContent =
          playerScore[active];
        gameOver();
      }
    }
  }
};

const newGame = function () {
  console.log('New Game.');
  isOver = false;

  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;

  playerScore = [0, 0];

  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');

  diceEl.classList.add('hidden');

  current0.textContent = 0;
  current1.textContent = 0;
  currentScore = 0;

  let randNum = Math.floor(Math.random() * 2);
  active = randNum;
  player[randNum].classList.add('player--active');
  player[1 - randNum].classList.remove('player--active');
};

const KeyDown = function (e) {
  // console.log(e);
  if (e['key'] === 'r') {
    rollDice();
  }
  if (e['key'] === 'h') {
    hold();
  }
};

btnNewGame.addEventListener('click', newGame);
btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);
document.addEventListener('keypress', KeyDown);

newGame();
