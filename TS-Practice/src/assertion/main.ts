type one = string;
type two = string | number;
type three = 'hello';

let alpha: one = 'hello';
let beta = alpha as two;
let charlie = alpha as three;

const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;