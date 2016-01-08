// This is a comment, see http://www.w3schools.com/js/js_comments.asp

// JavaScript reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference


// Insert the console.log() function call into a "New Immediate Window" (click on plus sign in the editor, there you will find "New Immediate Window")
// > console.log("hello world");

console.log("hello world at Immediate Window");


/*
 Or run this in the terminal with node.js
  $ node          // ->return
  > console.log("hello world");
  hello world     // response
  undefined
*/
console.log("hello world node.js");


// Or in the Browser Development Tools()
console.log("hello world in the browser");

// Hint: Immediate Window is like a Browser Console prepared for you from Cloud9. If you run node in the Terminal you will get a "Read Eval Print Loop"(REPL).


/*
 The variable "var" statement declares a variable, optionally initializing it to a value.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
*/
 
// Strings https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
var myVariableAsString = "I am a String";
console.log(myVariableAsString);

// Number http://www.w3schools.com/jsref/jsref_obj_number.asp
var myVariableAsNumber = 42;
console.log(myVariableAsNumber);


// Objects and Arrays are explained in detail later!
var myVariableAsObject = { key: "value"};
console.log(myVariableAsObject.key);

var myVariableAsArray = ['cat', 'dog', 'bird'];
console.log(myVariableAsArray[0]);  // cat
console.log(myVariableAsArray[1]);  // dog
console.log(myVariableAsArray[2]);  // bird
console.log(myVariableAsArray[3]);  // undefined




// Read this only if you are interested in more details or come back later!

/*
 Are you able to distinguish if you are in a Node.js(Backend, Server) or Browser(Frontend, Client) REPL?
 In the "Browser" console you can type 
 > window        // you will see the Window Object which is the root of the DocumentObjectModel(DOM)
 Window {...}
 
 If you insert process
 > process       // you will see a Reference Error cause you asking for an Object that only exists in Node.js(Backend)
 ReferenceError: process is not defined
 
 
 
 In the "Node.js" console you can type
 > global       // you will see the Global Object which is the root of Node.
 { global: [Circular],
  process: 
   process {
     title: 'node',
     version: 'v4.1.1',
     moduleLoadList: 
      [ 'Binding contextify',
        'Binding natives',
        'NativeModule events',
 
 or
 > process       // you will see the Process Object which gives information about the Node process e.g. "arch: 'x64' and  platform: 'linux'"
process {
  title: 'node',
  version: 'v4.1.1',
  moduleLoadList: 
   [ 'Binding contextify',
     'Binding natives',
     'NativeModule events',
     ...
     'Binding os',
     'NativeModule string_decoder' ],
  versions: 
   { http_parser: '2.5.0',
     node: '4.1.1',
     v8: '4.5.103.33',
     uv: '1.7.4',
     zlib: '1.2.8',
     ares: '1.10.1-DEV',
     modules: '46',
     openssl: '1.0.2d' },
  arch: 'x64',
  platform: 'linux',
  release: 
   { name: 'node',
     sourceUrl: 'https://nodejs.org/download/release/v4.1.1/node-v4.1.1.tar.gz',
     headersUrl: 'https://nodejs.org/download/release/v4.1.1/node-v4.1.1-headers.tar.gz' },
  argv: [ '/home/ubuntu/.nvm/versions/node/v4.1.1/bin/node' ],
  execArgv: [],
  env: 
   {}}
 
 If you insert window
 > window        // you will see a Reference Error cause you asking for an Object that only exists in the Browser(Frontend)
 ReferenceError: window is not defined
*/


/*
Node.js:

https://nodejs.org/dist/latest-v4.x/docs/api/globals.html
console.log():
https://nodejs.org/dist/latest-v4.x/docs/api/console.html


Browser:

Window:
https://developer.mozilla.org/en-US/docs/Web/API/Window
Window.document:
https://developer.mozilla.org/en-US/docs/Web/API/Window/document
Console:
https://developer.mozilla.org/en-US/docs/Web/API/Console
Console.log()
https://developer.mozilla.org/en-US/docs/Web/API/Console/log
*/

/*
Browser Developer Tools:

Chrome:
https://developer.chrome.com/devtools

Firefox:
https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector
https://developer.mozilla.org/en-US/docs/Tools

https://addons.mozilla.org/de/firefox/addon/firebug/
*/


/* Grammar and types
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Basics
*/