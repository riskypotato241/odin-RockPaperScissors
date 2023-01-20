// there are 3 choices available: rock, paper and scissors;
// use math.floor and (math.random * 3) to generate a random number between 0 and 2
//if choice === 0, select rock. if choice === 1, select paper. else, select scissors.
// save choice in variable computerChoice

function getComputerChoice() {
  let computerChoice;
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    computerChoice = "rock";
  } else if (number === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;  
}

let result;

//Create the variable computerChoice to store getComputerChoice()´s value.
//Ask for user input.
//Whoever chooses the strongest pick wins the round.


function playRound() {
  let computerChoice;
  computerChoice = getComputerChoice();
  let userChoice = prompt("Write your choice", "");
  userChoice = userChoice.toLowerCase();

  if (userChoice === computerChoice) {
    result = `It\'s a draw! Both selected ${userChoice}!`;
  } else if (userChoice === "rock" && computerChoice === "paper") {
    result = `You lose! ${computerChoice} beats ${userChoice}!`;
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    result = "You win! Rock beats scissors!";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    result = "You lose! Rock beats scissors!";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    result = "You win! Scissors beats paper!";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result = "You win! Paper beats rock!";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    result = "You lose! Scissors beats paper!";
  } else {
    result = "Invalid input. Please select rock, paper or scissors.";
  }
  return result;
}


//Create a game() function. Create userScore and computerScore to keep record of wins.
//Invoke a while loop that keeps playing the game until either side gets to 5 points.
// if singleResult is invalid ask for input again. 
//SHOULD NOT ADD POINTS TO ANY SIDE AND IT SHOULDNT CANCEL THE GAME.
///everyime you lose, add 1 to the variable computerScore
//everytime you win, add 1 to the variable userScore
//the first one to score 5 points wins
function game() {
  let userScore = 0;
  let computerScore = 0;
  let singleResult;
  while (userScore < 5 || computerScore < 5) {
    singleResult = playRound();
    if (singleResult.slice(0, 7) === "You win") {
      userScore++; }
    if (singleResult.slice(0, 7) === "Invalid") {
      continue}
    if (singleResult.slice(0,8) === 'You lose') {
      computerScore++;
    }
    console.log(`Your score: ${userScore}. Computer score: ${computerScore}`);
    if (userScore === 5) {
      return "You win";
    } else if (computerScore === 5) {
      return "You lose";
    }
  }
}


