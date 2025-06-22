let a = 5;
let b = 1;
a++;

let sumAB = a + b;
console.log(sumAB);
console.log(a);

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();

let seven = 7;
let three = "3";
console.log(seven + three);

console.log(typeof(seven));
console.log(typeof(three))

function zeroArray(m, n) {
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);
