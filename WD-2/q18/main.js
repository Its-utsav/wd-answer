var fs = require("fs");

fs.readFile("./Hello.txt", "utf-8", function (err, data) {
    if (err) {
        console.log("Got Error while reading data " + err);
        return;
    }
    console.log(data);
});

data = "Hello Node JS from utsav !!!";
fs.writeFile("./new-file.txt", data, function (err) {
    if (err) {
        console.log("Error while writing data " + err);
        return;
    }
    console.log("Data write / file created succsefully");
});

newData = "\n This is an example of appending data to the file";

fs.appendFile("./new-file.txt", newData, function (err) {
    if (err) {
        console.log("Error while appending data " + err);
        return;
    }
    console.log("Appended data in file succsefully");
});

fs.rename("./old-name.txt", "./new-name.txt", function (err) {
    if (err) {
        console.log("Error while renaming file " + err);
        return;
    }
    console.log("file renamed");
});

fs.unlink("./del.txt", function (err) {
    if (err) {
        console.log("Error while deleting file " + err);
        return;
    }
    console.log("File deleted succsefully");
});
