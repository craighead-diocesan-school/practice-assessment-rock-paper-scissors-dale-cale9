let answers = [
    'Paper',
    'Scissors',
    'Rock'
]

const randomAnswer = 3
function Userinput() {

    // Asks the user to play Paper, Scissors, Rock and then asks then to insert something to start the game. 


    let numofAttempts = ''
    let userScore = ''
    let computerScore = ''
    let roundNumber = 1

    while (numofAttempts < 3) {
        let userChoice = prompt("Let's play Paper, Scissors, Rock! Insert what you want to say")
        let index = Math.floor(Math.random() * randomAnswer)
        numofAttempts = numofAttempts + 1
        let computerAnswer = answers[index]
        // Outputs a reply back to the user with a random word in the array. 
        alert(computerAnswer + '!')



        if (userChoice == computerAnswer) {
            alert('Tied')
            // If the comupter and the user have tied this code will output 'Tied'
        }
        else if (
            userChoice == 'rock' && computerAnswer == 'Paper' ||
            userChoice == 'paper' && computerAnswer == 'Scissors' ||
            userChoice == 'scissors' && computerAnswer == 'Rock') {
            alert('You lose womp womp.')
            // If the user has lost this code will out put 'You lose' 
            computerScore = computerScore + 1
        }
        else if (
            userChoice == 'paper' && computerAnswer == 'Rock' ||
            userChoice == 'scissors' && computerAnswer == 'Paper' ||
            userChoice == 'rock' && computerAnswer == 'Scissors') {
            alert('YAY, you win.')
            //If the user has won this code will put 'you win'
            userScore = userScore + 1
        }

       

        roundNumber = roundNumber + 1

    }
if(userChoice > computerAnswer){
    alert('congrats you have won the game')
}
else if (userChoice < computerAnswer) {
    alert('HAHA you lose')
}





} 