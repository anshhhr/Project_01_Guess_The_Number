// 'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🍾 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;   // THis is DOM Manipulaton

// document.querySelector('.guess').value = 23;
// console.log( document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!'
    displayMessage('No number');
  }

  // When player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🍾 Correct Number!';
    displayMessage('🍾 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347'; // bcoz body is the element name so no dots

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! ';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//   //When guess is too high
//   else if (guess > secretNumber){
//     if (score>1) {
//       document.querySelector('.message').textContent = 'Too High';
//       score--;
//       document.querySelector('.score').textContent = score
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game! '
//       document.querySelector('.score').textContent = 0;
//     }
//     //When guess is too low
//   }else if (guess < secretNumber){
//     if (score>1) {
//     document.querySelector('.message').textContent = 'Too Low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else  {
//     document.querySelector('.message').textContent = 'You lost the game! '
//       document.querySelector('.score').textContent = 0;
//   }
// }

// if(score <= 0){
//     document.querySelector('.message').textContent = 'You Lose👎'
//   }
// }
// document.querySelector('.again').addEventListener('click',function(){
//   location.reload();
// })  //For using again and making its functionalit and reload

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
