import searchImg from '../images/Group104.svg';
const yobcEL = document.getElementById("1")

// yobc.insertAdjacentHTML('beforeend', `<h2></h2>
// <div class="inp">
//   <input type="number" name="Year born" id="ybc">
//   <p class="p-answer"></p>
// </div>`)


const year = [
    {
        class: "inp flexcenter",

    },

];

const item = year.map((game) => {
    return `
        <div class="flexcenter">
        <div class="${game.class}">
        <input type="number" name="Year born" class="ybc" id="ybc" placeholder="Введіть рік народження" class="ybc">
        
        <button id="ybck" class="ybck" type="button"><svg><use href="${searchImg}"></use></svg></button>
        <p class="p-answer">...</p>
        </div> </div>`
});

// yobcEL.insertAdjacentHTML('beforeend', list)
yobcEL.insertAdjacentHTML('beforeend', item)


const btn = document.getElementById('ybck')


btn.addEventListener('click', () => {
    const outputEl = document.querySelector('.p-answer')
    const valueEl = document.getElementById('ybc').value;
    console.log(valueEl % 4 === 0 && valueEl % 100 !== 0 || valueEl % 400 === 0);
    if ((valueEl % 4 === 0 && valueEl % 100 !== 0) || (valueEl % 400 === 0)) {
        outputEl.classList.add("green");
        outputEl.classList.remove("red");
        outputEl.textContent = "Ви народилися у високосний рік!"
        console.log('Ви народилися у високосний рік!');
    } else  {
        outputEl.classList.add('red');
        outputEl.classList.remove("green");
        outputEl.textContent = 'Ви народилися у звичайний рік!'

    }
})





