'use strict';

$(document).ready(init);

function init() {

  $('#gravGo').on('click', gravitar);
  $('#squareGo').on('click', square);
  $('#sumGo').on('click', sumEm);
  $('#sentGo').on('click', sentence);
  $('#ageGo').on('click', age);

}

function gravitar() {
  var email = $('#gravitar').val();
  $('#gravitar').val('');

  $.ajax({
    method: 'GET',
    url:`http://localhost:3000/email/${email}`,
    success: function(data) {
      $('.gravPhoto').append("<img src='http://www.gravatar.com/avatar/" + data + "'>");
    },
    error: function(err) {
      console.log("ERROR: ", err);
    },
  });
}

function square() {
  var num = $('#squareIn').val();
  $('#squareIn').val('');

  $.ajax({
    method: 'GET',
    url:`http://localhost:3000/square/${num}`,
    success: function (data) {
      $('.sqResult').show();
      $('.sqResult span').append(data);

    },
    error: function(err) {
      console.log("ERROR: ", err);
    },
  });
}

function sumEm() {
  var nums = $('#sumIn').val(); //split then join on /
  $('#sumIn').val('');

  var arr = nums.split(/,\s*/g);
  var list = arr.join('/');

  $.ajax({
    method: 'GET',
    url:`http://localhost:3000/sum/${list}`,
    success: function (data) {
      $('.sumResult').show();
      $('.sumResult span').append(data);
    },
    error: function(err) {
      console.log("ERROR: ", err);
    },
  });
}

function sentence() {
  var sent = $('#sentIn').val();
  $('#sentIn').val('');

  $.ajax({
    method: 'GET',
    url:`http://localhost:3000/sentence/${sent}`,
    success: function (data) {
      $('.sentResult').show();
      $('.sentResult span').append(data);
    },
    error: function(err) {
      console.log("ERROR: ", err);
    },
  });

}

function age() {
  var date = $('#ageIn').val();
  $('#ageIn').val('');

  $.ajax({
    method: 'GET',
    url:`http://localhost:3000/birthday/${date}`,
    success: function (data) {
      var dataOb = JSON.parse(data);
      $('.ageResult').show();
      $('.agePrint').text(dataOb.age);
      $('.dayPrint').text(dataOb.date);
    },
    error: function(err) {
      console.log("ERROR: ", err);
    },
  });

}
