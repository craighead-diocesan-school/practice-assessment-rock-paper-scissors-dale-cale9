let answers = [
    'Paper',
    'scissors',
    'Rock'
]

const randomAnswer = 3
function Userinput() {

    // Asks the user to play Paper, Scissors, Rock and then asks then to insert something to start the game. 
    let userChoice = prompt("Let's play Paper, Scissors, Rock! Insert what you want to say")
    let index = Math.floor(Math.random() * randomAnswer)
    let computerAnswer = answers[index]
    // Outputs a reply back to the user with a random word in the array. 
    alert(computerAnswer + '!')



    if (userChoice == computerAnswer) {
        alert('Tied')
    }
    else if (
        userChoice == 'rock' && computerAnswer == 'Paper' ||
        userChoice == 'paper' && computerAnswer == 'Scissors' ||
        userChoice == 'scissors' && computerAnswer == 'Rock') {
        alert('You lose womp womp.  ')
    }
    else if (
        userChoice == 'paper' && computerAnswer == 'Rock' ||
        userChoice == 'sciccors' && computerAnswer == 'paper' ||
        userChoice == 'rock' && computerAnswer == 'Sciccors') {
        alert('YAY, you win.')
    }


} 