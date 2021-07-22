/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, time, likes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = time;
    this.numberOfLikes = likes;
    this.comments = comments;
  }

  addLikes(numLikes) {
    this.numberOfLikes += numLikes
  }

  // Loop allows push() to add more than one comment, an issue I ran into while testing. For each item in method comment array, add the comment at that index number to the parent object comment array

  addComments(comments) {
    for (var i = 0; i < comments.length; i++) {
      this.comments.push(comments[i]);
    }
  }
};

// Tweet 1

var wiseTweet = new Tweet("YodaOfficial", "Do or do not. There is no try.", "A long, long time ago...", 13000, ["Well said 😁", "I needed to hear this today."]);

console.log(wiseTweet);

// Tweet 2

var trashTweet = new Tweet("OscartheGrouch", "nope. not today.", 110820, 76543, ["lol", "Too relatable.", "Chin up Oscar!"]);

console.log(trashTweet);

// Alter properties of Tweet 1 using Tweet class methods

wiseTweet.addLikes(4321);
wiseTweet.addComments(["I couldn't agree more!", "💫💫💫"]);

// Alter properties of Tweet 2 using Tweet class methods

trashTweet.addLikes(333);
trashTweet.addComments(["I feel", "@ me 😅"]);

// Log final results to QA

console.log(wiseTweet);
console.log(trashTweet);
