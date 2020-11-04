"use strict";

var port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    fs = require("fs");

var getViewUrl = function getViewUrl(url) {
  return "views".concat(url, ".html");
};

http.createServer(function (req, res) {
  var viewUrl = getViewUrl(req.url);
  fs.readFile(viewUrl, function (error, data) {
    if (error) {
      res.writeHead(httpStatus.NOT_FOUND);
      res.write("<h1>FILE NOT FOUND</h1>");
    } else {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
      });
      res.write(data);
    }

    res.end();
  });
}).listen(port);
console.log("The server has started and is listening to port number : ? ".concat(port));