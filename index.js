let table = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
]
let currentPlayer = 'Jugador 1'
let whereX = 0
let whereY = 0
turno()
function turno(){
    whereX = window.prompt(`Introduce la coordenada X ${currentPlayer}`)
    whereY = window.prompt(`Introduce la coordenada Y ${currentPlayer}`)
    play(whereX, whereY)
}

function show(){
    console.log(table)
    turno()
}

function checkWinner(){
    for(let i = 0; i < table.length; i++){
        if (table[i][0] === table[i][1] && table[i][2] === table[i][0] && table[i][2] === table[i][1]){
            return `The ${currentPlayer} wins`
        } else if (table[0][i] === table[1][i] && table[0][i] === table [2][i] && table[2][i] === table[1][i]){
            return `The ${currentPlayer} wins`
        } else if (table[0][1] && table[1][1] && table[2][1] !== '-'){
            return `The ${currentPlayer} wins`
        } else if (table[0][2] && table[1][2] && table[2][2] !== '-'){
            return `The ${currentPlayer} wins`
        } else if (table[0][0] && table[1][1] && table[2][2] !== '-'){
            return `The ${currentPlayer} wins`
        }  else if (table[2][0] && table[1][1] && table[0][2] !== '-'){
            return `The ${currentPlayer} wins`
        } 
    }
}

function play(x, y) {
    if (currentPlayer === 'Jugador 1') {
        table[y - 1][x - 1] = table[y - 1][x - 1].replace('-', 'x')
    } else { table[y - 1][x - 1] = table[y - 1][x - 1].replace('-', 'o') }
    checkWinner()
    if (currentPlayer === 'Jugador 1') { currentPlayer = 'Jugador 2' }
    else { currentPlayer = 'Jugador 1' }
    show()
}