"use strict";

var port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    fs = require("fs");

var routeMap = {
  "/": "views/index.html"
};
http.createServer(function (req, res) {
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });

  if (routeMap[req.url]) {
    fs.readFile(routeMap[req.url], function (error, data) {
      res.write(data);
      res.end();
    });
  } else {
    res.end("<h1>Sorry, not found.</h1>");
  }
}).listen(port);