const x = 100;

console.log(x, 'in global scope');

function run(){
    console.log(x, 'in function');
}

run();

function add() {
    const x = 200;
    const y = 50;
    console.log(x + y);
}

add();