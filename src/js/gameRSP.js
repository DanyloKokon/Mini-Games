const gameContainer = document.getElementById('3')
const body = document.body;
const container = document.createElement('div');
container.className = 'game-container';
const title = document.createElement('h2');
title.textContent = 'Камінь-Ножиці-Папір';
const choicesDiv = document.createElement('div');
choicesDiv.className = 'choices';
const gameRow = document.createElement('div');
function displayComputerChoice(choice) {
const pictures = {
   rock: 'STONE',
   paper: 'PAPER',
   scissors: 'SCISSORS'};

   computerChoiceButton.textContent = `Варіант комп’ютера: ${pictures[choice]}`;
}

const computerChoiceButton = document.createElement('button');
computerChoiceButton.className = 'choice computer-choice';
computerChoiceButton.textContent = "Комп'ютер вибір";
const choices = ['rock', 'paper', 'scissors'];
choices.forEach(choice => {
   const btn = document.createElement('button');
   btn.className = 'choice';
   btn.id = choice;
   choicesDiv.appendChild(btn);
});

const resultDiv = document.createElement('div');
resultDiv.id = 'result';

const scoreDiv = document.createElement('div');
scoreDiv.id = 'score';

const playerScoreP = document.createElement('p');
playerScoreP.innerHTML = 'Ваш рахунок: <span id="player-score">0</span>';

const computerScoreP = document.createElement('p');
computerScoreP.innerHTML = "Рахунок комп'ютера: <span id='computer-score'>0</span>";

scoreDiv.appendChild(playerScoreP);
scoreDiv.appendChild(computerScoreP);
gameRow.appendChild(computerChoiceButton);
gameRow.appendChild(choicesDiv);
gameRow.appendChild(scoreDiv);
container.appendChild(gameRow);
container.appendChild(title);
container.appendChild(choicesDiv);
container.appendChild(resultDiv);
container.appendChild(scoreDiv);
body.appendChild(container);


let playerScore = 0;
let computerScore = 0;
document.querySelectorAll('.choice').forEach(button => {
   button.addEventListener('click', () => {
      const playerChoice = button.id;
      const computerChoice = choices[Math.floor(Math.random() * 3)];
      const result = determineWinner(playerChoice, computerChoice);
      updateScore(result);
      displayResult(result, computerChoice);
   });
});
function determineWinner(player, computer) {
   if (player === computer) return 'draw';
   if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'scissors' && computer === 'paper') ||
      (player === 'paper' && computer === 'rock')
   ) {
      return 'win';
   }
   return 'lose';
}
function updateScore(result) {
   if (result === 'win') playerScore++;
   if (result === 'lose') computerScore++;
   document.getElementById('player-score').textContent = playerScore;
   document.getElementById('computer-score').textContent = computerScore;
}
function displayResult(result, computerChoice) {
   const resultText = {
     win: `Ви перемогли!`,
     lose: `Ви програли!`,
     draw: `Нічия!`
   };
 
   document.getElementById('result').textContent = resultText[result];
   displayComputerChoice(computerChoice);
 }

