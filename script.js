const playButton = document.querySelector('#play');

const rockButton = document.createElement('button');
rockButton.textContent="Rock";
rockButton.id='ROCK';

const paperButton = document.createElement('button');
paperButton.textContent="Paper"
paperButton.id='PAPER';

const scissorsButton = document.createElement('button');
scissorsButton.textContent="Scissors"
scissorsButton.id='SCISSORS';

const content = document.querySelector('.main-container');

let playerScore = 0;
let computerScore = 0;

playButton.addEventListener('click', () => {
    content.removeChild(playButton);
    content.appendChild(rockButton);
    content.appendChild(paperButton);
    content.appendChild(scissorsButton);
    game();
});






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


function play(e) {
    let computerSelection = computerPlay()
    let result = playRound(e.target.id, computerSelection);

    if (result == 1) {
        console.log(`You Win! ${e.target.id} beats ${computerSelection}!`);
        playerScore += 1;
    } else if (result == 0) {
        console.log(`You Lose! ${computerSelection} beats ${e.target.id}!`);
        computerScore += 1;
    } else {
        console.log("Tie!");
    }
    console.log(`Player: ${playerScore} \t Computer: ${computerScore}`);

    if (playerScore === 5 || computerScore === 5) {
        endGame(playerScore, computerScore);
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    const buttons = document.querySelectorAll('.main-container button');
    buttons.forEach(button => {
        button.addEventListener('click', play)
        });
    }

function endGame(playerScore, computerScore) {
    const buttons = document.querySelectorAll('.main-container button');
    if (playerScore > computerScore) {
        console.log(`You Win ${playerScore} - ${computerScore}`);
    } else {
        console.log(`You Lose ${playerScore} - ${computerScore}`);
    }
    buttons.forEach(button => {
        button.removeEventListener('click', play);
        content.removeChild(button);
    });

    content.appendChild(playButton);
}