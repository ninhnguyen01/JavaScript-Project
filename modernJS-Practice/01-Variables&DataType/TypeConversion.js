let amount = '100';
let amount2 = '70';
let amount3 = '250';

amount = parseInt(amount);
amount2 = +amount2;
amount3 = Number(amount3)

console.log(amount, typeof(amount));
console.log(amount2, typeof(amount2));
console.log(amount3, typeof(amount3));

let amount4 = 100;
let amount5 = 200;
let amount6 = 300;

amount4 = amount4.toString();
amount5 = String(amount5);

console.log(amount4, typeof(amount4));
console.log(amount5, typeof(amount5));

let amount7 = 200.22;

amount7 = parseFloat(amount7);

console.log(amount7, typeof(amount7));