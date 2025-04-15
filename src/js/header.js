// const userNam = document.querySelector('.input-mod')
// const user = userNam.value
// gameContainerEl.insertAdjacentHTML('afterend', `Вітяємо, ${user}`)

// const usernam = document.querySelector('.user-name');
//   const nameOutput = document.getElementById('name-output');

//   nameInput.addEventListener('input', () => {
//     nameOutput.textContent = usernam.value.trim() || 'User';
//   });



document.querySelector('.burger-menu').addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'none' || navMenu.style.display === '' 
        ? 'block' 
        : 'none';
});

