var http = require("http")
var url = require('url')
http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write("Hello world \n")
    var q_info = url.parse(req.url, true);
    var query_data = (q_info.query);
    // res.write(req.url)
    res.write("Name : " + query_data.name)
    res.write("age : " + query_data.age)
    res.end()
}).listen(8000)