// The computer will return either Rock, Paper, Scissors.
let getComputerChoice = () => {
   let x = Math.floor(Math.random() * 3) + 1
   return (x == 1) ? 'Rock' 
         : (x == 2) ? 'Paper' 
         : (x == 3) ? 'Scissors'
         : 'Error';
}

// Get user input, Rock, Paper, Scissors.
let playerSelection = () => {
    return prompt('Pick you weapon! Rock, Paper, or Scissors')
}

// Determine the winnder by comparing the user and computer input.
let playRound = (playerSelection, getComputerChoice) => {
   let playerPts = 0
   let computerPts = 0
   if (playerSelection == getComputerChoice) {
      return `Tie Game! Player: ${playerPts} vs Computer: ${computerPts}`
   } else if (playerSelection == 'Rock' && getComputerChoice == 'Scissors') {
      playerSelection += 1
      return `Player ${playerPts} vs Computer: ${computerPts}`
   } else if (playerSelection == 'Rock' && getComputerChoice == 'Paper') {
      computerPts += 1
      return `Player ${playerPts} vs Computer: ${computerPts}`
   } else if (playerSelection == 'Scissors' && getComputerChoice == 'Rock') {
      computerPts += 1
      return `Player ${playerPts} vs Computer: ${computerPts}`
   } else if (playerSelection == 'Scissors' && getComputerChoice == 'Paper') {
      playerPts += 1
      return `Player ${playerPts} vs Computer: ${computerPts}`
   } else if (playerSelection == 'Paper' && getComputerChoice == 'Rock') {
      computerPts += 1
      return `Player ${playerPts} vs Computer: ${computerPts}`
   } else if (playerSelection == 'Paper' && getComputerChoice == 'Scissors') {
      computerPts += 1
      return `Player ${playerPts} vs Computer: ${computerPts}`
   }
   
}

// Play 5 rounds
let game = () => {
   let player = playerSelection()
   let computer = getComputerChoice()
   console.log(playRound(player, computer))
}

for (let i = 1; i <= 5; i++) {
   game()
}




