
let HumanScore = 0, ComputerScore = 0;
function getComputerChoice() {
    if ((Math.floor(Math.random() * 3)) === 0) return "Rock";
    else if ((Math.floor(Math.random() * 3)) === 0) return "Paper";
    else return "scissors";
}



function getHumanChoice() {
    return prompt("Enter your Guess out of Rock, Paper or Scissors");

}


function playround(getComputerChoice, getHumanChoice) {

    // we are capitalizing the human input to make it non-case sensitive
    getHumanChoice = getHumanChoice.toUpperCase()
    getComputerChoice = getComputerChoice.toUpperCase();
    const win = `You win ${getHumanChoice} beats ${getComputerChoice}`;
    const loose = `You lose ${getComputerChoice} beats ${getHumanChoice}`

    if (getComputerChoice == 'ROCK' && getHumanChoice == 'PAPER') return win;
    else if(getComputerChoice == 'ROCK' && getHumanChoice == 'SCISSORS') return loose;
    else if(getComputerChoice=='PAPER' && getHumanChoice=='SCISSORS') return loose;
    else if(getComputerChoice=='PAPER' && getHumanChoice=='ROCK') return win;
    else if(getComputerChoice=='SCISSORS' && getHumanChoice=='ROCK') return win;
    else if(getComputerChoice=='SCISSORS' && getHumanChoice=='PAPER') return win;
    else return "draw";
    
}




console.log(playround(getComputerChoice(), getHumanChoice()));

