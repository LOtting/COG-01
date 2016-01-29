# Node Modules

Node modules are [CommonJS](http://www.commonjs.org/) modules.

Modules are like "Lego" bricks with a defined interface.
You can stick Lego bricks together and form greater things, like a Haus or a Spacestation.
Similar with Node(Lego) Modules(Bricks) you can form bigger systems with small modules.

#### Create Module
With "module.exports" you create a Module.
```javascript
//  lib/myModule.js

function myModule() {
  this.sayHello = function() {
    return 'Hello!';
  }

  this.sayCOG = function() {
    return 'COG!';
  }
}

module.exports = myModule;
```


#### Use Module
With require() you load a Module.
```javascript
// src/main.js

var myModule = require('myModule');

myModule.sayHello(); // 'Hello!'
myModule.sayCOG(); // 'COG!'
```


[JavaScript Modules: A Beginner’s Guide](https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.fb8nzyo9w)
read "CommonJS and AMD" and have a look at "Native JS".

[Node.js v4.2.6 Documentation](https://nodejs.org/dist/latest-v4.x/docs/api/) all about the Node Modules


Node Modules v4.2.6
https://nodejs.org/dist/latest-v4.x/docs/api/modules.html

## Core Modules
Node.js has several modules compiled into the binary.

The core modules are defined within Node.js's source and are located in the [lib/](https://github.com/nodejs/node/tree/v5.x/lib) folder.

Core modules are always preferentially loaded if their identifier is passed to require(). For instance, require('http') 
will always return the built in HTTP module, even if there is a file by that name.



### Node.js documentation of "Console"

You know as "console.log()"

#### Different Node versions by Sample:

Application Programming Interface (API) and Sourcecode at GitHub.

### v.0.12
API: https://nodejs.org/docs/latest-v0.12.x/api/console.html

Github Source: https://github.com/nodejs/node/blob/v0.12/lib/console.js

### v4.2.6

API: https://nodejs.org/dist/latest-v4.x/docs/api/console.html

Github Source: https://github.com/nodejs/node/blob/v4.x/lib/console.js

### v5.x

API: https://nodejs.org/dist/latest-v5.x/docs/api/console.html

Github Source: https://github.com/nodejs/node/blob/v5.x/lib/console.js


##### Find, use and change Sourcecode was never easier!