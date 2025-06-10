import searchImg from '../images/Group104.svg';

const timeCalcEl = document.getElementById('5');

const timeCalcMarkup = `
  <div class="flexcenter">
    <div class="timecalc-container flexcenter">
      <input type="number" id="timeInput" placeholder="Введіть число" class="timecalc-input" />
      <button id="timeBtn" class="timecalc-btn" type="button">
        <svg><use href="${searchImg}"></use></svg>
      </button>
      <p id="timeResult" class="timecalc-result">.......................</p>
      <p id="timeOutput" class="timecalc-output">0 дн. 00:00:00</p>
    </div>
  </div>
`;

timeCalcEl.insertAdjacentHTML('beforeend', timeCalcMarkup);

document.getElementById('timeBtn').addEventListener('click', () => {
  const input = document.getElementById('timeInput').value;
  const result = document.getElementById('timeOutput');
  const seconds = parseInt(input, 10);

  if (isNaN(seconds) || seconds < 0) {
    result.textContent = 'Введіть додатнє число!';
    result.classList.add('red');
    return;
  }

  const days = Math.floor(seconds / (24 * 3600));
  const hours = Math.floor((seconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;

  result.textContent = `${days} дн. ${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  result.classList.remove('red');
});
