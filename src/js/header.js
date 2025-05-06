const color = document.querySelector("#color-change");

color.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
   
})
