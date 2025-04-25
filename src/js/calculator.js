const calcEl = document.getElementById("4")
const clas = [
    {
        class: "calc flexcenter",

    },

];

const item = clas.map((game) => {
    return `<div class="${game.class}">
    <input type="number" name="inp" id="input1" placeholder="Введіть число" class="input1 input">
    <div class="type">
        <div class="part1">
            <button class="btn-calc" id="plusb"><p class="btn-col-p">+</p></button>
            <button class="btn-calc" id="multiplicationb"><p class="btn-col-p">*</p></button>
        </div>
        <div class="par2">
            <button class="btn-calc" id="minusb"><p class="btn-col-p">-</p></button>
            <button class="btn-calc" id="divisionb"><p class="btn-col-p">/</p></button>
        </div>
    </div>
    <input type="number" name="inp2" id="input2" placeholder="Введіть число" class="input2 input">
    <p class="jsfp">=</p>
    <p id='output' class='input inpp'>Результат</p>
    
</div>`
});

calcEl.insertAdjacentHTML('beforeend', item)
const outputEl = document.getElementById('output')
const input1El = document.getElementById('input1')
const input2El = document.getElementById('input2')
const plusbEl = document.getElementById('plusb')
const minusbEl = document.getElementById('minusb')
const multiplicationbEl = document.getElementById('multiplicationb')
const divisionbEl = document.getElementById('divisionb')
const calc = (a, b, operator) => {
        a = parseFloat(a);
        b = parseFloat(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return null;
    }
};
plusbEl.addEventListener('click', () => {
    outputEl.textContent = calc(input1El.value, input2El.value, '+')
})
minusbEl.addEventListener('click', () => {
    outputEl.textContent = calc(input1El.value, input2El.value, '-')
})
multiplicationbEl.addEventListener('click', () => {
    outputEl.textContent = calc(input1El.value, input2El.value, '*')
})
divisionbEl.addEventListener('click', () => {
    outputEl.textContent = calc(input1El.value, input2El.value, '/')
})
