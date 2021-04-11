var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const chatbotRoutes = require('./routes/chatbot');
const cors = require('cors');

app.get('/', function (req, res) {
   res.send('starting up the server');
})
var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
   );
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
});


app.use('/admin', chatbotRoutes);