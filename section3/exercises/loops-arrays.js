/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

// EXAMPLE: Write code below that iterates through a list of animals and print
// each animal.

var animals = ["Zebra", "Giraffe", "Elephant"];

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// YOU DO: Write code below that iterates through a list of animals and prints "The <animal> is awesome!" for each animal.

var moreAnimals = [ "Frog", "Gecko", "Chameleon"];
for (var i=0; i < moreAnimals.length; i++) {
  console.log(`The ${moreAnimals[i]} is awesome!`);
  //console.log(moreAnimals[i] + "s are awesome!");
}


// YOU DO: Create an array of foods and then iterate over that array to log "Add
// <food> to shopping list" for each food item.

var foods = [
  "chips",
  "avocados",
  "tomatoes",
  "cilantro",
  "onion",
  "limes"];
for (var i = 0; i < foods.length; i++) {
  console.log(`Add ${foods[i]} to shopping list.`);
}


// YOU DO: Create an array of numbers and then iterate over that array to log double
// of each of the number. (Ex: 4 doubled is 8.)

var numbers = ["2", "4", "7.5", "8", "11.5", "21"];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

// YOU DO: Using the array of names below, print out "Happy Birthday <name>" for
// each name except the first two.

var names = ["Sevy", "Lindsey", "Jericho", "Raeonna", "Latrina", "Jhana", "Luca"];
for (i = 2; i < names.length; i++) {
  console.log("Happy Birthday " + names[i]);
}


// THE FINAL YOU DO: Using the array of ages below, print out a statement for each age.
// The age should determine which message is printed out:
  // Under 18? "Oh no, you can't vote quite yet."
  // 18 or over? "Make sure you get out and vote!"

// WORD FROM THE WISE: Before you start coding, jot down, with pen and paper, what steps you
// want to tell the program to take. Think of all the concepts you've learned so far.

// Remember, stuck for 15-20 minutes? Reach out to your pre-work group on Slack.

var ages = [17, 20, 34, 18, 16, 65, 49, 10, 22, 18];
// Loop through each number in list. If <18, log can't vote. Otherwise, log vote! Added functionality: tell user how long they have to wait by creating variable assigned to 18 - age.

for (var i = 0; i < ages.length; i++) {
  if (ages[i] < 18) {
    vote = 18 - ages[i];
    if (vote == 1) {
      console.log("Oh no, you can't vote quite yet. You have " + vote + " year left to wait.");
    } else {
      console.log("Oh no, you can't vote quite yet. You have " + vote + " years left to wait.");
    };
  } else {
    console.log("Make sure you get out and vote!");
  };
};
