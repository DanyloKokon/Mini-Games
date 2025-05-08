const gameContainer = document.getElementById("6");

const cont = [{ id: 'game' }];
const item = cont.map((constt) => {
  return `<div id="${constt.id}"><div id="dino"></div><button id="startGame">Start Game</button></div>`;
});

gameContainer.insertAdjacentHTML('beforeend', item.join(''));

const dino = document.querySelector('#dino');
const game = document.querySelector('#game');
const startButton = document.querySelector('#startGame');
let isJumping = false;
let gameOver = false;
let gameStarted = false;

function createCactus() {
  if (!gameStarted || gameOver) return;

  const cactus = document.createElement('div');
  cactus.classList.add('cactus');
  cactus.style.left = '600px';
  game.appendChild(cactus);
  
  let move = setInterval(() => {
    const cactusLeft = parseInt(cactus.style.left);
    cactus.style.left = (cactusLeft - 5) + 'px';

    if (cactusLeft <= -20) cactus.remove();
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (
      dinoRect.left < cactusRect.right &&
      dinoRect.right > cactusRect.left &&
      dinoRect.bottom > cactusRect.top
    ) {
      clearInterval(move);
      gameOver = true;
      alert("Game over!");
    }
  }, 20);

  setTimeout(createCactus, Math.random() * 2000 + 1000);
}

startButton.addEventListener("click", () => {
  if (!gameStarted) {
    gameStarted = true;
    gameOver = false;
    startButton.style.display = "none";
    createCactus();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && !isJumping && gameStarted && !gameOver) {
    isJumping = true;
    let height = 0;
    const jumpUp = setInterval(() => {
      if (height >= 100) {
        clearInterval(jumpUp);
        const fallDown = setInterval(() => {
          if (height <= 0) {
            clearInterval(fallDown);
            isJumping = false;
          } else {
            height -= 5;
            dino.style.bottom = height + "px";
          }
        }, 20);
      } else {
        height += 5;
        dino.style.bottom = height + "px";
      }
    }, 20);
  }
});
