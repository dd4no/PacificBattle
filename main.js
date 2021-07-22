// PACIFIC BATTLE //

// Global Variables
const diceBox = document.querySelector('.dicebox')
const attackBox = document.querySelector('#attack')
const defenseBox = document.querySelector('#defense')
const attackDice = []
const defenseDice = []

// Die roller
function rollDie(box, dice, rolls) {
    for (let i=0; i<rolls; i++) {
        const roll = Math.ceil(Math.random()*6)
        // console.log(roll)        
        dice.push(roll)
        // console.log(dice);
        const die = document.createElement('div')
        die.classList.add('die')
        die.innerHTML = roll
        box.appendChild(die)
    }
}
rollDie(attackBox, attackDice, 4)
rollDie(defenseBox, defenseDice, 6)