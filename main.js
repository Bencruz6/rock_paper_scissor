// console.log("Hello World");
let HumanScore = 0, ComputerScore = 0;
function getComputerChoice() {
    if ((Math.floor(Math.random() * 3)) === 0) return "Rock";
    else if ((Math.floor(Math.random() * 3)) === 0) return "Paper";
    else return "scissors";
}

// console.log(getComputerChoice());

function getHumanChoice() {
    return prompt("Enter your Guess out of Rock, Paper or Scissors");
    // console.log(Human);
}
// console.log(getHumanChoice());

function playround(getComputerChoice, getHumanChoice) {
    // getComputerChoice='ROCK'
    getHumanChoice = getHumanChoice.toUpperCase()
    getComputerChoice = getComputerChoice.toUpperCase();
    // console.log(getHumanChoice);

    if (getComputerChoice == 'ROCK' && getHumanChoice == 'PAPER') return `You win ${getHumanChoice} beats ${getComputerChoice}`;
    else if(getComputerChoice=='PAPER' && getHumanChoice=='SCISSORS') return `You lose ${getComputerChoice} beats ${getHumanChoice}`;
    else if(getComputerChoice=='SCISSORS' && getHumanChoice=='ROCK') return ``
}


console.log(playround(getComputerChoice(), getHumanChoice()));
// console.log(Math.random()*3);
