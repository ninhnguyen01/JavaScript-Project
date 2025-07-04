let stringArr = ['one', 'hey', 'rex'];

let opClass = ['Assault', 'Support', 'Engineer', 'Sniper', 141];

let mixedData = ['EVH', 1984, true];

stringArr[0] = 'Henri';
stringArr.push('hello');

opClass[0] = 'commander';
opClass.unshift('Flag officer');

let bands: string[] = [];
bands.push('Van Halen')

let myTuple: [string, number, boolean] = ['Dave', 32, true];

let mixed = ['Keller', 1, false];

myTuple[1] = 25;

let myObj: object;
myObj = [];
console.log(typeof(myObj));

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop1 = 'Nicholas';

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name}!`
    }
    return 'Hello!'
}

console.log(greetGuitarist(evh))

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U);