"use strict";

var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.send('Helloworld');
});
app.post('/', function (req, res) {
  res.send('ini adalah post req');
});
app.put('/', function (req, res) {
  res.send('put req telah dijalankan');
});
app["delete"]('/', function (req, res) {
  res.send('delete request pada suatu user!');
});
app.use(express["static"]('public')); //specified port

app.listen(3000);