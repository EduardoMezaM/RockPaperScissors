console.log('Linked correctly!')

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(`The random number generated is ${randomNumber}`);
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

function playRound(human, cpu){
    human = human.toLowerCase();

    if(human === cpu){
        console.log(`This round it's a tie, human and computer both chose ${human}`);
    }

    else if(human === 'rock'){
        if(cpu === 'paper'){
            ++computerScore;
            console.log(`Computer wins! ${cpu} beats ${human}`);
        }
        else{
            ++humanScore;
            console.log(`You win! ${human} beats ${cpu}`);
        }
    }

    else if(human === 'paper'){
        if(cpu === 'rock'){
            ++humanScore;
            console.log(`You win! ${human} beats ${cpu}`);
        }
        else{
            ++computerScore;
            console.log(`Computer wins! ${cpu} beats ${human}`);
        }
    }

    else if(human === 'scissors'){
        if(cpu === 'rock'){
            ++computerScore;
            console.log(`Computer wins! ${cpu} beats ${human}`);
        }
        else{
            ++humanScore;
            console.log(`You win! ${human} beats ${cpu}`);
        }
    }
    
}

const computer = getComputerChoice();
console.log(`The computer choice is ${computer}`);
const human = getHumanChoice();
console.log(`The human choice is ${human}`);

let humanScore = 0;
let computerScore = 0;

playRound(human, computer);
