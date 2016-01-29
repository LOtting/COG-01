# Node and NPM Commandline 

## Node Commands
[Node.js](https://nodejs.org/en/)

Command                     |   Explanation
-------------------------   |   ----------------
$ node -v                   |   show node version
|   |   |
$ node [file]               |   run file with node
$ node 01-server.js         |   run server.js with node
|||
$ node                      |   run node [REPL](https://nodejs.org/dist/latest-v4.x/docs/api/repl.html) see [REPL Driven Development](http://thinkingonthinking.com/scripting-a-csv-converter/) (RDD)
> fs = require('fs');       |   require [File System module](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html)
fs.readFile('./movies.csv', function(e, data) { |   call fs.readfile(), you nead a movies.csv file
... console.log(data);      |   log data
... })                      |   close function
undefined                   | no return value
 > <Buffer 74 69 74 6c 65 3b ...>   |  is what the REPL will say


## Node Package Manager(NPM) Commands
[NPM websearch](https://www.npmjs.com/)

Command                     |   Explanation
----------------------------|   ----------------
$ npm list                  |   list of installed packages
$ npm install [packageName] |   install package into local folder
$ npm install underscore    |   install underscore into current folder
|   |   |
$ npm uninstall [packageName] |   uninstall package into local folder
$ npm uninstall underscore    |   uninstall underscore into current folder
|   |   |
$ npm search [keyword keyword] | search packages with keywords
$ npm search comment json     |   search for comment-json



[Node.js reference Cards](https://dzone.com/refcardz/nodejs) 


[Introduction to npm](http://modernweb.com/2014/03/31/introduction-to-npm/?ref=dzone)
