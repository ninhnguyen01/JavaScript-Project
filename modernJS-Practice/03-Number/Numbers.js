let x;
let y;
let z;
let a;
let b;
let c;

const number = new Number(5);

x = number.toString();


y = number.toString().length();
y = number.toFixed(2);
z = number.toPrecision(2);
a = number.toExponential(2);
b = number.toLocaleString('en-US');
c = number.valueOf();

console.log(y);