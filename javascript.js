console.log('Linked correctly!')

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        return 'rock'
    }
    else if(randomNumber === 1){
        return 'paper'
    }
    else{
        return 'scissors'
    }
}

function getHumanChoice(){
    const choice = prompt('Enter your choice: ');
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice){
        console.log(`This is a tie! You and the computer both chose ${humanChoice}.`);
    }
    else if((humanChoice === 'rock' && computerChoice === 'scissors') || 
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')){
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
    else{
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}

let humanScore = 0;
let computerScore = 0;
let computerSelection = '';
let humanSelection = '';

function playGame(){

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);
        
        computerSelection = getComputerChoice();
        console.log(`The computer chose ${computerSelection}`);
        humanSelection = getHumanChoice();
        console.log(`You chose ${humanSelection}`);
        playRound(humanSelection, computerSelection);
        console.log(`computerScore: ${computerScore}.`);
        console.log(`humanScore: ${humanScore}.`);
    }

    if(humanScore > computerScore){
        console.log(`You Win!! The final score is ${humanScore}:${computerScore}`);
    }
    else if(humanScore < computerScore){
        console.log(`You Lose!! The final score is ${humanScore}:${computerScore}`);
    }
    else{
        console.log(`This is a tie!! The final score is ${humanScore}:${computerScore}`);
    }
}

playGame();