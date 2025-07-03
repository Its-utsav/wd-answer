// for runing program uncommnet it

// reading file
// var fs = require("fs");
// var http = require("http");

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     fs.readFile("./read.html", function (err, data) {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             res.write(data);
//             console.log(data.toString());
//             res.end()
//         }
//     });
// }).listen(8000);

// // creating file
// var fs = require("fs");
// var http = require("http");
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     var data = "Hello Node JS from utsav !!!";
//     fs.writeFile("./new-file.txt", data, function (err) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(data);
//         res.end(data)
//     });
// }).listen(8000);

// // appending
// var fs = require("fs");
// var http = require("http");
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     var newData = "\n utsav at end of the file";
//     fs.appendFile("./new-file.txt", newData, function (err) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(newData);
//         res.end(newData)
//     });
// }).listen(8000);

// renaming
// var fs = require("fs");
// var http = require("http");
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     fs.rename("./new-file.txt", "./new-name.txt", function (err) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log("file renamed");
//         res.end("file renamed");
//     });
// }).listen(8000);

// delete
var fs = require("fs");
var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.unlink("./new-name.txt", function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("File deleted succsefully");
      res.end("File deleted succsefully");
    });
  })
  .listen(8000);
