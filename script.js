//step 2: using computer to randomly select rock paper Scissors
function getComputerChoice() {
    const randomNumber = Math.random(); 
    
    if (randomNumber < 0.33) 
    { return "rock"; }
  
    else if (randomNumber < 0.66) 
    {  return "paper";  }
    
    else 
    {return "scissors"; }

}

//step 3 user input function to make user input rock paper or scissors
function getHumanChoice() {
    const userInput = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    return userInput;
}

//step 4 user score variables
let humanScore = 0;      
let computerScore=0;

//step 5 play single game

function playRound(humanChoice, computerChoice) {
 if humanChoice
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

    


