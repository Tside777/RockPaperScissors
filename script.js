function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }


function computerPlay() {
    let randomValue = getRandomIntInclusive(1,3);
    let RPS;

    if (randomValue === 1) {
        RPS = "ROCK";
    } else if(randomValue === 2) {
        RPS = "PAPER";
    } else {
        RPS = "SCISSORS"
    }
    return RPS;
}

function playerPlay() {
    let playerSelection = prompt("Choose Rock, Paper, or Scissors").toUpperCase();

    while(playerSelection !== "ROCK"  && playerSelection !== "PAPER" && playerSelection !== "SCISSORS") {
        playerSelection = prompt("Oops, try again! Choose Rock, Paper, or Scissors").toUpperCase();
    }

    return playerSelection;
}


function playRound(playerSelection, computerSelection) {
    
    if(playerSelection === computerSelection) {
        return -1;
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return 0;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return 0;
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return 0;
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return 1;
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return 1;
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return 1;
    }
}



function game() {
    let playerScore = 0;
    let computerScore = 0;

    let i = 0
    while (i < 5) {

        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        if (result == 1) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
            playerScore += 1;
            i += 1;
        } else if (result == 0) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
            computerScore += 1;
            i += 1;
        } else {
            console.log("Tie Game!");
        }
        
        console.log(`Player: ${playerScore} \t Computer: ${computerScore}`);
    }


    if (playerScore > computerScore) {
        console.log(`You Win ${playerScore} - ${computerScore}`);
    } else {
        console.log(`You Lose ${playerScore} - ${computerScore}`);
    }
}


game();