/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.
function sayHello() {
  console.log("Oh, Hello!");
}

sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
function greetMe(name) {
  console.log(`Oh, hello ${name}!`);
}

var person = "friend";

greetMe("Kyra");
greetMe("Zoe");
greetMe(person);

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function findSum(num1, num2) {
  console.log(num1 + num2);
}

findSum(2,2);
findSum(1234,9876);
findSum(3.14159,3.1415926535897);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function combineStrings(string1, string2) {
  console.log(`${string1} and ${string2} are enemies.`);
}

combineStrings("Harry Potter", "Draco Malfoy");
combineStrings("You", "me");

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
I named my function 'combineStrings'. I felt it is likely good practice to- in 2-3 words -describe what the function does. I included a verb that lays out what happens and the noun of what is impacted. I did the same for the previous exercise with findSum but the noun is what the end result will be. My parameters are very basic, string1 and string2. This is likely not good practice because it doesn't describe the content of the strings but the YOU DO assignment was very broad and just asked for a function that concatenated strings. Given the content of what is logged to the console, I definitely could have named them name1 and name2.

*/
