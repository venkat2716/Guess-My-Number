'use strict';

console.log(document.querySelector('.message').textContent);


// document.querySelector('.number').textContent = 25;
// document.querySelector('.label-name').textContent = "High score is : ";

let secretNumber = Math.floor(Math.random() * 20)+1;
// document.querySelector('.number').textContent = secretNumber;
// console.log('Random number: '+secretNumber);
let score = 20;
let highScore = 0;
// console.log(document.querySelector('.guess').value);
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess, typeof guess);
   if(!guess) {
       displayMessage('⛔ No number!');
       // wins the game
   } else if(guess === secretNumber) {
       displayMessage('Correct Number!');
       document.querySelector('.number').textContent = secretNumber;
       document.querySelector('body').style.backgroundColor = '#60b347';
       document.querySelector('.number').style.width = '30rem';
       if(score > highScore) {
           highScore = score;
           document.querySelector('.highscore').textContent = score;
       }
   } else if(guess !== secretNumber) {
       if(score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!!' : 'Too Low!!';
        displayMessage(guess > secretNumber ? 'Too High!!' : 'Too Low!!');
        score--;
        document.querySelector('.score').textContent = score;
       } else {
        displayMessage('You lost the game!!!');
        document.querySelector('.score').textContent = 0;
       }
   } 
})

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20)+1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
});
