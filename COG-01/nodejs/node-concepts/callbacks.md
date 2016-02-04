# Callback Functions

## Sample 1
```javascript
setTimeout(function(){ 
  console.log("Hello"); 
}, 3000);
// Result after three seconds
Hello
```

## Sample 2
```javascript
console.log('Step 1');
syncronFunction();
console.log('Step 3');

function syncronFunction () {
  console.log('Step 2');
}

// Result
Step 1
Step 2
Step 3
undefined
```

## Sample 3
```javascript
setTimeout(function(){ 
  console.log('Step 1')
}, 3000);

console.log('Step 2')

// Result
Step 2
undefined
Step 1
```

## Sample 4
 Do not read files syncron *, it could block your JavaScript Thread!
#### Version 1 with toString() function
```javascript
var fs = require('fs');
var data = fs.readFileSync('./fs-readfile-test.txt'); 
console.log(data.toString());

// Result
Hello COG
```

#### Version 2 with UTF-8 **
```javascript
var fs = require('fs');
var data = fs.readFileSync('./fs-readfile-test.txt', 'UTF-8' );
console.log(data);

// Result
Hello COG
```

## Sample 5
Asyncronous *** is the right way!
```javascript
var fs = require('fs');
// The callback is passed two arguments (err, data), where data is the contents of the file.
fs.readFile('./fs-readfile-test.txt', 'UTF-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// Result
Hello COG
```

More at "result-RDD-homework/convert.js" file.


\* https://nodejs.org/docs/latest-v0.12.x/api/fs.html#fs_fs_readfilesync_filename_options
 
\** https://en.wikipedia.org/wiki/UTF-8

\*** https://nodejs.org/docs/latest-v0.12.x/api/fs.html#fs_fs_readfile_filename_options_callback
