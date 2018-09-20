'use strict'

var currencyJson;
var currencyType;

function getList(){
    fetch('https://free.currencyconverterapi.com/api/v6/currencies')
    .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        JSON.stringify(myJson);
        currencyJson = myJson.results;
      });
}

function parseList(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

$(document).ready(function(){
     getList();
});