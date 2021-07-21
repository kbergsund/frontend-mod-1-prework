## Section 4 Reflection

- [x] How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

My workflow felt slightly different, definitely a lot more intentional. Following the Pomodoro technique during independent study is still a work in progress. I was absolutely more goal-oriented each time I sat down to work. I believe I was able to stay more disciplined in terms of focus because I knew where I was headed, where I wanted to get to, before stepping away for a break. At the beginning of the section, I was terrible at remembering to write down checkmarks to track my progress and break length. I got better with each new topic. By the end, I was in more of a rhythm with the timer. Where I still have trouble is that day by day, I have a wide spectrum of focus capacity and I don't want to push or limit myself in a way that worsens my productivity. I've never really kept to a structured or timed study schedule, a cause and symptom of this. Some days, I can be really productive for 2 hours straight while others I need breaks every 30 minutes. In addition to just practicing and holding myself accountable (which will be helped through group work), a possible solution could be allowing myself variable pomodoro lengths based on how I feel? Probably not an ideal route.

After reflecting on my workflow this section, I downloaded a Pomodoro app on my phone with some elements of gamification. Knowing myself, this should work better than just a timer. I look forward to exploring it.

- [x] Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

I am grateful for the dedicated reflection and intention setting surrounding workflow. It went well and I will continue to get better at it and, more importantly, at acting on it- making changes for the better and following through, like downloading the Pomodoro app and actually using it, as I go. I was formerly aware of how out of sync my workflow, all through college and industry, is with the Pomodoro technique. But through trying out more structure in my own time, I demonstrated to myself how generally inefficient and/or unhealthy a free-for-all workflow can be. I have become a lot more aware of how all over the place I can be with focus and study breaks. And how this is not optimizing my own time, something I owe to myself. I work hard regardless but the time I without breaking can vary from 15 minutes to 2 hours. I am not regimented with breaks, sometimes just going off when I feel like it or when I get distracted. As with anything, recognition is the first step to improvement.

- [x] What is an Object, and how is it different from an Array in Javascript?

An Object is a complex data/variable type that stores collections of related data, like a database. They are called Objects because they can be used to model real-world objects. For example, if we wanted to model a car in code, we could call our Object `car` and perhaps the data stored within the Object, also known as the properties, would be the make, model, year, color, etc. The data within an object 'defines' what/how the object 'is'. While Objects and Arrays are both complex data/variables made up of groups of data, they are different in a few ways. First, Arrays are ordered lists whereas in Objects, order does not matter. With Arrays, elements are accessed by numbers in an index. With Objects, elements are organized by key-value pairs. Key-value pairs can be thought of as dictionary definitions in which the key is the word and the value is the definition. To access values in an Object, we use the key.

- [x] For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class: Array
  * List of states and their capitals: Object
  * List of things to pack for vacation: Array
  * Names of all the Instagram accounts I follow: Array
  * List of student names and their cohort: Object
  * Ingredients and amount of each ingredient to bake a cake: Object
  * All my favorite restaurants: Array

- [x] In this section, we talked about a `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

I am thinking about most online shopping experiences. An online shopping cart could be an Object. Even the ubiquitous term 'cart' is modeling a real-world object. Some keys are likely numberOfItems, itemSKUs (which would likely need to be an array of objects with their own unique properties, see below examples), totalCost, estimatedTax and shippingCost. Example values could be 3 items total, a shirt, a poster, and silverware. The itemSKU key would be an array of three additional objects that model each respective item with properties to represent individual cost and any customization in terms of size/color/quantity. TotalCost would be the sum of the individual item costs. EstimatedTax would add some percentage to the totalCost. And shippingCost would be some default value for the state/method. This could likely change later on in the check-out process when the user decides how quickly they want to receive their items.

- [x] What questions do you still have about classes and/or Objects?

1. What are the limitations of using objects versus classes? And vice versa? Seems to me like they can essentially do the same thing. With objects, you can write functions separately from an object that manipulate values. With classes, you can write methods within a class that manipulate properties. Interested to see more applications for both.
2. Not a question, but I am curious to get into nesting all of these complex data types we've learned about. I can see it getting very deep very fast. As it pertains to my above shopping cart example, how would you access an object's key-value pair within an array within a parent object?
