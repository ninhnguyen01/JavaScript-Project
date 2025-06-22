function caseInSwitch(val) {
  let answer = "";
  switch(val) {
    case 1:
      answer = 'alpha'
      console.log(answer)
      break;
    case 2:
      answer = 'beta'
      console.log(answer)
      break;
    case 3:
      answer = 'gamma'
      console.log(answer)
      break;
    case 4:
      answer = 'delta'
      console.log(answer)
      break;
  }
  return answer;
}

caseInSwitch(1);

function switchOfStuff(val) {
  let answer = "";
  switch(val) {
    case "a":
      answer = 'apple'
      console.log(answer)
      break;
    case "b":
      answer = 'bird'
      console.log(answer)
      break;
    case "c":
      answer = 'cat'
      console.log(answer)
      break;
    default:
      answer = 'stuff'
      console.log(answer)
      break;
  }
  
  return answer;
}

switchOfStuff(1);

function sequentialSizes(val) {
  let answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      console.log(answer);
      break;

    case 4:
    case 5:
    case 6:
      answer = "Mid";
      console.log(answer);
      break;

    case 7:
    case 8:
    case 9:
      answer = "High";
      console.log(answer);
      break;
  }
  return answer;
}

sequentialSizes(1);

function chainToSwitch(val) {
  let answer = "";
  
  switch(val) {
    case "bob":
      answer = "Marley"
      console.log(answer)
      break;

    case 42:
      answer = "The Answer"
      console.log(answer)
      break;

    case 1:
      answer = "There is no #1"
      console.log(answer)
      break;

    case 99:
      answer = "Missed me by this much!"
      console.log(answer)
      break;

    case 7:
      answer = "Ate Nine"
      console.log(answer)
      break;

  }
  return answer;
}

chainToSwitch(7);