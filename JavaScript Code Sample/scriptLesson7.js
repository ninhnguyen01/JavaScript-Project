const character = "Hello";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(character);
    console.log(character)
}

for (let i = 0; i < count; i = i + 1) {
    rows.push(character);
    character.repeat(i);
    console.log(character)
}

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1))
    console.log(character)
}
