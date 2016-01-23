/* 
Execute from Shell
yourAccount:~/workspace/nodejs/examples $ node 02-server.js
Webserver is running.

abort with "Ctrl-c" two times
*/

// 'http' is a node.js module
// https://nodejs.org/dist/latest-v4.x/docs/api/http.html
// To use the HTTP server and client one must require('http').
// http.createServer()
// https://nodejs.org/dist/latest-v4.x/docs/api/http.html#http_http_createserver_requestlistener
// .listen()
//  https://nodejs.org/dist/latest-v4.x/docs/api/http.html#http_server_listen_handle_callback
var http = require('http');
// http.createServer().listen(8080, '127.0.0.1');
http.createServer().listen(process.env.PORT, process.env.IP);

console.log('Webserver is running.');
