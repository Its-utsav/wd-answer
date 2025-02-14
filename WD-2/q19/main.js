var http = require("http")
var url = require('url')
http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write("<p>Hello world <p>")
    var q_info = url.parse(req.url, true);
    var query_data = (q_info.query);
    // res.write(req.url)
    res.write("<p> Name : " + query_data.name + " </p>")
    res.write("<p> age : " + query_data.age + " </p>")
    res.end()
}).listen(8000)