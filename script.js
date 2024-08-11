let answers = [
    'Paper',
    'Scissors',
    'Rock'
]

const randomAnswer = 3
function Userinput() {

    // Asks the user to play Paper, Scissors, Rock and then asks then to insert something to start the game. 


    let numofAttempts = 0
    let userScore = ''
    let computerScore = ''
    alert("Lets play paper, sciccors or rock!")

    while (numofAttempts < 3) {
        numofAttempts = numofAttempts + 1
        alert('Round' + numofAttempts)
        let userChoice = prompt('Insert paper, sciccors or rock')
        let index = Math.floor(Math.random() * randomAnswer)
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

        else if (
            userChoice == 'paper' && computerAnswer == 'Paper' ||
            userChoice == 'scissors' && computerAnswer == 'Sciccors' ||
            userChoice == 'rock' && computerAnswer == 'Rock') {
            alert("It's a tie.")
            //If the user has won this code will put 'you win'

        }
        else {
            alert('Invaild response, game over.')
        }



    }
    if (userScore > computerScore) {
        alert('congrats you have won the game')
    }
    else if (userScore < computerScore) {
        alert('HAHA you lose')
    }
    else {
        alert('Invaild response, game over.')
    }


} 