/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 6;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 2) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You go with #1 and offer the bear your " + bearClothing + ". The bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You choose #2 to tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("Choosing #3, you run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("Smart choice, you've chosen none of the above. You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.

Line 14 is the beginning of a conditional ‘if’ statement. What follows will guide the computer through evaluating some conditions so that it can determine what to do next. First, if the doorChoice variable is strictly equal to 2, then the  bearClothing variable (initially declared as an empty string) is assigned the string value of “hat”. If this initial condition is met, the computer stops there and ‘exits’ the conditional statement. It does not check the remaining conditions, which in this case is a single ‘else’. If the initial if statement is not met, meaning the doorChoice variable is equal to anything other than 2, the computer moves on to the next conditional without executing the code within the if statement brackets. The secondary conditional is an ‘else’ which acts as a catch-all for any situations. So, with this example, if doorChoice is not equal to 2, no matter what it is equal to, the bearClothing variable will be assigned the value of “scarf” (I changed it to

2. What variable has a new value assigned to it after the first if statement executes?

If the doorChoice variable is 3, the bearClothing variable will be “scarf” .

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Lines 27 and 35 hold a bit more complex of a conditional statement than the one previously described about in lines 14-18. Rather than just one condition and then a catch-all `else` statement, there are 3 different conditions that are tested before the catch-all `else`. In this case, `if` is used once to start the conditional and then `else if` is used twice. `Else if` refers to how if the first conditional is not met, than the computer should evaluate a new condition. Anytime an `if` is included, a condition must be stated so the computer can evaluate it and complete some if/then logic. So, the 3 conditions, top to bottom and one at a time, evaluate whether the bearChoice variable, defined at the beginning of the script, is strictly equal to 1, 2, or 3, respectively. Depending on which, if any, of the conditions are met, unique strings are logged to the console. Remember that the moment a condition is met, the computer ‘exits’ the conditional statement as a whole and does not evaluate any further conditions or execute any further actions from the chain of curly bracket conditionals. However, if a condition is not met, the computer does not evaluate any of the code within the curly brackets that follow the condition and instead moves on to the next conditional, be that an `else if` or an `else`. In this way, the computer is able to follow distinct paths, or operations, based on the data it is given. At the end of this statement, there is one final catch-all `else` statement, which logs yet another unique string to the console, if bearChoice is not equal to 1, 2, or 3.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

If the bearChoice variable is 3, the console will log “You run as fast as you can into the next room. It’s full of snakes!” As the final outcome.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

If doorChoice is 1 and bearChoice is 2, the bearClothing variable will be assigned the value of “scarf”. After noting that the scarf is too small for the bear, you will choose option #2 and point this out, which will lead the bear to start to cry.

7. What is your favorite ending

My favorite ending is the catch-all else ending of becoming friends with the bear. I wish I could be friend with a bear. However, I had the most fun with option #1, offering the bear your 'bearClothing'. I changed up the options in the first if statement and got a kick out of the visuals.
*/
