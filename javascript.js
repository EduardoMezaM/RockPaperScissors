function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        return 'rock';
    }
    else if(randomNumber === 1){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function playRound(humanChoice, computerChoice){
    let resultText = '';

    if(humanChoice === computerChoice){
        resultText = `This is a tie! You and the computer both chose ${humanChoice}.`;
    }
    else if((humanChoice === 'rock' && computerChoice === 'scissors') || 
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')){
                humanScore++;
                resultText = `You win! ${humanChoice} beats ${computerChoice}.`;
    }
    else{
        resultText = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
    const resultsPara = document.querySelector('.results');
    const scorePara = document.querySelector('.score');
    resultsPara.textContent = resultText;
    scorePara.textContent = `Player: ${humanScore} | Computer: ${computerScore}`; 

    if(humanScore === 5){
       resultsPara.textContent = 'You won the game!';
       disableButtons();
    }
    else if(computerScore === 5){
        resultsPara.textContent = 'You lose the game!';
        disableButtons();
    }
}

function disableButtons() {
    document.querySelectorAll('.rps-button').forEach(button => {
        button.disabled = true;
    });
}

let humanScore = 0;
let computerScore = 0;



const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()));

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', () => playRound('paper', getComputerChoice())); 

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice()));  

