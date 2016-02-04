# Functions in JavaScript

Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.

## [Function Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

```javascript
/* Principal function declaration

function name() {
    program code
}

*/

// 01 greetings function
function greetings() {
     console.log( "Hello COG" );
 }

 greetings();



// 02 add function
function add ( a, b ) {
    var sum = a + b;
    return sum; // Function returns the value of sum, which is the sum of a plus b;
}

add( 2, 7 );

console.log(
    add( 2, 7 )
    );

var mySum = add( 6, 4 );  // assign the result of add() to the variable mySum
console.log( mySum );



// Function Expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
var multiplyValues = function(y) {
   return y * y;
};

multiplyValues(7);

```

## Read this only if you are interested in more details or come back later!

## Mozilla Developer Neztwork (MDN)

### [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

### [Function statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
