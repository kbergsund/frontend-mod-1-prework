// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Kyra";
var specialAbility = "laughter";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Hello " + heroName + "!";
var catchsphrase = `${specialAbility} is what we're after!`;

// Declare two variables - power AND energy - set to integers
power = 11;
energy = 33;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var faullEnergy = energy * 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Syndrome", "Randall", "Darla"];
var sidekicks = ["Samwise Gamgee", "Chewbacca", "Donkey"];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Lots-o");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  dangerLevel = dangerLevel;
  saveTheDay = saveTheDay;
  badExcuse = badExcuse;

  // Your function should include an if/else statement that meets the following criteria
  //   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
  //   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
  //   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel > 10) {
    console.log(saveTheDay);
  } else {
    console.log("Meh. Hard pass.");
  }
}

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Corolla. Be right back.';

//assessSituation(99, announcement, excuse);
// Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.' ✅

// assessSituation(21, announcement, excuse)
// Should print - 'Never fear, the Courageous Curly Bracket is here!' ✅

// assessSituation(3, announcement, excuse)
// Should print - "Meh. Hard pass." ✅

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name:"Sully",
  smell: "Fabric softener",
  weight: 333,
  citiesDestroyed: [ "Monstropolis", "San Bernardino", "Okeechobee"],
  luckyNumbers: [4, 8, 15, 16, 23, 42],
  address: {
    number: 667,
    street: "Roar Ln",
    state: "Colorado",
    zip: 80903
  }
}

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.supewpower = superpower;
    this.age = age;
    this.archNemesis  = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50
  }

  // - Create the following class methods
  //   - sayName, should print the hero's name to the console
  //   - maximizeEnergy, should update the energyLevel to 1000
  //   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

  sayName() {
    console.log(this.name);
  }

  maximizeEnergy() {
    this.energyLevel = 1000;
  }

  gainPower(increaseBy) {
    this.powerLevel += increaseBy;
  }
}

// - Create 2 instances of your SuperHero class

var dash = new SuperHero("Dash", "speed", 10);
var violet = new SuperHero("Violet", "invisibility", 17);

console.log(dash, violet)

// Testing the functions
dash.maximizeEnergy();
violet.gainPower(300);
console.log(dash.energyLevel);
console.log(violet.powerLevel);

// Reflection
// What parts were most difficult about this exerise?

// I struggled the most with the differences in syntax between objects and classes. Had to keep referencing my notes because they are very similar but different in key ways, primarly surrounding punctuation (comma versus semi-colon between lines, colon or equal sign for assigning properties) but also with where/how to define a function. I will develop muscle memory. One other area that was tricky was figuring out how to QA code that we weren't instructed to log to the console. I wanted to be sure my class functions were working as desired and did a little bit of troubleshooting with what to log.

// What parts felt most comfortable to you?

// I feel comfortable with variables but know I will need to work on boolean logic the deeper we dive into applications of boolean variables. I also feel comfortable thus far with building conditional statements that account for multiple conditions.

// What skills do you need to continue to practice before starting Mod 1?

// I would say that while I feel really comfortable with the concepts of this Pre-Work, I just need to continue practicing all of it so it becomes second nature and I don't have to have my notes open next to me. I'd also like to work with objects and classes more- to get into OOP -as I know we just scratched the surface.
