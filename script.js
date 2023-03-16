'use strict';
function getRndInteger(min, max) {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
}

let num = getRndInteger(1, 20);

let score = 20;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (guess === num) {
    document.querySelector(`.message`).textContent = `Correct Number`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = num;

    if (document.querySelector(`.highscore`).textContent < score) {
      document.querySelector(`.highscore`).textContent = score;
    }
  } else if (!guess) {
    document.querySelector(`.message`).textContent = `No Number`;
  } else if (guess > num) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Your guess is higher`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost!!`;
    }
  } else if (guess < num) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Your guess is lower`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost!!`;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  score = 20;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  num = getRndInteger(1, 20);
});
