"use strict";
let alpha = 'hello';
let beta = alpha;
let charlie = alpha;
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
