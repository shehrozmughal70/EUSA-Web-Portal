var express = require('express');  
var app = express();
const bodyParser = require("body-parser");

app.get('/', function (req, res) {  
   res.send('starting up the server');  
})  
var server = app.listen(8080, function () {  
var host = server.address().address  
  var port = server.address().port  
 console.log("Example app listening at http://%s:%s", host, port)  
})  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));