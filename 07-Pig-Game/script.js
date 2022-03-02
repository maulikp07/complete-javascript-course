'use strict';
const rollButtton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newButton = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

let totalScorePlayer1 = document.getElementById('score--0');
let totalScorePlayer2 = document.getElementById('score--1');
let currentScorePlayer1 = document.getElementById('current--0');
let currentScorePlayer2 = document.getElementById('current--1');

let playing, scores, currentScore, activePlayer;
// Initial Conditions

const init = () => {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  dice.classList.add('hidden');
  totalScorePlayer1.textContent = 0;
  totalScorePlayer2.textContent = 0;
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;

  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player2.classList.remove('player--active');
  player1.classList.add('player--active');
};
init();
const changeActive = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

rollButtton.addEventListener('click', () => {
  //1. Generating Random Number for Dice
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    //2. Display the dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;

    //3. Check for rolled dice if 1: true, switch to next player
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changeActive();
    }
  }
});
holdButton.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 30) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      changeActive();
    }
  }
});

newButton.addEventListener('click', init);
