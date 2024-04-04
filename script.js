console.log('hi lets play ROCK,PAPER or SCISSORS .*)');

const getUserChoice = userInput =>{
  userInput = prompt('enter your choice').toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput
  }else{
    console.log('Error! remember the game choice.')
  }
}

const getComputerChoice = () =>{
  const num = Math.floor(Math.random()*3)
  if(num === 0){
    return 'rock'
  }else if (num === 1){
    return 'paper'
  }else{
    return 'scissors'
  }
}



const determineWinner = (userChoice,computerChoice) =>{
  if(userChoice === computerChoice){
    return 'Its a tie'
  }
  else{
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Sorry Computer Won!'
      }else{
        return 'Congratulations You Won :)'
      }
    }else if (userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Sorry Computer Won!'
      }else if(computerChoice === 'rock'){
        return 'Congratulations You Won :)'
      }
    }
    else if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'Sorry Computer Won!'
      }else if(computerChoice === 'paper'){
        return "Congratulations You Won:)"
      }
    }
    if(userChoice === 'bomb'){
      return 'Congratulations You Won:)'
    }
  }
}



const playGame = () =>{
  const userChoice = getUserChoice()
  console.log('You threw: '+userChoice)
  const computerChoice = getComputerChoice()
  console.log('Computer encountered with: '+computerChoice)
  console.log('________')
  console.log(determineWinner(userChoice,computerChoice))
}

playGame()


