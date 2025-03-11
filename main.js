
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
    const loose = `You lose ${getComputerChoice} beats ${getHumanChoice}`;


    if (getComputerChoice == 'ROCK' && getHumanChoice == 'PAPER') {
        HumanScore++;
        return win;
    }
    else if (getComputerChoice == 'ROCK' && getHumanChoice == 'SCISSORS') {
        ComputerScore++;
        return loose;
    }
    else if (getComputerChoice == 'PAPER' && getHumanChoice == 'SCISSORS') {
        HumanScore++;
        return win;
    }
    else if (getComputerChoice == 'PAPER' && getHumanChoice == 'ROCK') {
        ComputerScore++;
        return loose;
    }
    else if (getComputerChoice == 'SCISSORS' && getHumanChoice == 'ROCK') {
        HumanScore++;
        return win;
    }
    else if (getComputerChoice == 'SCISSORS' && getHumanChoice == 'PAPER') {
        HumanScore++;
        return win;
    }
    else return "draw";

}


// console.log(playround(getComputerChoice(),getHumanChoice()));

function playgame(){
    let i=0;
    while (i<5) {
        let x = playround(getComputerChoice(),getHumanChoice());
        console.log(x);
        console.log(ComputerScore);
        console.log(HumanScore);
        i++;
    }

     if(ComputerScore<HumanScore) console.log(`You win as your score was ${HumanScore} and computers was ${ComputerScore}`);
     else if(HumanScore<ComputerScore) console.log(`You loose as your score was ${HumanScore} and computers was ${ComputerScore}`);
     else console.log('somethign is off')

}


 playgame();