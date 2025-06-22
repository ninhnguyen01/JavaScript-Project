const myArray = ["hello", 1];

const myArray2 = [["Horn",25], ["White Tower", 22]];

const myArray3 = [50, 60, 70];

const myData = myArray3[0];

const myArray4 = [18, 64, 99];

myArray4[0] = 45;

const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData3 = myArray5[2][1];

const myArray6 = [["John", 23], ["cat", 2]];

myArray6.push(["dog",3])

const myArray7 = [["John", 23], ["cat", 2]];

const removedFromMyArray = myArray7.pop([1][1])
console.log(removedFromMyArray)
console.log(myArray7)

const myArray8 = [["John", 23], ["dog", 3]];

const removedFromMyArray2 = myArray8.shift([0][0]);
console.log(removedFromMyArray2);
console.log(myArray8)

const myArray9 = [["John", 23], ["dog", 3]];
myArray9.shift();

myArray9.unshift(["Paul", 35]);

const myList = [["Bar",14], ["Gold", 12], ["Cheese",23], ["Salad",32],["Cake", 45]];