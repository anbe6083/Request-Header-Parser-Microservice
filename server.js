// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var os = require('os');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  var ip = (request.header('x-forwarded-for') || request.connection.remoteAddress).split(",")[0];
  var lang = request.headers['accept-language'].split(",")[0];
  
  var test = {
    address: ip,
    language: lang,
    OS: os.platform()
  };
  response.json(test);
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
