function welcomeToBooleans() {

  return true; 

}

function trueOrFalse(wasThatTrue) {
 if (wasThatTrue) {
   return "Yes, that was true"
 }
 else {
   return "No, that was false"
 }
}

function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

function testStrict(val) {
  if (val ===  7) { 
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }

  if (val > 10) {  
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }

  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

function testLessThan(val) {
  if (val < 25) {  
    return "Under 25";
  }

  if (val < 55) {  
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

function testLessOrEqual(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

function testLogicalAnd(val) {

  if (val <= 50 && val >=25) {
      return "Yes";
    }
  return "No";
}

testLogicalAnd(10);

function testLogicalOr(val) {

  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

testLogicalOr(15);

function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  return result;
}

testElse(4);

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  } 
}

testElseIf(7);

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  }

  else if (num < 10) {
    return "Small";
  }

  else if (num < 15) {
    return "Medium";
  }

  else if (num < 20) {
    return "Large";
  }

  else if(num >= 20){
    return "Huge";
  }

  return "Change Me";
  
}

testSize(7);

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  }

  else if (strokes <= par - 2) {
    return names[1];
  }

  else if (strokes == par - 1) {
    return names[2];
  }

  else if (strokes == par) {
    return names[3];
  }

  else if (strokes == par + 1) {
    return names[4];
  }

  else if (strokes == par + 2) {
    return names[5];
  }

  else if (strokes >= par +3) {
    return names[6];
  }

  return "Change Me";
  
}

golfScore(5, 4);


const myArray = [];
let i = 10;

do {
  myArray.push(i);
  i++;
  } while (i < 11) 

function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

function randomFraction() {

  let result = 0;
  while (result === 0) {
    result = Math.random();
  }

  return result;  
}
