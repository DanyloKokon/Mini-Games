const gameContainer = document.getElementById("6");

const game = document.createElement("div");
game.id = "game";
document.body.appendChild(game);

const dino = document.createElement("div");
dino.id = "dino";
game.appendChild(dino);

let isJumping = false;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && !isJumping) {
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