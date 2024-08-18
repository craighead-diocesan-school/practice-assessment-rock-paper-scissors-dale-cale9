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
    // creates varibles and initial values before being changed in the code. 
    alert("Lets play paper, sciccors or rock!")
    let userName = prompt('What is your name?')
    // Asks the user their name and stores it into the variable 'userName'

    while (numofAttempts < 3) {
        numofAttempts = numofAttempts + 1
        // This code makes sure that after every attempt 1 is added to keeo track of rounds and make sure to only go up to 3 rounds. 
        alert('Round' + numofAttempts)
        // This code alerts with the round number before every round. 
        let userChoice = prompt('Insert paper, sciccors or rock')
        // Asks the user to input 'paper, sciccors or rock' to countinue the game. 
        userChoice = userChoice.toLowerCase()
        userChoice = userChoice.trim()
        //These to codes is put in here in order to still work even after the user puts in for example 'rOck' and if the user has put in a space before entering the chosen word. 
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
            //this code takes every possibility that there is for the computer to win and it will do an alert saying 'you lost'
            computerScore = computerScore + 1
            //This code will add a point to the scoreboard everytime the computer has won.
            results.push('computer wins')
            // This code will add a line to the scoreboard saying 'Computer wins'

        }
        else if (
            userChoice == 'paper' && computerAnswer == 'Rock' ||
            userChoice == 'scissors' && computerAnswer == 'Paper' ||
            userChoice == 'rock' && computerAnswer == 'Scissors') {
            alert('YAY, you win.')
            //this code takes every possibility that there is for the user to win and it will do an alert saying 'you win'
            userScore = userScore + 1
            //This code will add a point to the scoreboard everytime the user has won.
            results.push('Winner: ' + userName)
            // This code will add a line to the scoreboard saying 'UserName wins'

        }

        else if (
            userChoice == 'paper' && computerAnswer == 'Paper' ||
            userChoice == 'scissors' && computerAnswer == 'Sciccors' ||
            userChoice == 'rock' && computerAnswer == 'Rock') {
            alert("It's a tie.")
            //this code takes every possibility that there is for the user and computer to tie and it will do an alert saying 'tied'
            results.push('tied')
            // This code will add a line to the scoreboard saying 'ties'
        }
        else {
            alert('Invaild response, game over.')
            // If the user does not entre a word or for exapmle says orange the computer will output 'Invaild response'
        }

    }
    if (userScore > computerScore) {
        alert('congrats you have won the game')
    }
    else if (userScore < computerScore) {
        alert('HAHA you lose')
        // This code will out put 'congrats you have won the game' if the user sscorees more then the computer. If the computer has scored more points it will output 'haha you lose'
    }
    else {
        alert('Invaild response, game over.')
        // If the user does not entre a word or for exapmle says orange the computer will output 'Invaild response'
    }
}

let results = [
]
// in this code the results will automatically be added to this array. 
function showScoreboard() {
    alert(results)
    // This code will will out put the array/scoreboard
}



