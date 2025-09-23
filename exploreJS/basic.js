// log to console
console.log("Hello!")

console.error('something went wrong')

// variables

const x = 8;
console.log(x)

let y;

y = 3 * 15;
console.log(y)

let z = 3 * 5;
console.log(z)

// function

function add(a,b) {
    return a + b;
}

console.log(add(3,2))

const minus = (a,b) => {return a - b}
console.log(minus(3,2))

const multiply = (a,b) => a * b
console.log(multiply(2,2))

// object 

const obj = {
    firstName: 'Jane',
    lastName: 'Doe',
    sayName() {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log(obj.sayName())

// array

const arr = ['player1', 'player2', 'player3'];
console.log(arr)

arr[1] = 'player5';
console.log(arr)

arr.push('player6')
console.log(arr)

// conditional
let alpha = 1
if (alpha > 0) {
    console.log('higher than 0')
}

// for of loop
const squad = ['alpha', 'beta', 'charlie', 'delta']
for (const s in squad) {
    console.log(s)
}

// classes

class Person{
    constructor(name) {
        this.name = name
    }
    describe() {
        return `Person: ${this.name}`;
    }

    static logName(person) {
        for (const p in person) {
            console.log(p.name)
        }
    }
}

// inheritance

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }

    describe() {
        return super.describe() + ` (${this.title})`
    }
}

const jane = new Employee('Jane', 'CTO');
console.log(jane);