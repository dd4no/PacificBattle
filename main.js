// PACIFIC BATTLE //

// Global Variables
const diceBox = document.querySelector('.diceBox')
let diceResults = []
let rolls = Math.ceil(Math.random() * 6)
const fleet = [
  {
    name: 'Arizona',
    attack: 4,
    defense: 4,
  },
  {
    name: 'West Virginia',
    attack: 5,
    defense: 5,
  },
  {
    name: 'Yamashiro',
    attack: 3,
    defense: 4,
  },
  {
    name: 'Haruna',
    attack: 2,
    defense: 3,
  },
]
console.log(fleet)

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
