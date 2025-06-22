function reusableFunction() {
  console.log("Hi World")
}

reusableFunction();

function functionWithArgs(num1, num2){
  console.log(num1 + num2);
}

functionWithArgs(2,3)

function timesFive(num) {
  return num * 5;
}

const result = timesFive(5);

const myGlobal = 10;

function fun1() {
  oopsGlobal = 5;

}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

const outerWear = "T-Shirt";

function myOutfit() {
  let outerWear = 'sweater';
  return outerWear;
}

myOutfit();

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

function nextInLine(arr, item) {
  arr.push(item);
  item = arr.shift();
  
  return item;
  
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function isLess(a, b) {
  return a < b;
}

isLess(10, 15);

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }

}

cc(2); cc(3); cc(7); cc('K'); cc('A');

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

function checkSign(num) {
  return (num > 0) ? "positive"
  : (num < 0) ? "negative"
  : "zero";
}

checkSign(10);

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}