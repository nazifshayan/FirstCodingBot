var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'ContentType': 'text/html'});
    res.end('Hello World!');
}

).listen(3000);