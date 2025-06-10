// const footballGame = document.getElementById("7");

// if (footballGame) {
//     footballGame.innerHTML = `
//         <style>
//         .football-game-7{
//             padding-left:400px;
//         }
//         canvas {
//             border: 2px solid #000000;
//             background: #228B22;
//             display: block;
//             border-radius: 37px;
//         }
//         </style>
//         <p>Футбол</p>
//         <div class="football-game-7">
//             <canvas id="gameCanvas" width="720" height="220"></canvas>
//         </div>
//     `;
// }
//     const gameField = footballGame.querySelector("#gameCanvas");
//     const gameContext = gameField.getContext("2d");

//     let football = {
//         x: gameField.width / 2,
//         y: gameField.height / 2,
//         radius: 20
//     };

//     const footballImage = new Image();
//     footballImage.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg'; // пример картинки мяча

//     gameField.addEventListener("mousemove", (event) => {
//         const fieldRect = gameField.getBoundingClientRect();
//         const mouseX = event.clientX - fieldRect.left;
//         const mouseY = event.clientY - fieldRect.top;

//         football.x = Math.min(Math.max(football.radius, mouseX), gameField.width - football.radius);
//         football.y = Math.min(Math.max(football.radius, mouseY), gameField.height - football.radius);
//     });

//     function drawFootballImage() {
//         gameContext.clearRect(0, 0, gameField.width, gameField.height);
//         gameContext.drawImage(
//             footballImage,
//             football.x - football.radius,
//             football.y - football.radius,
//             football.radius * 2,
//             football.radius * 2
//         );
//     }
//     function animateGame() {
//         drawFootballImage();
//         requestAnimationFrame(animateGame);
//     }
//     footballImage.onload = () => {
//         animateGame();
//     };
