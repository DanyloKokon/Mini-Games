const gameContainer = document.getElementById('3')
const title = document.createElement('h2');
title.textContent = 'Камінь - ножиці - папір';
document.body.appendChild(title);

const choices = ['Камінь', 'ножиці', 'папір'];
let playerScore = 0;
let computerScore = 0;

const btnContainer = document.createElement('div');
document.body.appendChild(btnContainer)

choices.forEach(choice => {
   const btn = document.createElement('button');
   btn.textContent = choice;
   btn.addEventListener('click', () => play(choice));
   btnContainer.appendChild(btn);
});

const result = document.createElement('div');
result.className = 'result';
document.body.appendChild(result);

const score = document.createElement('div');
score.className = 'score';
const computerScoreSpan = document.createElement('span');
const playerScoreSpan = document.createElement('span');
computerScoreSpan.id = 'computerScore';
playerScoreSpan.id = 'playerScore';
computerScoreSpan.textContent = '0';
playerScoreSpan.textContent = '0';
score.innerHTML = `Рахунок: <br> Комп'ютер: `;
score.appendChild(computerScoreSpan);
score.innerHTML += ' | Ви: ';
score.appendChild(playerScoreSpan);
document.body.appendChild(score);
// '''''''''''''Логикa''''''''''''''''''''''''
// function play(playerChoice) {
//     const computerChoice = choices
// }