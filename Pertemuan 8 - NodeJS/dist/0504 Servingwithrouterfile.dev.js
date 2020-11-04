"use strict";

var port = 3000,
    http = require("http"),
    httpStatusCodes = require("http-status-codes"),
    router = require("./router"),
    fs = require("fs"),
    plainTextContentType = {
  "Content-Type": "text/plain"
},
    htmlContentType = {
  "Content-Type": "text/html"
},
    customReadFile = function customReadFile(file, res) {
  fs.readFile("./".concat(file), function (errors, data) {
    if (errors) {
      console.log("Error reading the file...");
    }

    res.end(data);
  });
};

router.get("/", function (req, res) {
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end("INDEX");
});
router.get("/index.html", function (req, res) {
  res.writeHead(httpStatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});
router.post("/", function (req, res) {
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end("POSTED");
});
http.createServer(router.handle).listen(3000);
console.log("The server has started and is listening to port number : ? ".concat(port));