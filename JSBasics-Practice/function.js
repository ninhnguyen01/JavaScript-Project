function greet() {
  console.log("Hello!");
}

greet();


function greetPerson(name) {
  console.log(`Hello, ${name}!`);
  console.log("Nice weather today, right?");
}

greetPerson('Jack');

function sum(a, b) {
  return a + b;
}

let result = sum(3, 2);
console.log(result);

function checkAge(age) {
  if (age > 18) {
    return "You may get a car license";
  }
  return "You may not get a car license yet";
}

console.log(checkAge(20));
console.log(checkAge(15));


function printArguments(...args){
    console.log(args);
}

printArguments("A", "B", "C"); 

printArguments(1, 2, 3, 4, 5);

const greetings = (name) => {
  console.log(`Hello, ${name}!`);
};

greetings("John"); 

const greetingsWay = () => {
  console.log("Hello World!");
  console.log("How are you?");
};

greetingsWay();
