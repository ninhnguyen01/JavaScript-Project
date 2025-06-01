let x;
let y;

const person = {
    name: 'John',
    age: 30,
    isAdmin: true,
    address: {
        city: 'London',
        address: 'London 1 Way',
        state: 'UK',
    },
}

console.log(person);

x = person.name;
y = person.address;

console.log(x);
console.log(y);

person.greet  = function() {
    console.log(`Hello, my name is ${this.name}`) ;
}

person.greet();