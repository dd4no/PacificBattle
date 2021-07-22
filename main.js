// PACIFIC BATTLE //

// Global Variables
const diceBox = document.querySelector('.diceBox')
let diceResults = []

// Die roller
function rollDie(rolls) {
  diceResults.length = 0
  $('.diceBox').empty()
  for (let i = 0; i < rolls; i++) {
    const roll = Math.ceil(Math.random() * 6)
    // console.log(roll)
    diceResults.push(roll)
    // console.log(dice);
    const die = document.createElement('div')
    die.classList.add('die')
    die.innerHTML = roll
    diceBox.appendChild(die)
  }
  console.log(diceResults)
}
// rollDie(6)
