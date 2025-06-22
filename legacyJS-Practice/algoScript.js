function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

convertCtoF(30);

function reverseString(str) {
  return str .split("").reverse().join("");
}

reverseString('hello');

function factorialize(num, factorial = 1) {
  if (num <= 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  }
}

factorialize(5);

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

function largestOfFour(arr) {
   return arr.map(Function.apply.bind(Math.max, null));
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding('Bastian', 'n');

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

repeatStringNumTimes('abc', 3);

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

function findElement(arr, func) {
    return arr.find(func);
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

function booWho(bool) {
    return typeof bool === "boolean";
}

booWho(null);

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

titleCase("I'm a little tea pot");

function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, 'ate', '', false, 9]);

function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}

getIndexToIns([40, 60], 50);

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

mutation(['hello', 'hey']);

function chunkArrayInGroups(arr, size) {
  const newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}