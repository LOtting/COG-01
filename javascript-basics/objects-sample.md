# JavaScript Objects and Arrays

Object refers to a data structure containing data and instructions for working with the data.
Objects sometimes refer to real-world things, for example a car or map object in a racing game.

```javascript
// Basic object
var objA = {};                  // empty Object
objA.name = "My Object A";      // give objA a property(eine Eigenschaft)

// Basic object notation, keys are identifiers
var obj = {
    key1: "valueOne",  
    key2: "valueTwo"
};
console.log( obj );             // prints Object {key1: "valueOne", key2: "valueTwo"}    
console.log( obj.key2 );        // prints valueTwo
obj.key2;                       // prints "valueTwo"

var myObject = obj;             // assigns obj to myObject
console.log( myObject.key1 );   // prints valueOne


// basic Object with nested array, object and function
// arrays are explained further down
var baseObject = {
    keyOne: "valueOne",
    keyTwo: "valueTwo",
    images: ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"], // nested array literal
    pos: { x: 40, y: 300, z: undefined},                        // nested object literal
    anotherKey: function(){                                     // nested function
        return 3 * 5;
    }  
};

baseObject.keyOne;      //  "valueOne"
baseObject.keyTwo;      //  "valueTwo"
baseObject.images;      //  ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"]
baseObject.images[0];   //  "smile.gif"
baseObject.images[3];   //  "bomb.gif"
baseObject.images[4];   //  undefined
baseObject.pos;         //  Object { x: 40, y: 300 }
baseObject.pos.x;       //  40
baseObject.pos.y;       //  300
baseObject.pos.z;       //  undefined
baseObject.anotherKey();//  15


var objB = {
    name: "My Object B",
    hello: function(person) {
        console.log("Hello, " + person);
    }
};
objB.hello("Gentle Reader"); // prints "Hello, Gentle Reader"

// Creating new kinds of objects
function MyObject(person) {
    this.name = person;
    this.say = function() {
        console.log("It's " + this.name);
    };
}

var objA = new MyObject("Gentle Reader");
objA.say(); // prints "It's Gentle Reader"


// Prototypes
MyObject.prototype.hello = function() {
    console.log("Hello, " + this.name);
};
objA.hello(); // prints "Hello, Gentle Reader"
var objB = new MyObject("Inspired Coder");
objB.hello(); // prints "Hello, Inspired Coder"



/*
 Array is an Object with an "index"( 0, 1, 2, 3, ...) as keys 
*/
var emptyArray = []; // empty Array

var baseArray = [1, 2, 3, 4, 5];

// is nearly the same as baseArray but is not valid (executable)
var baseObject = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5
};
// executable version
var baseObject = {
    o0: 1,
    o1: 2,
    o2: 3,
    "3": 4,  // error message "Unexpected number"
    "o4": 5
};



// following two Array iterations do the same
// forloop
var arr = [1, 2, 3];
for (var i = 0, len = arr.length; i < len; i++) {  // short form (var i = 0; i < arr.length; i++)
console.log(arr[i]);
}

// functional style
// functional forEach
var arr = [1, 2, 3];
arr.forEach(function(element, index) {
    console.log(element);
 //   console.log(index);
});

```


## Read this only if you are interested in more details or come back later!


#Mozilla Developer Neztwork (MD)

## Grammar and types:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types

## Object:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Object_literals


## Array:
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array
https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Array_literals
