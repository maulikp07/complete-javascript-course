'use strict';
const button = document.querySelector('.check');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = Number(document.querySelector('.highscore').innerHTML);
let score = Number(document.querySelector('.score').innerHTML);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

button.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('❌ Wrong Input ❌');
  } else if (guess === randomNumber) {
    displayMessage('🎉 Correct Guess 🎉');
    number.textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (highScore < score) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > randomNumber ? ' Too High! ⏫' : ' Too Low! ⏬');
    } else {
      displayMessage(' You Lost a Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  number.textContent = '?';
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  number.style.width = '15rem';
});
