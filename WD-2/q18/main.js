var fs = require("fs")

// read file
fs.readFile("./Hello.txt", "utf-8", function (err, data) {
    if (err) {
        console.log("Got Error while reading data " + err)
        return
    }
    console.log(data)
    // console.log(data.toString("utf-8"))
})

//
data = "Hello world !!!"
fs.writeFile("./new-file.txt", data, function (err) {
    if (err) {
        console.log("Error" + err)
        return
    }
    console.log("Data write / file created succsefully")
})


newData = "\n This is an example of appending data to the file"
// Append data in file
fs.appendFile('./new-file.txt', newData, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log("Appended data in file succsefully")
})
// 4. Rename file
fs.rename('./old-name.txt', './new-name.txt', function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log("file renamed");
})
// 5. Delete file

fs.unlink("./del.txt", function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log("File deleted succsefully")
})
