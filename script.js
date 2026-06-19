const COLS = 30 
const ROWS = 15

let board = document.querySelector (".board")

let isClicked = false

let currentColor = 'black'
let red = document.querySelector('.red')
let orange = document.querySelector('.orange')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')
let purple = document.querySelector('.purple')

document.addEventListener('mouseup', function () {
    isClicked = false
})


for( let i = 0 ; i < COLS ; i++) {
    for( let j = 0; j < ROWS ; j++) {
        let cell = document.createElement('div')
        cell.classList.add('cell')
        board.appendChild(cell)
        cell.addEventListener('mousedown', function () {
         cell.style.backgroundColor = currentColor
         isClicked = true
        } )
    cell.addEventListener('mouseover', function () {
        if (isClicked){
        cell.style.backgroundColor = currentColor}

    })

    }
}



red.addEventListener('click', function () {
    currentColor = 'red'
})

orange.addEventListener('click', function () {
    currentColor = 'orange'
})

yellow.addEventListener('click', function () {
    currentColor = 'yellow'
})

green.addEventListener('click', function () {
    currentColor = 'green'
})

purple.addEventListener('click', function () {
    currentColor = 'purple'
})







