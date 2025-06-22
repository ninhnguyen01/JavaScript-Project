let myString = "Hello, World!";
let myRegex = /Hello/;
let  = myRegex.test(myString); 

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result2 = waldoRegex.test(waldoIsHiding);

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result3 = petRegex.test(petString);

let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; 
let result4 = fccRegex.test(myString);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result5 = extractStr.match(codingRegex); 

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result6 = twinkleStar.match(starRegex); 

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result7 = unRegex.test(exampleStr);

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result8 = quoteSample.match(vowelRegex); 

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result9 = quoteSample.match(alphabetRegex); 

let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/ig; 
let result10 = quoteSample.match(myRegex); 

let quoteSample4 = "3 blind mice.";
let myRegex3 = /[^0-9aeiou]/gi; 
let result11 = quoteSample.match(myRegex); 

let difficultSpelling = "Mississippi";
let myRegex4 = /s+/g; 
let result12 = difficultSpelling.match(myRegex);

let chewieRegex = /Aaa*/; 
let result13 = chewieQuote.match(chewieRegex);

let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<.*?>/; 
let result14 = text.match(myRegex);

let reCriminals = /C+/; 

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result15 = calRegex.test(rickyAndCal);

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result16 = lastRegex.test(caboose);

let quoteSample5 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result17 = quoteSample.match(alphabetRegexV2).length;

let quoteSample6 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result18 = quoteSample.match(nonAlphabetRegex).length;

let movieName2 = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result19 = movieName.match(numRegex).length;

let movieName3 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result20 = movieName.match(noNumRegex).length;

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
let result21 = userCheck.test(username);

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result22 = sample.match(countWhiteSpace);

let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result23 = sample.match(countNonWhiteSpace);

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; 
let result24 = ohRegex.test(ohStr);

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result25 = haRegex.test(haStr);

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result26 = timRegex.test(timStr);

let favWord = "favorite";
let favRegex = /favou?rite/; 
let result27 = favRegex.test(favWord);

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; 
let result28 = pwRegex.test(sampleWord);

let myString3 = "Eleanor Roosevelt";
let myRegex6 = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; 
let result29 = myRegex.test(myString);

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; 
let result30 = reRegex.test(repeatNum);

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let result31 = str.replace(fixRegex, replaceText);

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result32 = hello.replace(wsRegex, ""); 