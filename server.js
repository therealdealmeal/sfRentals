var express = require('express');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = (process.env.PORT || 8000);

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: 'boceltic2000@gmail.com',
    pass: 'testingthewaters'
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '.')));


app.get('/email', function (req, res) {
  res.sendMail('index.html');
  // console.log('Nodemailer reading console log...');
});

app.post('/email/send', function (req, res) {
  console.log('Attempting to send email...');
  // if(req.body.email == '' || req.body.name == '') {
  //   res.send("Error: Email & Name should not be Blank");
  //   return false;
  // }
  var data = req.body;
  console.log(data);

  var mailOptions = {
    from: data.email,
    to: "boceltic2000@gmail.com",
    subject: "Nodemailer Rental Inquiry " + data.name + " | " + data.email,
    text: "Hello World", // plain text
    html: "<b>"+data.comment+"<b>" //html body of the index.html file
  }

  transporter.sendMail(mailOptions, function (err, res) {
      if(err){
          console.log('Error');
      } else {
          console.log('Email Sent '+ req.body);
      }
      transporter.close();
  });
  // res.render("index");
});



app.listen(port);
console.log('Server running on port:  ' + port);
