

// there are 3 choices available: rock, paper and scissors;
// use math.floor and (math.random * 3) to generate a random number between 0 and 2
//if choice === 0, select rock. if choice === 1, select paper. else, select scissors.
// save choice in variable computerChoice 

function getComputerChoice()    {
let computerChoice;
let number = Math.floor(Math.random() * 3);
    if (number === 0){
        computerChoice = 'rock';
    } else if (number === 1){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound(){
    let computerChoice;
    computerChoice = getComputerChoice()
    let userChoice = prompt('Write your choice', '')
    userChoice = userChoice.toLowerCase();
    let result;
    if (userChoice === computerChoice){
        result = `It\'s a draw! Both selected ${userChoice.toLowerCase()}!`
    } else if (userChoice === 'rock' && computerChoice === 'paper'){
        result = `You lose! ${computerChoice} beats ${userChoice}!`;
    } else if (userChoice === 'rock' && computerChoice === 'scissors'){
        result = 'You win! Rock beats scissors!';
    } else if (userChoice === 'scissors' && computerChoice === 'rock'){
          result = 'You lose! Rock beats scissors!';
    }  else if (userChoice === 'scissors' && computerChoice === 'paper'){
          result = 'You win! Scissors beats paper!';
    }   else if (userChoice === 'paper' && computerChoice === 'rock'){
        result = 'You win! Paper beats rock!';
    }  else if (userChoice === 'paper' && computerChoice === 'scissors'){
        result = 'You lose! Scissors beats paper!';
    } else {
        result = 'invalid input. please select rock, paper or scissors.';
    }
    return result;
}
