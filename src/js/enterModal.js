//const openM = document.querySelector('[data-action="open-modal"]');
const backdrop = document.querySelector('.js-backdrop');
const modal = document.querySelector('.modal');
const body = document.body
const closeM = document.querySelector('[data-action="close-modal"]')

function onBtnClick() {
    const inpVal = document.querySelector('#inpVal')
    if (inpVal.value != '') {
        document.body.classList.toggle('show-modal')
        const nameEl = document.querySelector("#name-output")
        const inpValEl = document.querySelector("#inpVal").value
        nameEl.textContent = inpValEl
    }
}


//openM.addEventListener('click', onBtnClick);
closeM.addEventListener('click', onBtnClick);
backdrop.addEventListener('click', (event) => {
    if (event.currentTarget === event.target) {
        onBtnClick()
    }
});
window.addEventListener('keydown', (event) => {
    //console.log(event.key);
    if (event.key === 'Escape' && document.body.classList.contains('show-modal')) {
        onBtnClick()
    }
});