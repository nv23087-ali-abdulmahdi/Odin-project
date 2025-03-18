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
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log(`NO WINNER TIE ${humanSelection} is the same as ${computerSelection}`);
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log(`human win ${humanSelection} beats ${computerSelection}`);
    humanScore++;
  } else {
    console.log(`AI WINS ${computerChoice} beats ${humanSelection}`);
    computerScore++;
  }


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


//step 6 play entire game
function playGame() {
  
    for (let round = 1; round <= 5; round++) {
      console.log(`Round=${round}`);
  
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
  
      playRound(humanSelection, computerSelection);
    }
  //step 7 check for the winner
    if (humanScore > computerScore) {
      console.log(`Congratulations! You win the game!human:${humanScore} computer:${computerScore}`);
    } else if (humanScore < computerScore) {
      console.log(`Sorry, you lose the game. Better luck next time! human:${humanScore} computer:${computerScore}`);
    } else {
      console.log(`The game is a tie! human:${humanScore} computer:${computerScore}`);
    }
  }
  
  playGame();

