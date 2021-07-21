/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
// I expect that I usually wouldn't want to use such similar class names (Dog1, Dog2, and Dog), just doing so to build on the exercises, keep to naming protocol of singular thing

class Dog1 {
}

var shibaInu = new Dog1();
var pug = new Dog1();

console.log(shibaInu, pug);

// Prompt 2: Snack

class Snack1 {
}

var cherryPlum = new Snack1();
var whiteNectarine = new Snack1();

console.log(cherryPlum, whiteNectarine);

// Prompt 3: Shirt

class Shirt1 {
}

var buttonDown = new Shirt1();
var cropTop = new Shirt1();

console.log(buttonDown, cropTop);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Dog2 {
  constructor() {
    this.breed = "Golden Retriever"
    this.age = 5;
    this.temperament = "friendly"
  }
}

var balto = new Dog2();

console.log(balto);

// Prompt 2: Snack

class Snack2 {
  constructor() {
    this.type = "apple",
    this.sauce = "peanut butter",
    this.servings = 2
  }
}

var honeyCrisp = new Snack2();

console.log(honeyCrisp);

// Prompt 3: Shirt

class Shirt2 {
  constructor() {
    this.type = "button-down";
    this.sleeveLength = "long";
    this.color = "blue";
  }
}

var workShirt = new Shirt2();

console.log(workShirt);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Dog {
  constructor(breed, age, tmprmnt) {
    this.breed = breed;
    this.age = age;
    this.temperament = tmprmnt;
  }
}

var max = new Dog("Shih Tzu", 2, "goofy");
var jack = new Dog("Australian Shepherd", 6, "anxious");

console.log(max);
console.log(jack);

// Prompt 2: Snack

class Snack {
  constructor(type, sauce, servings) {
    this.type = type;
    this.sauce = sauce;
    this.servings = servings
  }
}

var guac = new Snack("chips", "guacamole", 6);
var veggie = new Snack("carrots", "hummus", 4);

console.log(guac);
console.log(veggie);

// Prompt 3: Shirt

class Shirt {
  constructor(sleeveLength, color, purpose, rips, status) {
    this.sleeve = sleeveLength;
    this.color = color
    this.occasion = purpose
    this.hasHoles = rips
    this.needsWash = status  }
}

var buttonDown = new Shirt("long sleeved", "blue", "work", false, true);
var whiteTee = new Shirt("short sleeved", "white", "exercise", true, true);

console.log(buttonDown);
console.log(whiteTee);
