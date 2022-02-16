// ITERATION 1

// Suspects Array

const suspectsArray = [
  firstName: Jacob,
  lastName: Green,
  occupation: Entrepreneur,
  age: 45,
  description: He has a lot of connections,
  image: https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg ,
  color: green];

// Rooms Array

const roomsArray = [[{name: "Dining Room"],
  [name: "Conservatory"],
  [name: "Kitchen"],
  [name: "Study"],
  [name: "Library"],
  [name: "Billiard Room"],
  [name: "Lounge"],
  [name: "Ballroom"],
  [name: "Hall"],
  [name: "Spa"],
  [name: "Living Room"],
  [name: "Observatory"],
  [name: "Theater"],
  [name: "Guest House"],
  [name: "Patio"]}];

// Weapons Array

const weaponsArray = [{[name: rope --- weight: 10],
  [name: "knife" , weight: 8],
  [name: "candlestick" , weight: 2],
  [name: "dumbbell" , weight: 30],
  [name: "poison" , weight: 2],
  [name: "axe" , weight: 15],
  [name: "bat" , weight: 13],
  [name: "trophy" , weight: 25],
  [name: "pistol" , weight: 20]}];


// ITERATION 2

function selectRandom() {
  const rm = Math.floor(Math.random() * roomsArray.length) +1 ;
  const rnm = Math.floor(Math.random() * weaponsArray.length) +1 ;
  return console.log(`${suspectsArray.name} was in ${roomsArray[rm]} had 
  ${weaponsArray[rnm].name} and his weapon's weight was ${weaponsArray[rnm].weaponsArray} `)
}

function pickMystery() {}


// ITERATION 3

function revealMystery() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
