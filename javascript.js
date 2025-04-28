console.log('Linled correctly!')

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
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

const computer = getComputerChoice();
console.log(computer);
const human = getHumanChoice();
console.log(human);