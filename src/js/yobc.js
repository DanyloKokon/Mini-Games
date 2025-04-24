const yobcEL = document.getElementById("1")

// yobc.insertAdjacentHTML('beforeend', `<h2></h2>
// <div class="inp">
//   <input type="number" name="Year born" id="ybc">
//   <p class="p-answer"></p>
// </div>`)


const year = [
    {
        class: "inp",

    },

];

const item = year.map((game) => {
    return `<h2></h2>
        <div class="${game.class}">
        <input type="number" name="Year born" id="ybc" placeholder="Введіть рік народження" class="ybc">
        
        <button id="ybck" type="button">Button click</button>
        <p class="p-answer">...</p>
        </div>`
});

// yobcEL.insertAdjacentHTML('beforeend', list)
yobcEL.insertAdjacentHTML('beforeend', item)

const outputEl = document.querySelector('.p-answer')
const btn = document.getElementById('ybck')


btn.addEventListener('click', () => {
    const valueEl = document.getElementById('ybc').value;
    console.log(valueEl % 4 === 0 && valueEl % 100 !== 0 || valueEl % 400 === 0);
    if ((valueEl % 4 === 0 && valueEl % 100 !== 0) || (valueEl % 400 === 0)) {
        //inputEl.classList.add('green')
        outputEl.textContent = "Ви народилися у високосний рік!"
        console.log('Ви народилися у високосний рік!');
    } else  {
        //inputEl.classList.add('red')
        outputEl.textContent = 'Ви народилися у звичайний рік!'

    }
})





