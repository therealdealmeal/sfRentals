var nodemailer = require('nodemailer');
var smtpTransport = nodemailer.createTransport(smtpTransport({
  service: 'Gmail',
  auth: {
    user: 'boceltic2000@gmail.com',
    pass: 'testingthewaters'
  }
}));

var mailOptions = {
  from: req.body.email,
  to: boceltic2000@gmail.com,
  subject: "Nodemailer Rental Inquiry " + req.body.name,
  text: "Hello World" // plain text
  html: "<b>"+req.body.comment+"<b>" //html body of the index.html file
}

smtpTransport.sendMail(mailOptions, function (err, res) {
    if(err){
        console.log('Error');
    } else {
        console.log('Email Sent');
    }
    smtpTransport.close();
});



//
// $(document).ready(function(){
//     var from,to,subject,text;
//     $("#send_email").click(function(){
//         to=$("#to").val();
//         subject=$("#subject").val();
//         text=$("#content").val();
//         $("#message").text("Sending E-mail...Please wait");
//         $.get("http://localhost:8000/send",{to:to,subject:subject,text:text},function(data){
//         if(data=="sent")
//         {
//             $("#message").empty().html("
//
// Email is been sent at "+to+" . Please check inbox!
//
// ");
//         }
//
// });
//     });
// });
