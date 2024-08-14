const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
    console.log(rows);
}

for (const row of rows) {
    console.log("\n" + row);
}