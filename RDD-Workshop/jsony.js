var fs = require('fs');
var JSONy = function() {};

JSONy.load = function(filename) {
  fs.readFile(filename, function(e, data) {
    var row = data.toString();
    console.log(row);
  });
}

module.exports = JSONy