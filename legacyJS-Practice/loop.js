const myArray = [];
let i = 5
while (i >= 0) {
  myArray.push(i);
  i--;
}

const myArray2 = [];
for (let i = 1; i < 6; i++) {
  myArray2.push(i);
}

const myArray3 = [];

for (let i = 1; i < 10; i+= 2) {
  myArray3.push(i);
}

const myArray4 = [];

for (let i = 9; i > 0; i-=2) {
  myArray4.push(i);
}

const myArr = [2, 3, 4, 5, 6];

let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

function multiplyAll(arr) {
  var product = 1;
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
