function registerUser(user = 'defaultUser') {
    return user + ' is registered';
}

console.log(registerUser("Cola"));

function sum(...numbers) {
    return numbers;
}

console.log(sum(1,2,3,4,5));

function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'Michael'
}

console.log(loginUser(user));

function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom(1,2,3,4,5,6,7,8,9,10);