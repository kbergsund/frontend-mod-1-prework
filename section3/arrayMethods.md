
Arry Methods: What does each one do?

`pop` removes the final item in the array so that the length decreases by 1. It also returns that element.

``` JavaScript
var newArray = [ "purple", "blue", "green"];
newArray.pop();
```

`push` adds one or more items to the end of the list. Returns the new length with the added items.

``` JavaScript
newArray.push("yellow");
```

`shift` removes the first item from the array, the opposite of pop, and returns that removed item.

``` JavaScript
newArray.shift();
```

`unshift` adds one or more items to the beginning of the array (shifts every other item's index back by 1!). Similar to `push`, returns the new length.

``` JavaScript
newArray.unshift("red");
```
