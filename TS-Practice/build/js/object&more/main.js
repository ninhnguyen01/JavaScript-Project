"use strict";
let stringArr = ['one', 'hey', 'rex'];
let opClass = ['Assault', 'Support', 'Engineer', 'Sniper', 141];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Henri';
stringArr.push('hello');
opClass[0] = 'commander';
opClass.unshift('Flag officer');
let bands = [];
bands.push('Van Halen');
let myTuple = ['Dave', 32, true];
let mixed = ['Keller', 1, false];
myTuple[1] = 25;
let myObj;
myObj = [];
console.log(typeof (myObj));
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
exampleObj.prop1 = 'Nicholas';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(evh));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
