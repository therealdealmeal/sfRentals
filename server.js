var express = require('express');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = (process.env.PORT || 8000);
var credential = require(path.join(__dirname, './public/js/email.js'));

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: credential.username,
    pass: credential.password
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '.')));


// app.get('/email', function (req, res) {
//   res.sendMail('index.html');
//   console.log('Nodemailer reading console log...');
// });

app.post('/email/send', function (req, res) {
  console.log('Attempting to send email...');
  // if(req.body.email == '' || req.body.name == '') {
  //   res.send("Error: Email & Name should not be Blank");
  //   return false;
  // }
  var data = req.body;
  console.log(data);

  var mailOptions = {
    sender: data.email,
    to: "boceltic2000@gmail.com",
    subject: "Pacifica Rental Inquiry " + " | " + data.name + " | " + data.email,
    text: "Hello World", // plain text
    html: "<b>"+data.comment+"<b>" //html body of the index.html file
  }

  transporter.sendMail(mailOptions, function (err, res, req) {
      if(err){
          console.log('Error');
      } else {
          return console.log('Email Sent ');
      }
      transporter.close();
  });
  res.end();
});



app.listen(port);
console.log('Server running on port:  ' + port);
