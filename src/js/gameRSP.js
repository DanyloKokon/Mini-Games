const gameContainer = document.getElementById('3')
const body = document.body;
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

const title = document.createElement('h1');
title.textContent = 'Камінь - ножиці - папір';
container.appendChild(title);

const choicesWrapper = document.createElement('div');
choicesWrapper.className = 'choices-wrapper';
container.appendChild(choicesWrapper);

const choicesDiv = document.createElement('div');
choicesDiv.className = 'choices';
choicesWrapper.appendChild(choicesDiv);

const choices = [
   { name: 'rock', img: 'rock.png', alt: 'Камінь' },
   { name: 'scissors', img: 'scissors.png', alt: 'Ножиці' },
   { name: 'paper', img: 'paper.png', alt: 'Папір' }
];

let compScore = 0;
let userScore = 0;

const resultText = document.createElement('p');
resultText.id = 'result';
resultText.textContent = 'Зробіть вибір';
container.appendChild(resultText);

choices.forEach(choice => {
   const btn = document.createElement('button');
   btn.className = 'choice';
   btn.dataset.choice = choice.name;

   const img = document.createElement('img');
   img.src = choice.img;
   img.alt = choice.alt;

   btn.appendChild(img);
   choicesDiv.appendChild(btn);

   btn.addEventListener('click', () => {
      const computerChoice = choices[Math.floor(Math.random() * 3)].name;
      playRound(choice.name, computerChoice);
   });
});

const compBtn = document.createElement('button');
compBtn.id = 'computerBtn';
compBtn.textContent = "Варіант комп'ютера";
container.appendChild(compBtn);
const scoreDiv = document.createElement('div');
scoreDiv.className = 'score-inline';
scoreDiv.innerHTML = `
   <p>Рахунок:</p>
   <div>Комп'ютер: <span id="computerScore">0</span></div>
   <div>Ви: <span id="playerScore">0</span></div>
`;
choicesWrapper.appendChild(scoreDiv);

const computerScoreSpan = scoreDiv.querySelector('#computerScore');
const playerScoreSpan = scoreDiv.querySelector('#playerScore');

function playRound(player, computer) {
   if (player === computer) {
      resultText.textContent = 'Нічия!';
   } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'scissors' && computer === 'paper') ||
      (player === 'paper' && computer === 'rock')
   ) {
      userScore++;
      resultText.textContent = 'Ви виграли раунд!';
   } else {
      compScore++;
      resultText.textContent = "Комп'ютер виграв раунд!";
   }

   computerScoreSpan.textContent = compScore;
   playerScoreSpan.textContent = userScore;
}