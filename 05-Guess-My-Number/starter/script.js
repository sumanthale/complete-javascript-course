'use strict';

let score = 20;
let highScore = 0;
let input = document.querySelector('.guess');
let theOne = getRandom();
let message = '🥳 Start guessing...';
let _message = document.querySelector('.message');
let _check = document.querySelector('.check');
let _score = document.querySelector('.score');
let _highscore = document.querySelector('.highscore');
let _again = document.querySelector('.again');

function setDefault() {
  message = '🔥🔥 Correct Number !';
  input.value = '';
  document.body.style.backgroundColor = '#60b347';
  _check.disabled = true;
}

_check.addEventListener('click', () => {
  let guess = parseInt(input.value);
  if (guess !== theOne) {
    score--;
    if (guess > theOne) {
      message = '📈 Too High!';
    } else if (guess < theOne) {
      message = '📉 Too Low!';
    } else if (isNaN(guess)) {
      message = '🥺 Guess a number!';
    }
  } else {
    if (highScore < score) {
      highScore = score;
    }
    setDefault();
  }
  updateUi();
  if (score <= 0) lose();
});

function updateUi() {
  _message.textContent = message;
  _highscore.textContent = highScore;
  _score.textContent = score;
  input.value = '';
}
_again.addEventListener('click', () => {
  _score.textContent = 20;
  score = 20;
  theOne = getRandom();
  document.body.style.backgroundColor = '#222';
  _message.textContent = '🥳 Start guessing...';
  _check.disabled = false;
});

function getRandom() {
  return Math.floor(Math.random() * 20) + 1;
}
function lose() {
  _score.textContent = '-';
  score = 20;
  theOne = getRandom();
  document.body.style.backgroundColor = '#e84545';
  _message.textContent = '😥 Sorry Out of Chances!';
  _check.disabled = true;
  setTimeout(() => _again.click(), 2000);
}
