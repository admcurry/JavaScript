const getUserChoice = userInput => {if (userInput.toLowerCase() === 'rock' || userInput.toLowerCase() === 'paper' || userInput.toLowerCase() === 'sissors') {
    return userInput
  }
  else {return 'Error'}
  }
  
  const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3)
  
    switch (num) {
      case 0:
      return 'rock'
      break
  
      case 1:
      return 'paper'
      break
  
      case 2: 
      return 'scissors'
      break 
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {return 'The game is a tie'}
    else if (userChoice === 'rock' && computerChoice === 'paper') {return 'The computer has won'}
    else if (userChoice === 'rock' && computerChoice === 'scissors') {return 'You have won!'}
    else if (userChoice === 'paper' && computerChoice === 'scissors') {return 'The computer has won'}
    else if (userChoice === 'paper' && computerChoice === 'rock') {return 'You have won!'}
    else if (userChoice === 'scissors' && computerChoice === 'rock') {return 'The computer has won'}
    else if (userChoice === 'scissors' && computerChoice === 'paper') {return 'You have won won'}
  }
  
  function playGame() {
    let userChoice = getUserChoice('rock')
    console.log(userChoice)
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
  
    return determineWinner(userChoice, computerChoice)
  }