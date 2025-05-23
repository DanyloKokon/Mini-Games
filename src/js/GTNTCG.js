import searchImg from '../images/Group104.svg';

const guessGameEl = document.getElementById('2');

const guessGameMarkup = `
  <div class="flexcenter">
    <div class="guess-container flexcenter">
      <input type="number" id="guessInput2" placeholder="Введіть число 1-10" class="guess-input2" />
      <button id="guessBtn2" class="guess-btn2" type="button">
        <svg><use href="${searchImg}"></use></svg>
      </button>
      <p id="guessResult2" class="guess-result2">...</p>
    </div>
  </div>
`;

guessGameEl.insertAdjacentHTML('beforeend', guessGameMarkup);

const secretNumber2 = Math.floor(Math.random() * 10) + 1;

document.getElementById('guessBtn2').addEventListener('click', () => {
  const inputEl = document.getElementById('guessInput2');
  const resultEl = document.getElementById('guessResult2');
  const guess = parseInt(inputEl.value);

  resultEl.className = 'guess-result2';

  if (isNaN(guess) || guess < 1 || guess > 10) {
    resultEl.textContent = 'Введіть число від 1 до 10!';
    resultEl.classList.add('red');
    return;
  }

  if (guess === secretNumber2) {
    resultEl.textContent = `Вітаю, ви вгадали число! (${secretNumber2})`;
    resultEl.classList.add('green');
  } else if (guess < secretNumber2) {
    resultEl.textContent = 'Загадане число більше.';
    resultEl.classList.add('orange');
  } else {
    resultEl.textContent = 'Загадане число менше.';
    resultEl.classList.add('orange');
  }
});
