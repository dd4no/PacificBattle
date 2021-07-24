// PACIFIC BATTLE //

// Global Variables
const game = document.querySelector('.game')

const panel = document.querySelector('.panel')
const diceBox = document.querySelector('.diceBox')

const board = document.querySelector('.board')
const japanSea = document.querySelector('.japanSea')
const alliedSea = document.querySelector('.alliedSea')

const japanShips = document.getElementsByClassName('japan')
const alliedShips = document.getElementsByClassName('allied')

const alliedFleet = [
  {
    name: 'Arizona',
    side: 'allied',
    attack: 4,
    defense: 4,
    damage: 0,
    sunk: false
  },
  {
    name: 'West Virginia',
    side: 'allied',
    attack: 5,
    defense: 5,
    damage: 0,
    sunk: false
  }
]

const japanFleet = [
  {
    name: 'Yamashiro',
    side: 'japan',
    attack: 3,
    defense: 4,
    damage: 0,
    sunk: false
  },
  {
    name: 'Haruna',
    side: 'japan',
    attack: 2,
    defense: 3,
    damage: 0,
    sunk: false
  }
]

let rolls
let diceResults = []
let combatShips = [japanFleet[0], alliedFleet[0]]

// Die roller
function rollDie(rolls) {
  // Clear previous results
  let results = []
  $('.diceBox').empty()
  // Create any number of dice
  for (let i = 0; i < rolls; i++) {
    //Generate a random number between 1 and 6
    const roll = Math.ceil(Math.random() * 6)
    // Add result to array
    results.push(roll)
    // Create a die
    const die = document.createElement('div')
    die.classList.add('die')
    die.innerHTML = roll
    diceBox.appendChild(die)
  }
  // console.log(results);
  return results
}

function buildShip(number, sea, fleet) {
  // Build any number of ships
  for (let i=0; i<number; i++) {
    // Create a ship
    let ship = document.createElement('div')
    ship.classList.add('ship', `${fleet[i].side}`)
    sea.appendChild(ship)
    // Add attack number
    let attack = document.createElement('div')
    ship.appendChild(attack)
    attack.innerHTML = fleet[i].attack
    // Add defense number
    let defense = document.createElement('div')
    defense.classList.add('defense')
    ship.appendChild(defense)
    defense.innerHTML = fleet[i].defense
    // Add name
    let name = document.createElement('p')
    ship.appendChild(name)
    name.innerHTML = fleet[i].name
  }
}

buildShip(1, japanSea, japanFleet)
buildShip(1, alliedSea, alliedFleet)


function attack(ships) {
  let rolls = ships[0].attack
  let results = rollDie(rolls)
  console.log(results);
  let hits = results.filter(function(result){
    return result === 6;
  })
  rolls = hits.length
  if (hits.length > 0) {
    results = rollDie(rolls)
    results.map(function (result) {
      ships[1].damage += result
    })
  if (ships[1].damage > ships[1].defense) {
    ships[1].sunk = true
  }
  console.log(ships[1]);


  }

}