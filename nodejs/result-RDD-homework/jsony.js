// Link and results of the tutorial "Try RDD!": 
// http://thinkingonthinking.com/scripting-a-csv-converter/


// Step one 
// Save your learnings

/* 
// part one added with cat command in REPL
var fs = require('fs');
var JSONy = function() {};
module.exports = JSONy
// part two added with editor
JSONy.load = function(filename) {
    fs.readFile(filename, function(e, data) {
        var row = data.toString();
        console.log(row);
    });
}
*/

/* REPLing out the convert function
* $ node
* > jsony = require('./jsony');
* { [Function] load: [Function] }  // this is the result
* > jsony.load('./movies.csv')
* undefined
* > title;year ;director;genres
* The Artist   ;2009;  Hazanavicius;Comedy,Drama
* Dead Man Down;2013;Niels Arden Oplev;Action, Crime
*
*/


// Step 2: You can add a callback hook in the load function of ‘jsony.js’ as follows:
/*
var fs = require('fs');
var JSONy = function() {};

JSONy.load = function(filename, cb) {
  fs.readFile(filename, cb);
}
module.exports = JSONy;
*/


// Step 3: The previous insights and new sketches for code ideas are the right amount of code to add into the JSONy module as follows:
/*
var fs = require('fs');
var JSONy = function() {};

JSONy.load = function(filename, cb) {
  fs.readFile(filename, cb);
}

function _extractRows(raw) {
  return raw.toString().split('\n')
}

function _splitFields(line) {
  return line.split(';');
}

var out = [];
function convert(e, raw, cb) {
  var lines = _extractRows(raw);

  for (var i=0; i < lines.length; i++) {
    var line = lines[i];
    var fields = _splitFields(line);
    out.push(fields);
  } 

  cb(e, out);
}

JSONy.convert = convert;

module.exports = JSONy
*/



// Step 4:  Belongs to the Final Step of "convert.js"
/*
var fs = require('fs');
// This line is implicit cause of using the Underscore JavaScript library, you have to "npm install underscore"
// Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects. http://underscorejs.org/
var _ = require('underscore');
var JSONy = function() {};

JSONy.load = function(filename, cb) {
  fs.readFile(filename, cb);
}

function _extractRows(raw) {
  return raw.toString().split('\n')
}

function _trimArray(array) {
  return array.map(function(str) { return str.trim() });
}

function _splitFields(line) {
  return _trimArray(line.split(';'));
}

var out = [];
function convert(e, raw, cb) {

  if (!raw) {
    cb("no input", null);
    return
  }

  var lines = _extractRows(raw);

  var head = JSONy.head;

  // use first line as header if available
  if (JSONy.HEAD) {
    start = JSONy.HEAD;
    head = _splitFields(lines[0]);
  }

  if (!head) {
    cb("No header specified", null);
    return;
  }

  for (var i=0; i < lines.length-1; i++) {
    var line = lines[i];
    var fields = _splitFields(line);
    out.push(_.object(head, fields));
  } 

  cb(e, out);
}

JSONy.HEAD = 1; // use first line as header
JSONy.convert = convert;

module.exports = JSONy;
*/




// Step 5 Refactoring jsony.js
/*
var fs = require('fs');
// This line is implicit cause of using the Underscore JavaScript library, you have to "npm install underscore"
// Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects. http://underscorejs.org/
var _ = require('underscore');
var JSONy = function() {};
var out = [];  // variables in JavaScript should be declared at the top of a module or function!

JSONy.load = function(filename, cb) {
  fs.readFile(filename, cb);
}

function _extractRows(raw) {
  return raw.toString().split('\n')
}

function _trimArray(array) {
  return array.map(function(str) { return str.trim() });
}

function _splitFields(line) {
  return _trimArray(line.split(';'));
}

function convert(e, raw, cb) {
  var lines = _extractRows(raw);
  var head = JSONy.head;
  console.log(JSONy.head);

  if (!raw) {
    cb("no input", null);
    return
  }

  // use first line as header if available
  if (JSONy.HEAD) {
    var start = JSONy.HEAD;
    head = _splitFields(lines[0]);
  }

  if (!head) {
    cb("No header specified", null);
    return;
  }
  
// before only prints one document: for (var i=0; i < lines.length-1; i++)
  for (var i=0; i < lines.length; i++) {
    var line = lines[i];
    var fields = _splitFields(line);
    out.push(_.object(head, fields)); // see http://underscorejs.org/#object
  } 

  cb(e, out);
}

JSONy.HEAD = 1; // use first line as header
JSONy.convert = convert;

module.exports = JSONy;
*/