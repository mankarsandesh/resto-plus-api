var express = require('express');
var app = express();

// Load all environment variables
require('dotenv').config();

const bodyparser = require('body-parser');

// Connect DB
require('./db/db');


app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})