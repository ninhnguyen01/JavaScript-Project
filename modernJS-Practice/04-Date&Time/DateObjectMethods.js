let x;
let y;

let d = new Date();

x = d.toString();

x = d.getTime();

x = d.valueOf();

x = d.getFullYear();

x = d.getMonth() + 1;

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getMilliseconds();

console.log(x);

y = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
console.log(y);