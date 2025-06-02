let balance = 4000;

if (balance > 5000) {
  console.log("You have the money for this trip. Let's go!");
} else if (balance > 3000) {
  console.log("You only have enough money for a staycation");
} else {
  console.log("Sorry, not enough money. Save more!");
}
console.log("The end!")

let age = 15;
switch (age) {
  case 10:
    console.log("Age is 10");
    break;
  case 20:
    console.log("Age is 20");
    break;
  default:
    console.log("Age is neither 10 or 20");
}

for (let x = 1; x < 11; x++) {
  console.log(x);
}

let i = 1;

while (i < 6) {
  console.log(`The value of i = ${i}`);
  i++;
}
