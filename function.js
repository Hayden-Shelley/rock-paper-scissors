let playerScore = 0;
let computerScore = 0;

function getComputerChoice(computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1) {
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else if (computerChoice === 3) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "Paper" && playerSelection === "ROCK") {
        winner = "computer"; 
        return "You lose! Paper beats Rock";
    } else if (computerSelection === "Rock" && playerSelection === "SCISSORS") {
        winner = "computer"; 
        return "You lose! Rock beats Scissors";
    } else if (computerSelection === "Scissors" && playerSelection === "PAPER") {
        winner = "computer"; 
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "PAPER" && computerSelection === "Rock") {
        winner = "player"; 
        return "You win! Paper beats Rock";
    } else if (playerSelection === "ROCK" && computerSelection === "Scissors") {
        winner = "player"; 
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "SCISSORS" && computerSelection === "Paper") {
        winner = "player"; 
        return "You win! Scissors beats Paper";
    } else {
        winner = "tie";
        return "It's a tie!";
    }
}

for (let i = 0; i < 1000; i++) {
    let playerChoice = prompt("Rock, Paper, or Scissors?").toUpperCase();
    const computerSelection = getComputerChoice();
    let roundResult = playRound(playerChoice, computerSelection);
    console.log(roundResult);
    score(roundResult);
    console.log("Your score is " + playerScore);
    console.log("The computer's score is " + computerScore);

    if (playerScore === 5 || computerScore === 5) {
        break;
    }
}

function score(playRound) {
    if (winner === "player") {
        playerScore++;
    } else if (winner === "computer") {
        computerScore++;
}
    if (playerScore === 5) {
        console.log("Congratulations, you won!");
        return;
    } 
    if (computerScore === 5) {
        console.log("Sorry, you lost!");
        return;
    }
}