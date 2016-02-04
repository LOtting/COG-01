#!/usr/bin/env node


// Step Keeping it DRY:
/*
var jsony = require('./jsony');

jsony.load('./movies.csv', function(e, raw) {
	jsony.convert(e, raw, function(e, result) {
	console.log(result);
	});
});
*/




// Final Step:  Belongs to the fourth Step of "jsony.js"

var jsony = require('./jsony');

jsony.load(process.argv[2], function(e, raw) {
  jsony.convert(e, raw, function(e, result) {
    if (e) {
      console.log(e);
      process.exit(1);
    }
    console.log(JSON.stringify(result));
  });
});
