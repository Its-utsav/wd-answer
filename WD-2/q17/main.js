var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<p> Hello to Node JS by Utsav Dhimmar on browser</p>");
    console.log("Hello to Node JS by Utsav Dhimmar on node js Console");
    res.end();
}).listen(3000);