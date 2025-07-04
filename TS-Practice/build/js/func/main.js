"use strict";
let Myname;
let userName;
userName = 'Amy';
const add = (a, b) => {
    return a + b;
};
add(2, 3);
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(a, b));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (e, f) {
    return e * f;
};
logMsg(multiply(2, 2));
const addAll = (x, y, z) => {
    if (typeof z !== 'undefined') {
        return x + y + z;
    }
    return x + y;
};
const sumAll = (x, y, z = 2) => {
    return x + y + z;
};
logMsg(addAll(2, 3, 3));
logMsg(sumAll(2, 4));
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
