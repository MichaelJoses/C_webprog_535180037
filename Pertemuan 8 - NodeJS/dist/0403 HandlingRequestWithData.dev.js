"use strict";

var port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();

var getJSONString = function getJSONString(obj) {
  return JSON.stringify(obj, null, 2);
};

app.on("request", function (req, res) {
  var body = [];
  req.on("data", function (bodyData) {
    body.push(bodyData);
  });
  req.on("end", function () {
    body = Buffer.concat(body).toString();
    console.log("Request Body Contents: ".concat(body));
  });
  console.log("Method: ".concat(getJSONString(req.method)));
  console.log("URL: ".concat(getJSONString(req.url)));
  console.log("Headers: ".concat(getJSONString(req.headers)));
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });
  var responseMessage = "<h1>This will show on the screen.</h1>";
  res.end(responseMessage);
});
app.listen(port);
console.log("The server has started and is listening to port number : ? ".concat(port));