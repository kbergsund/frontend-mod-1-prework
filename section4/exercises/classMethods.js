/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/

// ✅  The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.

// ✅  Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings.

// ✅  The burrito class should have a method named `changeProtein`.
// This method should accept one argument, a String.
// The method should re-assign this.protein to the value that was passed in.

// ✅  Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.

// ✅  The burrito class should have a method named `addTopping`.
// This method should accept one argument, a String.
// The method should add a topping to the list of toppings held in state.

// ✅  Call the `addTopping` method on two burritos, then log the burritos to verify
// that the proteins have been changed.

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    // Task 1: toppings property
    this.toppings = toppings;
  }

  // ADD CODE

  // Task 3: changeProtein method
  changeProtein(newProtein) {
    this.protein = newProtein;
  }

  // Task 5: addTopping method
  addTopping(newTopping) {
    this.toppings.push(newTopping);
  }
};

// ADD CODE

// Task 2: 3 Burrito instances
var alPastor = new Burrito("pork", "beans", [ "cheese", "pico de gallo", "sour cream"]);
var veggie = new Burrito("beans", "rice", ["fajita veggies", "guacamole", "cheese", "pico de gallo"]);
var chicken = new Burrito("chicken", "more chicken", ["cheese", "pico de gallo", "corn salsa"]);

//console.log(veggie);
//console.log(alPastor);

// Task 4: call changeProtein method
veggie.changeProtein("tofu");
console.log(veggie);

// Task 6: call addTopping method twice
alPastor.addTopping("guacamole");
veggie.addTopping("corn");
console.log(alPastor);
console.log(veggie);
