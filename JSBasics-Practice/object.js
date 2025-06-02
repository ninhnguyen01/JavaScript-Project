let myBook = {
  title: "JavaScript Introduction",
  author: "Nathan Sebhastian",
   describe: function () {
    console.log(`Book title: ${this.title}`);
    console.log(`Book author: ${this.author}`);
  },
};

console.log(myBook.title);
console.log(myBook.author);

myBook.year = 2023;

myBook["publisher"] = "CodeWithNathan";

console.log(myBook);

myBook.author = "John Doe";

console.log(myBook);

delete myBook.author;

console.log(myBook);