/* 
Execute from Shell
yourAccount:~/workspace/nodejs/examples $ node 03-server.js
Webserver is running.

But this does not work in Cloud9 IDE

abort with "Ctrl-c" two times
*/

/*
This code does not run like expected!
var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200,
        {'content-type': 'text/plain; charset=utf-8'});
    response.write('Hello ');
    response.end('World\n');
}).listen(8080, '127.0.0.1');
console.log('Webserver is running.');
*/

/*
If You are in this file an hit the "Run" button 

you will see 
Your code is running at https://cog01-goyapa.c9users.io.
Important: use process.env.PORT as the port and process.env.IP as the host in your scripts!

Debugger listening on port 15454
Webserver is running.

You have to change the Port and IP like this!
*/

var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200,
        {'content-type': 'text/plain; charset=utf-8'});
    response.write('Hello ');
//    response.write('COG ');
    response.end('World!\n');
}).listen(process.env.PORT, process.env.IP);
console.log('Webserver is running.');

/*
After executing with the "Run" button you are able to "click" the link
at for Example:
Your code is running at https://cog01-goyapa.c9users.io. 
in your shell
and choose between "Open", "Open In Preview" or "Copy".
if you click "Open" a Browser window will be opened and You see "Hello World!"

https://docs.c9.io/docs/writing-a-nodejs-app
*/