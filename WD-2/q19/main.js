var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html",
    });

    var queryData = url.parse(req.url, true).query;

    var name = queryData.name;
    var age = queryData.age;

    if (name && age) {
        res.write("<p> Name: " + name + "</p>");
        res.write("<p> Age: " + age + "</p>");
    } else {
        res.write("<p>Please add <b>query parameter</b> . </p>");
    }
    console.log("Query parameters ", name, age);
    res.end();
}).listen(8000);