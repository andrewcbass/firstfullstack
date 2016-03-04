'use strict';

var moment = require('moment');

exports.sentenceAnalyzer = function(sentence) {
  var stats = {};

  var letterMatch = sentence.match(/[a-z]/ig) || [];
  stats.letterCount = letterMatch.length;
  stats.wordCount = sentence.split(' ').length;

  stats.avgWordCount = stats.letterCount / stats.wordCount;

  return stats;

};

exports.ageCalculator = function(birthday) { //birthday is array of numbers
  var ageDate = {};  //ex:  {"age": 29, "date": "Friday, December 26, 1986"}
  var date = birthday[0] + "/" + birthday[1] + "/" + birthday[2];

  ageDate.age = moment().diff(date, 'years');
  ageDate.date = moment(date).format('dddd, MMMM D, YYYY');
  return ageDate;
}
