let answers = [
'Paper',
'scissors',
'Rock'
]
const randomAnswer = 3
function Userinput() {
    // Asks the user to play Paper, Scissors, Rock and then asks then to insert something to start the game. 
    let userChoice = prompt ("Let's play Paper, Scissors, Rock! Insert what you want to say")
    let index = Math.floor(Math.random()* randomAnswer)
    // Outputs a reply back to the user with a random word in the array. 
    alert (answers [index] +'!')
}


    if( userChoice == 'paper' && answers [index] == 'Rock' ) {
        alert('Round 2')
    }
