var http = require('http');
http.createServer(function (request, response) {

    response.writeHead(200,
    // changed content-type to'text/html'
        {'content-type': 'text/html; charset=utf-8'});

    var body = '<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
        '<meta charset="utf-8">' +
        '<title>Node.js Demo</title>' +
        '</head>' +
        '<body>' +
        '<h1 style="color:blue">Hello World</h1>' +
        '</body>' +
        '</html>';

    response.end(body);
}).listen(process.env.PORT, process.env.IP);
console.log('Webserver is running.');