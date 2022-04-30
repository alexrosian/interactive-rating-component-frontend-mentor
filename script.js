'use strict';
const submit = document.querySelector('.submit');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
let score = '';
let text = document.querySelector('.rating-selection');

submit.addEventListener('click', onClick);

one.addEventListener('click', onRateOne);
two.addEventListener('click', onRateTwo);
three.addEventListener('click', onRateThree);
four.addEventListener('click', onRateFour);
five.addEventListener('click', onRateFive);

function onClick() {
  ratingState.classList.add('hidden');
  thankYouState.classList.remove('hidden');
}

function onRateOne() {
  one.classList.add('clicked');
  two.classList.remove('clicked');
  three.classList.remove('clicked');
  four.classList.remove('clicked');
  five.classList.remove('clicked');
  score = 1;
  text.textContent += `${score} score out of 5`;
}
function onRateTwo() {
  two.classList.add('clicked');
  one.classList.remove('clicked');
  three.classList.remove('clicked');
  four.classList.remove('clicked');
  five.classList.remove('clicked');
  score = 2;
  console.log(score);
  text.textContent += `${score} score out of 5`;
}
function onRateThree() {
  three.classList.add('clicked');
  one.classList.remove('clicked');
  two.classList.remove('clicked');
  four.classList.remove('clicked');
  five.classList.remove('clicked');
  score = 3;
  console.log(score);
  text.textContent += `${score} score out of 5`;
}
function onRateFour() {
  four.classList.add('clicked');
  one.classList.remove('clicked');
  two.classList.remove('clicked');
  three.classList.remove('clicked');
  five.classList.remove('clicked');
  score = 4;
  console.log(score);
  text.textContent += `${score} score out of 5`;
}
function onRateFive() {
  five.classList.add('clicked');
  one.classList.remove('clicked');
  two.classList.remove('clicked');
  three.classList.remove('clicked');
  four.classList.remove('clicked');
  score = 5;
  console.log(score);
  text.textContent += `${score} score out of 5`;
}
