
const gameContainer = document.getElementById('3'); 
const body = document.body;

const cont = [
   {
      class: 'container',
   }
];

const item = cont.map((constt) => {
   return `<div class="${constt.class}">
    <div class="choices-wrapper">
      <div class="choices">
        <button class="choice" data-choice="rock"><img src="rock.png" alt="Камінь"></button>
        <button class="choice" data-choice="scissors"><img src="scissors.png" alt="Ножиці"></button>
        <button class="choice" data-choice="paper"><img src="paper.png" alt="Папір"></button>
      </div>
      <div class="score-inline">
        <p>Рахунок:</p>
        <div>Комп'ютер: <span id="computerScore">0</span></div>
        <div>Ви: <span id="playerScore">0</span></div>
      </div>
    </div>
    <p id="result">Зробіть вибір</p>
    <button id="computerBtn">Варіант комп'ютера</button>
  </div>`;
});

gameContainer.insertAdjacentHTML('beforeend', item.join(''));
const container = document.querySelector('.container');

const choices = [
   { name: 'rock', img: 'rock.png', alt: 'Камінь' },
   { name: 'scissors', img: '', alt: 'Ножиці' },
   { name: 'paper', img: 'paper.png', alt: 'Папір' }
];

let compScore = 0;
let userScore = 0;
const resultText = document.querySelector('#result');

document.querySelectorAll('.choice').forEach(btn => {
   btn.addEventListener('click', () => {
      const playerChoice = btn.dataset.choice;
      const computerChoice = choices[Math.floor(Math.random() * choices.length)].name;
      playRound(playerChoice, computerChoice);
   });
});


document.querySelector('#computerBtn').addEventListener('click', () => {
   const computerChoice = choices[Math.floor(Math.random() * choices.length)].name;
   playRound(computerChoice, computerChoice);
});

function playRound(player, computer) {
   const computerScoreSpan = document.querySelector('#computerScore');
   const playerScoreSpan = document.querySelector('#playerScore');

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
