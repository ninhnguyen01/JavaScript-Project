for (let n = 10; n>=0; n--) {
    console.log('Num: ' + n);
}

for (let i = 1; i <=10; i++) {
    console.log("Num: " + i);
    for (let j = 1; j <=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

const name = ['Canute', 'Cnut', 'Knute']

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}