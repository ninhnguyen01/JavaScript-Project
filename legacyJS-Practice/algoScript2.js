function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last
    ? first + sumAll([first + 1, last])
    : first;
}

sumAll([1, 4]);

function diffArray(arr1, arr2) {
  const difference = new Set(arr1);
  arr2.forEach((ele) =>
    difference.has(ele) ? difference.delete(ele) : difference.add(ele)
  );
  return Array.from(difference);
}

function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection
    .filter(obj => sourceKeys
      .every(key => obj[key] === source[key]));
}

function spinalCase(str) {

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

function translatePigLatin(str, charPos = 0) {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
      ? str + 'ay'
      : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}

function myReplace(str, before, after) {
  const strArr = str.split(" ");
  const [wordToReplace] = strArr.filter(item => item === before);
  const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
    ? after[0].toUpperCase() + after.slice(1)
    : after[0].toLowerCase() + after.slice(1);
  return strArr.map(item => (item === before ? replacement : item)).join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  
  return str
    .split("")
    .map(x => [x, pairs[x]]);
}

pairElement("GCG");

function fearNotLetter(str) {
  var allChars = "";
  var notChars = new RegExp("[^" + str + "]", "g");

  for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars)
    ? allChars.match(notChars).join("")
    : undefined;
}

fearNotLetter("abce");

function uniteUnique() {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

convertHTML("Dolce & Gabbana");

function sumFibs(num) {
  let f0 = 0;
  let f1 = 1;
  let f2 = 1;

  let sum = 0;
  while (f1 <= num) {
    
    sum += f1;
    if (f2 <= num) sum += f2;

    
    [f0, f1] = [f1 + f2, f2 + (f1 + f2)];
    f2 = f0 + f1;
  }

  return sum;
}

function sumPrimes(num) {
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  const upperBound = range.reduce((prod, curr) => prod * curr);
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);

function dropElements(arr, func) {
  return arr.length > 0 && !func(arr[0])
    ? (dropElements(arr.slice(1), func))
    : arr;
}

dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

function steamrollArray(arr, flatArr = []) {
  const elem = arr.pop();
  return elem
    ? !Array.isArray(elem)
      ? steamrollArray(arr, [elem, ...flatArr])
      : steamrollArray(arr.concat(elem), flatArr)
    : flatArr;
}

function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");

function addTogether() {
  const [first, second] = arguments;

  function addSecond(second) {
    if (typeof (second) === "number") return first + second;
  }

  if (typeof (first) === "number") {
    if (arguments.length === 1) return addSecond;
    if (arguments.length === 2) return addSecond(second);
  }
}

const Person = function(first, last) {
  let firstName = first;
  let lastName  = last;

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFirstName = function(first) {
    return firstName = first;
  };

  this.setLastName = function(last) {
    return lastName = last;
  };

  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};

const bob = new Person("Bob", "Ross");
console.log(bob.getFullName());

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    return { name, orbitalPeriod };
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);