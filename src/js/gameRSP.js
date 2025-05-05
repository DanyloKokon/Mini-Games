// const gameContainer = document.getElementById('3')
// const body = document.body;
// // const container = document.createElement('div');
// // container.className = 'container';
// // document.body.appendChild(container);

// //================================
// const cont = [
//    {
//       class: 'container',
//    }

// ]
// const item = cont.map((constt) => {
//    return `<div class="${constt.class}"></div>
//   <div class="container">
//     <h1>Камінь - ножиці - папір</h1>
//     <div class="choices-wrapper">
//       <div class="choices"><button class="choice" data-choice="rock"><img src="rock.png" alt="Камінь"></button><button
//           class="choice" data-choice="scissors"><img src="scissors.png" alt="Ножиці"></button><button class="choice"
//           data-choice="paper"><img src="paper.png" alt="Папір"></button></div>
//       <div class="score-inline">
//         <p>Рахунок:</p>
//         <div>Комп'ютер: <span id="computerScore">0</span></div>
//         <div>Ви: <span id="playerScore">0</span></div>
//       </div>
//     </div>
//     <p id="result">Зробіть вибір</p><button id="computerBtn">Варіант комп'ютера</button>
//   </div>`
// })

// gameContainer.insertAdjacentHTML('beforeend', item)
// const container = document.querySelector('.container');
// //==================================

// // const title = document.createElement('h1');
// // title.textContent = 'Камінь - ножиці - папір';
// // container.appendChild(title);
// const choicesWrapper = document.querySelector('.choices-wrapper');
// // const choicesWrapper = document.createElement('div');
// // choicesWrapper.className = 'choices-wrapper';
// // container.appendChild(choicesWrapper);

// // const choicesDiv = document.createElement('div');
// // choicesDiv.className = 'choices';
// // choicesWrapper.appendChild(choicesDiv);

// const choices = [
//    { name: 'rock', img: 'rock.png', alt: 'Камінь' },
//    { name: 'scissors', img: 'scissors.png', alt: 'Ножиці' },
//    { name: 'paper', img: 'paper.png', alt: 'Папір' }
// ];

// let compScore = 0;
// let userScore = 0;
// const resultText = document.querySelector('#result');
// // const resultText = document.createElement('p');
// // resultText.id = 'result';
// // resultText.textContent = 'Зробіть вибір';
// // container.appendChild(resultText);

// // choices.forEach(choiceL => {
// //    // const btn = document.createElement('button');
// //    // btn.className = 'choice';
// //    // btn.dataset.choice = choice.name;

// //    const btn = document.querySelectorAll('.choice');
// //    // btn.dataset.choices = choiceL.name;

// //    // const img = document.createElement('img');
// //    // img.src = choice.img;
// //    // img.alt = choice.alt;

// //    // btn.appendChild(img);
// //    // choicesDiv.appendChild(btn);

// //    btn.addEventListener('click', () => {
// //       const computerChoice = choices[Math.floor(Math.random() * 3)].name;
// //       playRound(choice.name, computerChoice);
// //    });
// // });
// const btn = document.createElement('button');
// const buttons = document.querySelectorAll('.choice');
// buttons.forEach(btn => {
//     const choiceName = btn.dataset.choice;
//     btn.addEventListener('click', () => {
//         const computerChoice = choices[Math.floor(Math.random() * 3)].name;
//         playRound(choiceName, computerChoice);
//     });
// });


// // const compBtn = document.createElement('button');
// // compBtn.id = 'computerBtn';
// // compBtn.textContent = "Варіант комп'ютера";
// // container.appendChild(compBtn);
// // const scoreDiv = document.createElement('div');
// // scoreDiv.className = 'score-inline';
// // scoreDiv.innerHTML = `
// //    <p>Рахунок:</p>
// //    <div>Комп'ютер: <span id="computerScore">0</span></div>
// //    <div>Ви: <span id="playerScore">0</span></div>
// // `;
// // choicesWrapper.appendChild(scoreDiv);



// function playRound(player, computer) {
//    const computerScoreSpan = document.querySelector('#computerScore');
//    const playerScoreSpan = document.querySelector('#playerScore');
//    if (player === computer) {
//       resultText.textContent = 'Нічия!';
//    } else if (
//       (player === 'rock' && computer === 'scissors') ||
//       (player === 'scissors' && computer === 'paper') ||
//       (player === 'paper' && computer === 'rock')
//    ) {
//       userScore++;
//       resultText.textContent = 'Ви виграли раунд!';
//    } else {
//       compScore++;
//       resultText.textContent = "Комп'ютер виграв раунд!";
//    }

//    computerScoreSpan.textContent = compScore;
//    playerScoreSpan.textContent = userScore;
// }



const gameContainer = document.getElementById('3'); 
const body = document.body;

// Define game structure
const cont = [
   {
      class: 'container',
   }
];

const item = cont.map((constt) => {
   return `<div class="${constt.class}">
    <h1>Камінь - ножиці - папір</h1>
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

// Insert game elements into container
gameContainer.insertAdjacentHTML('beforeend', item.join(''));
const container = document.querySelector('.container');

const choices = [
   { name: 'rock', img: 'rock.png', alt: 'Камінь' },
   { name: 'scissors', img: 'scissors.png', alt: 'Ножиці' },
   { name: 'paper', img: 'paper.png', alt: 'Папір' }
];

let compScore = 0;
let userScore = 0;
const resultText = document.querySelector('#result');

// Select all buttons correctly
document.querySelectorAll('.choice').forEach(btn => {
   btn.addEventListener('click', () => {
      const playerChoice = btn.dataset.choice;
      const computerChoice = choices[Math.floor(Math.random() * choices.length)].name;
      playRound(playerChoice, computerChoice);
   });
});

// Computer random choice button
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
