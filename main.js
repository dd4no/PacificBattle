// PACIFIC BATTLE //

// Global Variables
const diceBox = document.querySelector('.diceBox')
let diceResults = []
let rolls = Math.ceil(Math.random() * 6)

// Die roller
function rollDie(rolls) {
  // Clear previous results
  diceResults.length = 0
  $('.diceBox').empty()
  // Create specified number of dice
  for (let i = 0; i < rolls; i++) {
    //Generate a random number between 1 and 6
    const roll = Math.ceil(Math.random() * 6)
    // Add result to array
    diceResults.push(roll)
    // Create a die div
    const die = document.createElement('div')
    die.classList.add('die')
    // Add value
    die.innerHTML = roll
    // Show dice
    diceBox.appendChild(die)
  }
}
