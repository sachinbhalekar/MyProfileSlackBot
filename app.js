
var express = require('express');
var bodyParser = require('body-parser');
var ProfileInfo = require('./ProfileInfo');
var app = express();
var port = process.env.PORT || 1337;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!'); });

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.post('/hello', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello ' + userName + ', welcome to Sachin\'s Slack channel ! I\'ll be your guide to fetch Sachin\'s profile. \n What would you like to know about Sachin \n 1. LinkedIn Profile \n 2. GitHub Profile \n 3. Resume \n 4. Transcripts \n HackerRank Profile '
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

app.post('/linkedIN', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text :  'To Access LinkedIn Profile, Please visit the URL \n' + ProfileInfo.LinkedIN
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

app.post('/GitHub', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text :  'To Access GitHub Profile, Please visit the URL \n' + ProfileInfo.GitHub
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

app.post('/HackerRank', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text :  'To Access HackerRank Profile, Please visit the URL \n' + ProfileInfo.HackerRank
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

app.post('/Transcripts', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text :  'To Access Transcripts, Please visit the URL \n' + ProfileInfo.Transcripts
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

app.post('/Resume', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text :  'To Access Resume, Please visit the URL \n' + ProfileInfo.Resume
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});
