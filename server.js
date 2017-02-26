var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '.')));

// app.use('/', function(req, res) {
//   res.send("Checking Express program");
//   console.log(req.cookies);
//   console.log('==========');
//   console.log(req.session);
// });

// require('./app/routes.js')(app, passport);

app.listen(8000);
console.log('Server running on port:  ' + 8000);
