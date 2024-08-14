const character = "Hello";
const count = 8;
const rows = [];

function padRow(name) {
    return name;
}

const call = padRow("Ninh");
console.log(call);

function padRow2(name) {
    return character + " " + name;
}

const calling = padRow2("Nick");
console.log(calling);

function padRow3(name) {
    const test = "Testing";
    return test;
}

const caller = padRow3();
console.log(caller);

function padRow4(name) {
    const test2 = "Test";
    console.log("This works!");
    return test2;
    console.log("This works!");
}

padRow4()

function padRow5() {
    const test3 = "TestVersion";

    return test3;
}

const call2 = padRow5();
console.log(call2);
