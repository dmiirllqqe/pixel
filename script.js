const COLS = 30 
const ROWS = 15

let board = document.querySelector (".board")

let isClicked = false
let isFilled = false

let currentColor = '#000000'
let defaultColor = '#808080'
let red = document.querySelector('.red')
let orange = document.querySelector('.orange')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')
let purple = document.querySelector('.purple')
let gray = document.querySelector('.gray')
let colorInput = document.querySelector('.color-input')
let btnFill = document.querySelector('.btn-fill')
let saveBtn = document.querySelector(".btn-safe")

saveBtn.addEventListener("click" , safeboard)


btnFill.addEventListener("click" , function (){
    if (btnFill.classList.contains("fill-selected")) {
        btnFill.classList.remove("fill-selected");
        isFilled = false
    } else {
        btnFill.classList.add("fill-selected");
        isFilled = true
    }
})

colorInput.addEventListener("input" , function (e) {
    currentColor = e.target.value;
})

document.addEventListener('mouseup', function () {
    isClicked = false
})

let id = 0
for( let i = 0 ; i < COLS ; i++) {
    for( let j = 0; j < ROWS ; j++) {
        let cell = document.createElement('div')
        cell.classList.add('cell')
        cell.setAttribute("id" , id.toString())
        id += 1
        cell.style.backgroundColor = defaultColor
        board.appendChild(cell)
        cell.addEventListener('mousedown', function () {
            if (isFilled){
              anime ({
                targets: ".cell",
                backgroundColor: currentColor,
                easing: "easeInOutQuad",
                durration: 500,
                delay : anime.stagger(50, {grid : [COLS, ROWS], from : parseInt(cell.getAttribute("id"))})
            

            
              })
            } else {
                cell.style.backgroundColor = currentColor
         isClicked = true
            }
        
        } )
    cell.addEventListener('mouseover', function () {
        if (isClicked){
        cell.style.backgroundColor = currentColor}

    })

    }
}



red.addEventListener('click', function () {
    currentColor = '#ff0000'
})

orange.addEventListener('click', function () {
    currentColor = '#ffa500'
})

yellow.addEventListener('click', function () {
    currentColor = '#ffff00'
})

green.addEventListener('click', function () {
    currentColor = '#008000'
})

purple.addEventListener('click', function () {
    currentColor = '#800080'
})

gray.addEventListener('click', function () {
    currentColor = '#808080'
})

function safeboard() {
    let cells = document.querySelectorAll (".cell")
    let canvas = document.createElement("canvas")
    canvas.width = COLS * 20 
    canvas.height = ROWS * 20

    let ctx = canvas.getContext("2d");

    cells.forEach((cell , index) => {
        let row = Math.floor(index / COLS);
        let col = index % COLS;

        ctx.fillStyle = cell.style.backgroundColor;
        ctx.fillRect(col * 20 ,row * 20 , 20 , 20);
    
    });

    ctx.imageSmoothingEnabled = false;
    
    let link = document.createElement("a");
    link.download = "picture.png";
    link.href = canvas.toDataURL("image/png")
    link.click();

}





