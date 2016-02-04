# First Steps

### [Comments](http://www.w3schools.com/js/js_comments.asp)

```javascript
// This is a comment 
```
### [Console](https://developer.mozilla.org/en-US/docs/Web/API/Console) 
##### The Console object provides access to the browser's debugging console.
##### The [console.log()](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) methode outputs a message to the Web Console.
```javascript
console.log("hello world universal sample");
```
For general output of logging information. 

In the Browser Development Tools() of Firefox or Chrome etc.
```javascript
> console.log("hello world in the browser");
```

Or run this in the terminal with node.js
If you run node in the Terminal you will get a ["Read Eval Print Loop"(REPL)](https://github.com/Goyapa/COG-01/blob/master/commandline/node-and-npm-commands/node-npm-commands.md).
```javascript
  $ node          // ->return
  > console.log("hello world node");
  hello world     // response
  undefined
```


Insert the console.log() function call into a "New Immediate Window" (click on plus sign in Cloud9 editor, there you will find "New Immediate Window")
```javascript
 > console.log("hello world at Immediate Window");
```
 Hint: Immediate Window is like a Browser Console prepared for you from Cloud9. 


### [Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
The "var" statement declares a variable,
 
```javascript
var zero;
```
optionally initializing it to a value.
```javascript
var zero = 0;
```

### [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

```javascript
var myVariableAsString = "I am a String";
console.log(myVariableAsString);
```
### [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp)
```javascript
var myVariableAsNumber = 42;
console.log(myVariableAsNumber);
```

### Objects and Arrays are explained later in detail !
```javascript
var myVariableAsObject = { key: "value"};
console.log(myVariableAsObject.key);
```
```javascript
var myVariableAsArray = ['cat', 'dog', 'bird'];
console.log(myVariableAsArray[0]);  // cat
console.log(myVariableAsArray[1]);  // dog
console.log(myVariableAsArray[2]);  // bird
console.log(myVariableAsArray[3]);  // undefined
```

## Read the following lines only if you are interested in more details or come back later!



### [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

### [JavaScript Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Basics)

### [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model#HTML_interfaces)
Window is the main JavaScript object root, aka the global object in a browser, also can be treated as the root of the document object model([DOM](http://stackoverflow.com/questions/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript)).

### Browser or Node?
##### Are you able to distinguish if you are in a Node.js(Backend, Server) REPL or Browser(Frontend, Client) Console?

In the "Browser" console you can type
```javascript
 > window    // window object which is the root of the document object model(DOM)
 Window {...}
```

or type
```javascript
 > window.document    // window.document or just document is the main object of the "visible" document object model(DOM)
 #document
  <!DOCTYPE html>
  <html>
   <head>...<head>
   <body>...<body>
   ...
   </html>
```

```javascript
 > window.screen    // window.screen is a small information object about physical screen dimensions
 Screen {...}
 >window.screen.width
 1920
 >window.screen.hight
 1200
```


but if you insert process
```javascript
 > process    // you will see a "Reference Error" cause you asking for an object that only exists in Node.js(Backend)
 ReferenceError: process is not defined
```
 
 
In the "Node.js" console you can type
```javascript
> global       // you will see the "Global Object" which is the root of Node.
 { global: [Circular],
  process: 
   process {
     title: 'node',
     version: 'v4.1.1',
     moduleLoadList: 
      [ 'Binding contextify',
        'Binding natives',
        'NativeModule events',...]
```
 
 or
 
```javascript
 > global.process    // you will see the "Process Object" which gives information about the Node process e.g. "arch: 'x64' and  platform: 'linux'"
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

```
 
 If you insert window
```javascript
 > window    // you will see a "Reference Error" cause you asking for an object that only exists in the Browser(Frontend)
 ReferenceError: window is not defined
```

#### Node.js:

[Global Objects](https://nodejs.org/dist/latest-v4.x/docs/api/globals.html)

[Node console.log() method](https://nodejs.org/dist/latest-v4.x/docs/api/console.html)


#### Browser:

[Window Object](https://developer.mozilla.org/en-US/docs/Web/API/Window)

[Window.document](https://developer.mozilla.org/en-US/docs/Web/API/Window/document)

[Console Object](https://developer.mozilla.org/en-US/docs/Web/API/Console) provides access to the browser's debugging console (e.g., the [Web Console](https://developer.mozilla.org/en-US/docs/Tools/Web_Console) in Firefox).

[Browser Console.log() method](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)

### Browser Developer Tools:

#### Google Chrome:

[Devtools](https://developer.chrome.com/devtools)

#### Mozilla Firefox:

[Page Inspector](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector)

[Tools](https://developer.mozilla.org/en-US/docs/Tools)

[Firebug](https://addons.mozilla.org/de/firefox/addon/firebug/)

#### Microsoft Edge

[F12 tools](https://msdn.microsoft.com/en-us/library/dn904498(v=vs.85).aspx)




