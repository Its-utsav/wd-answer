var http = require('http');
http.createServer(function (req, res) {
    res.write("<p> Hello to Node JS by Utsav Dhimmar on browser</p>");
    console.log("Hello to Node JS by Utsav Dhimmar on node js Console");
    res.end();
}).listen(3000);