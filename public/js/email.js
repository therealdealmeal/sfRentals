$(document).ready(function () {
  var from,to,subject,text;
    $("#send_email").click(function () {
      name=$("#name").val();
      mail=$("#mail").val();
      message=$("#message").val();
      $("#note").text("Sending email...Please wait");
      $.get("http:localhost:8000/send",
    {name:name, mail:mail, message:message}, function (data) {
      if(data=="sent") {
        $("#message").empty().html("Email successfully sent!");
      }
    });
  });
});
