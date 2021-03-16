const ROCK_IMG = document.createElement('img');
ROCK_IMG.src='https://pixy.org/src/20/209108.png';

const PAPER_IMG = document.createElement('img');
PAPER_IMG.src='https://webstockreview.net/images/paper-clipart-cartoon-3.png';

const SCISSORS_IMG = document.createElement('img');
SCISSORS_IMG.src='https://cdn.pixabay.com/photo/2014/04/03/10/20/scissors-310134_1280.png'


const playButton = document.querySelector('#play');

const playAgainButton = document.createElement('button');
playAgainButton.textContent='Play Again';
playAgainButton.id='playAgain';


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
const buttonContainer = document.querySelector('.button-container');
const animationContainer = document.querySelector('.animation-container');

let playerScore = 0;
let computerScore = 0;

const status = document.querySelector('#status');

const scoreBoard = document.createElement('p');

const finalResult = document.createElement('p');


playButton.addEventListener('click', () => {
    buttonContainer.removeChild(playButton);

    buttonContainer.appendChild(rockButton);
    buttonContainer.appendChild(paperButton);
    buttonContainer.appendChild(scissorsButton);

    scoreBoard.textContent = `${playerScore} - ${computerScore}`;
    status.textContent = 'Choose Rock, Paper, or Scissors.';
    content.insertBefore(scoreBoard, buttonContainer);


    game();
});

playAgainButton.addEventListener('click', () => {
    buttonContainer.removeChild(playAgainButton);
    content.removeChild(finalResult);
    content.removeChild(scoreBoard);
    buttonContainer.appendChild(rockButton);
    buttonContainer.appendChild(paperButton);
    buttonContainer.appendChild(scissorsButton);

    status.textContent="Choose Rock, Paper, or Scissors.";
    content.insertBefore(status, buttonContainer);
    content.insertBefore(scoreBoard, buttonContainer);


    game();
})

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
    runAnimation(e.target.id);

    if (result == 1) {
        status.textContent=`Nice! ${e.target.id} beats ${computerSelection}!`;
        playerScore += 1;
    } else if (result == 0) {
        status.textContent=(`Ouch! ${computerSelection} beats ${e.target.id}!`);
        computerScore += 1;
    } else {
        status.textContent="Looks like a tie!";
    }

    scoreBoard.textContent = `${playerScore} - ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        endGame(playerScore, computerScore);
    }
}



function game() {
    playerScore = 0;
    computerScore = 0;
    scoreBoard.textContent = `${playerScore} - ${computerScore}`;
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(button => {
        button.addEventListener('click', play)
        });
    }



function endGame(playerScore, computerScore) {
    const buttons = document.querySelectorAll('.button-container button');
    scoreBoard.textContent = `Final Score: ${playerScore} - ${computerScore}`;
    if (playerScore > computerScore) {
        finalResult.textContent = `You Win! Congratulations!`;
    } else {
        finalResult.textContent = `You Lose! Better luck next time!`;
    }
    buttons.forEach(button => {
        button.removeEventListener('click', play);
        buttonContainer.removeChild(button);
    });
    content.removeChild(status);
    content.insertBefore(finalResult, buttonContainer);
    buttonContainer.appendChild(playAgainButton);
}

function runAnimation(image) {
    animationContainer.removeChild(animationContainer.firstChild);
    if (image === "ROCK") {
        animationContainer.appendChild(ROCK_IMG);
    } else if (image === "PAPER") {
        animationContainer.appendChild(PAPER_IMG);
    } else if (image === "SCISSORS") {
        animationContainer.appendChild(SCISSORS_IMG);
    }
}