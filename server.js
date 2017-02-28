var express = require('express');
var nodemailer = require('nodemailer');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '.')));


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'boceltic2000@gmail.com',
        pass: ''
    }
});


app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.post('/send', function (req, res) {
  var mailOptions = {
      from: req.query.mail, // sender address
      to: 'boceltic2000@gmail.com', // list of receivers
      subject: 'Rental Inquiry', // Subject line
      text: req.query.message
  }
  console.log(mailOptions);
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Email successfully sent!');
  });
});


// app.use('/', function(req, res) {
//   res.send("Checking Express program");
//   console.log(req.cookies);
//   console.log('==========');
//   console.log(req.session);
// });

// require('./app/routes.js')(app, passport);

app.listen(8000);
console.log('Server running on port:  ' + 8000);
