const styles = `
  .flexcenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .guess-wrap {
    margin-top: 10px;
  }

  .guess-input2 {
    padding: 10px 12px;
    border: none;
    border-radius: 20px 0 0 20px;
    background-color: #e0e0e0;
    font-size: 16px;
    outline: none;
  }

  .guess-btn2 {
    padding: 10px 16px;
    border: none;
    border-radius: 0 20px 20px 0;
    background-color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .guess-btn2 img {
    width: 16px;
    height: 16px;
  }

  .guess-result2 {
    margin-top: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
  }

  .green {
    color: green;
  }

  .orange {
    color: orange;
  }

  .red {
    color: red;
  }
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

// 2. Додаємо гру "Вгадай число" в елемент з id=2
const guessGameEl = document.getElementById("2");

const guessGameMarkup = `
  <div class="guess-wrap flexcenter">
    <input type="number" id="guessInput2" placeholder="Введіть число" class="guess-input2" />
    <button id="guessBtn2" class="guess-btn2">
      <img src="/src/images/search.png" alt="search" />
    </button>
  </div>
  <p id="guessResult2" class="guess-result2"></p>
`;

guessGameEl.insertAdjacentHTML("beforeend", guessGameMarkup);

// 3. Гра "Вгадай число"
const secretNumber2 = Math.floor(Math.random() * 100) + 1;

document.getElementById("guessBtn2").addEventListener("click", () => {
  const inputEl = document.getElementById("guessInput2");
  const resultEl = document.getElementById("guessResult2");
  const guess = parseInt(inputEl.value);

  resultEl.className = "guess-result2"; // Скидаємо попередні кольори

  if (isNaN(guess)) {
    resultEl.textContent = "Введіть коректне число!";
    resultEl.classList.add("red");
    return;
  }

  if (guess === secretNumber2) {
    resultEl.textContent = `Вітаю, ви вгадали число! (${secretNumber2})`;
    resultEl.classList.add("green");
  } else if (guess < secretNumber2) {
    resultEl.textContent = "Загадане число більше.";
    resultEl.classList.add("orange");
  } else {
    resultEl.textContent = "Загадане число менше.";
    resultEl.classList.add("orange");
  }
});
