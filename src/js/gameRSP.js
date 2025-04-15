const gameContainerEl = document.getElementById('3')
const title = document.createElement('h2');
title.innerText = 'Камінь - ножиці - папір';
document.body.appendChild(title);

const choices = ['stone', 'scissors', 'paper'];
choices.forEach(choice => {
    const  button = document.createElement('button');
    button.innerText = choice.charAt(0).toUpperCase() + choice.slice(1);
    button.onClick = () => play(choice);
    document.body.appendChild(button);
});