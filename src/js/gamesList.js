const gameContainerEL = document.querySelector(".js-games")

const games = [
    {
        id: 1,
        name:'Перевір в який рік ти народився',
        class: "standart",

    },
    {
        id:2,
        name:'Name-2',
        class: "standart"
    },
    {
        id:3,
        name:'Name-3',
        class: "standart",
    },
    {
        id:4,
        name:'Калькулятор',
        class: "standart",
    }
]

const list = games.map((game) => {
    return `<li class="reset-li ${game.class}" id=${game.id}>
    <h2 class="flexcenter">${game.name}</h2>
    </li>
    <div class="flexcenter"><div class="line flexcenter"></div></div>`

})

gameContainerEL.insertAdjacentHTML('afterend', list)

