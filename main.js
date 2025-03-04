// console.log("Hello World");
function getComputerChoice() {
    if ((Math.floor(Math.random() * 3)) === 0) return "Rock";
    else if ((Math.floor(Math.random() * 3)) === 0) return "Paper";
    else return "scissors";
}

console.log(getComputerChoice());

// console.log(Math.random()*3);