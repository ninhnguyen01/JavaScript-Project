let dog = {
  name: "Skippy",
  numLegs: 4
};

console.log(dog.name)
console.log(dog.numLegs)

let dog2 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has 4 legs."}
};

dog2.sayLegs();

let dog3 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog3.sayLegs();

function Dog() {
  this.name = "Sheng",
  this.color = "blue",
  this.numLegs = 4
}

function Dog2() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog2();

function Dog3(name, color) {
  this.name = name,
  this.color = color,
  this.numLegs = 4
}

let terrier = new Dog3("Azel", "black")

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(4);
myHouse instanceof House;

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

function Dog4(name) {
  this.name = name;
}

Dog4.prototype.numLegs = 4;

let beagle = new Dog4("Snoopy");

function Dog5(name) {
  this.name = name;
}

Dog5.prototype.numLegs = 4;

let beagle2 = new Dog5("Snoopy");

let ownProps2 = [];
let prototypeProps = [];

for (let property in beagle2) {
  if(beagle2.hasOwnProperty(property)) {
    ownProps2.push(property);
  } else {
    prototypeProps2.push(property);
  }
}

function Dog6(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog6) {
    return true;
  }
  else {
    return false;
  }
}

function Dog7(name) {
  this.name = name;
}

Dog7.prototype = {
  numLegs: 4,
  eat: function() {
    console.log("yom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }

};

function Dog8(name) {
  this.name = name;
}


Dog8.prototype = {
  constructor: Dog8,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

function Dog9(name) {
  this.name = name;
}

let bogle = new Dog9("Snoopy");

Dog9.prototype.isPrototypeOf(bogle);

function Dog10(name) {
  this.name = name;
}

let begle = new Dog10("Snoopy");

Dog10.prototype.isPrototypeOf(begle);  

Object.prototype.isPrototypeOf(Dog10.prototype);

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,

};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }

};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let bagle = Object.create(Animal.prototype);

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog11() { }

Dog11.prototype = Object.create(Animal.prototype);
let beogle = new Dog11();
beogle.eat()

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck2 = new Bird();
let beagle3 = new Dog();

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};

let beagle4 = new Dog();

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(penguin.fly());

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Gliding!");
  };
};
glideMixin(bird);
glideMixin(boat);

function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
}

let birdy = new Bird();
birdy.getWeight();

(function () {
  console.log("A cozy nest is ready");
})();

let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
    };
  },
  singMixin : function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
    };
  }
    }
})();