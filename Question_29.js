// Rock paper scissors logic

let player1 = 'rock'
let player2 = 'scissors'


if (player1 === player2) {
    console.log('It is a tie')
} else if (
    player1 === 'rock' && player2 === 'scissors'||
    player1 === 'paper' && player2 === 'rock'||
    player1 === 'scissors' && player2 === 'paper'
) {
    console.log('Player 1 wins')
} else {
    console.log('Player 2 wins')
}