"use strict";
const PORT = 3000;

var http = require('http');
var util = require('./util.js');
var md5 = require('md5');

var server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  var urlParts = req.url.match(/[^/]+/g);


  if(urlParts) {
    var path = urlParts.shift();

    switch(path) {
      case 'square':
        var num = parseInt(urlParts[0]);
        var square = Math.pow(num, 2);
        res.write(square.toString());
        break;
      case 'sum':
        var sum = urlParts.reduce(function(sum, num) {
          return sum + parseInt(num);
        }, 0);
        res.write(sum.toString());
        break;
      case 'sentence':
        var sentence = decodeURI(urlParts[0]);
        var statsObj = util.sentenceAnalyzer(sentence);
        res.write( JSON.stringify(statsObj) );
        break;
      case 'email':
        res.write(md5(urlParts[0]));
        break;
      case 'birthday':
        var age = util.ageCalculator(urlParts);
        res.write ( JSON.stringify(age) );
    }
  }
  res.write('\n');
  res.end();
});

server.listen(PORT, function(err) {
  console.log(`Server listening on ${PORT}`);

});

//ports above ~ 2000 are usable.. up to 60000ish
