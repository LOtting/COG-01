var http = require('http');
// add a net node.js module 'url'
// https://nodejs.org/dist/latest-v4.x/docs/api/url.html
// url.parse(urlStr[, parseQueryString][, slashesDenoteHost]) Take a URL string, and return an object.
var url = require('url');
http.createServer(function (request, response) {
    response.writeHead(200,
        {'content-type': 'text/plain; charset=utf-8'});

    var urlString = url.parse(request.url, true);
    var body = 'Hello ' + urlString.query.name;

    response.end(body);
}).listen(process.env.PORT, process.env.IP);
console.log('Webserver is running.');