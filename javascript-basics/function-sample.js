// Functions in JavaScript
//function name() {
//    programmcode
//}

// 01 hello function
function greetings() {
     console.log( "Hello COG" );
 }

 greetings();



// 02 add function
function add ( a, b ) {
    var sum = a + b;
    return sum;
}

add( 2, 7 );

console.log(
    add( 2, 7 )
    );

var mySum = add( 6, 4 );  // assign the result of add() to the variable mySum
console.log( mySum );
