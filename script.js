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
console.log(getComputerChoice());
