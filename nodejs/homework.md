# Homework


## 1.) Follow the REPL Driven Development (RDD) tutorial at the "interactive-mode.md" file.

Creat a folder "RDD-workshop" cd into it and follow the tutorial.

Start at line "RDD stands for REPL Driven Development".
Information about TDD and BDD is not important yet!



### Hints: 
You have to insert REPL samples line by line and hit "Return",
copy and paste more than one line does not work cause of "...".



Use the Linux Manual to get information about "cat" Program.

```shell
$ man cat
```
##### REPLing out the convert function
At "REPLing out the convert function" do not forget to

```shell
> jsony = require('./jsony');
```
in the second run.


At jsony.js file ther is the var "JSONy" it should always be written "JSONy" and not "jsony".

Right:
```javascript
JSONy.convert = convert;
module.exports = JSONy
```

Wrong:
```javascript
jsony.convert = convert;
module.exports = jsony
```

But in convert.js file "jsony" is correct!
```javascript
var jsony = require('./jsony');
```

##### The last mile
For "The last mile" you have to
```shell
$ npm install underscore
```
in your "RDD-workshop" folder

Copy all the JavaScript from "You’ll end up with:" till "And, your command line client:" and past it into "jsony.js"

and add this four lines at the beginning of the file "jsony.js"

```javascript
var fs = require('fs');
// This line is implicit cause of using the Underscore JavaScript library
var _ = require('underscore');
var JSONy = function() {};
```
NPM will be explained in detail next time.


## 2.) At FreeCodeCamp follow "Start a Nodejs Server".

You can use your existing workspace on cloud9.
http://www.freecodecamp.com/challenges/start-a-nodejs-server