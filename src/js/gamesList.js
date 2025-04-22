const gameContainer = document.querySelector(".js-games")

const games = [
    {
        id: 1,
        name:'Name-1'

    },
    {
        id:2,
        name:'Name-2'
    },
    {
        id:3,
        name:'Name-3'
    }
]

const list = games.map((game) => {
    return `<li id=${game.id}>
    <h2>${game.name}</h2>
    </li>`

})
gameContainer.insertAdjacentHTML('afterend', list)