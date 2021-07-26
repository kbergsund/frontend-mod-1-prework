// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear

// Declares a function named 'buildABear' with 5 parameters- name, age, fur, clothes and specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  // Declares new variable within function that is a string. It interpolates the name parameter so that when the function is called, the name argument will be 'filled into' the string.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Declares new variable within function that is an array combining the name and age parameters.
  var demographics = [name, age];
  // Declares new variable within function that is a string. It concatenates the specialPower parameter so that when the function is called, the specialPower argument will be 'filled into' the string.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Declares a new object variable within function. The object has six different object properties defined in key-value pairs.
  var builtBear = {
    // The basicInfo key has the value of the above demographics variable.
    basicInfo: demographics,
    // The clothes key has the value of the buildABear fur parameter.
    clothes: clothes,
    // The exterior key has the value of the buildABear clothes parameter.
    exterior: fur,
    // The cost key as a fixed integer value.
    cost: 49.99,
    // The sayings key is assigned the value of an array with three elements: the above greeting and powerSaying variables as well as a new, fixed string for saying goodnight.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // The isCuddly key has a fixed boolean value of true.
    isCuddly: true,
  };

  // The return keyword enables the computer to output the above builtObject variable, aka the 6 property object, as the result of executing this function.
  return builtBear
}

// Calls the buildABear function for the first time. Elements within parantheses are the function arguments- a string, integer, string, array, and string, respectively. These arguments take the place of the 5 parameters we identified upon declaring the function. They occupy the various places where the parameters were used within the function. For example, the greeting variable will fill the ${name} section with "Fluffy" to have an end value of `Hey partner! My name is Fluffy - will you be my friend?!` The end result of calling the function will be a builtBear object with all parameters updated with the below values.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Calls the buildABear function for a second time with all new arguments that. The builtBear object is returned with all new values.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz

// Declares a new function called 'fizzBuzz' with 3 parameters- num1, num2, and range
function fizzBuzz(num1, num2, range) {
  // Starts a for loop. The conditions of this for loop are that (1) the initial counter variable `i` will start at 0. It is 0 the first time the loop runs. (2) the condition in order to keep looping is that the counter variable `i` must be less than or equal to the range parameter that we pass in from the function declaration parantheses. Once `i` equals the range parameter, it will exit the loop. Finally, (3) the third part of the condition is that at the end of each loop iteration, the counter variable `i` increases by one.
  for (var i = 0; i <= range; i++) {
    // Sets up a conditional statement that checks two conditions. The && sign means that both conditions must be true in order for this first condition to be met. Condition #1 evaluates if the modulo, or remainder, of our counter variable `i` divided by the num1 parameter is strictly equal to 0. Condition #2 evaluates whether the same is true but for the modulo of `i` divided by the num2 parameter. Only if both modulos are 0 does the code in the curly bracket execute at which time the computer also exits the conditional statement and does not evaluate any below conditions. Otherwise, if not met, it moves on to the next condition.
    if (i % num1 === 0 && i % num2 === 0) {
      // If both above conditions are met, 'fizzbuzz' will log to the console.
      console.log('fizzbuzz');
    // Sets up a second condition should the above not be met. In this situation, it only checks one of the two above conditions, that the modulo if `i` divided by the num1 parameter is equal to 0. If so, it will execute the code in the curly brackets and then exit the conditional statement.
    } else if (i % num1 === 0) {
    // If the modulo of `i` divided by the num1 parameter is strictly equal to zero, 'fixx' will log to the console and the computer will exit the conditional statement. If not, this will not execute and the computer will move on to the next condition.
      console.log('fizz');
    // Sets up a third condition. Evaluates the second of the initial if statement conditions, whether the modulo of `i` divided by num2 is strictly equal to 0. If so, the computer executes the code in the curly brackets and then exits the conditional statement.
    } else if (i % num2 === 0) {
      // If the above condition is met, 'buzz' is logged to the console.
      console.log('buzz');
    //  Final catch-all part of the conditional statement. Only if none of the above conditions are met does the computer reach this `else` statement.
    } else {
      // If the computer reaches this else statement i.e. none of the above conditions are met, the counter variable `i` gets logged to the console. Ensures that no matter what the arguments are when the function is called, the user will get some kind of feedback. Basically, a list of numbers will print out that are interspersed with fizz and buzz based on the above conditions.
      console.log(i);
    }
  }
}

// Calls the fizzBuzz function with 3 arguments. num1 is 3, num2 is 5, and range is 100. This means the loop will execute 100 times, evaluating each time if (1) both the modulo of 100/3 and 100/5 is 0 or (2) if not both, one or the other is true, or (3) neither are true. These evaluations will determine what it logs to the console.
fizzBuzz(3, 5, 100);
// Calls the function a second time with new arguments. num1 is 5, num2 is 8, and range is 400. The loop will execute 400 times with 5 and 8 acting as the parameters that are used in the modulo calcuations and condition evaluations.
fizzBuzz(5, 8, 400);
