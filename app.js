const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

var helper = require('sendgrid').mail;

var sg = require('sendgrid')(process.env.MAIL_API_KEY);



// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'build')));


app.post('/sendmail', (req, res) => {



  from_email = new helper.Email("noreply@dreamzz.ru");
  to_email = new helper.Email("idreamzzer@gmail.com");
  subject = "Got message from dreamzz.ru";
  var text = "Почта: " + req.body.email + " Имя: " + req.body.username + " Сообщение:" + req.body.message
  content = new helper.Content("text/plain", text);
  mail = new helper.Mail(from_email, subject, to_email, content);

  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function(error, response) {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  })


});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

module.exports = app;
