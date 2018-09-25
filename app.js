'use strict'

var currencyJson = [];
var currencyList = [];
var currencyType;

// function getList(){
//     $.get('https://free.currencyconverterapi.com/api/v6/currencies');
//     c
// }

function createArray(api, array) {
    $.getJSON(api, function (data) {
        // console.log(data.results);

        // Loop over each item within data.results. 
        $.each(data.results, function (index, currency) {
            currencyJson.push(currency);
            // console.log("currency: ", currency);
        });

        // Populate selects
        $.each(currencyJson, function (index, currency) {
            var symbol = currency.id;
            $('#currentCurrencyType').append(`<option value = ${symbol}>` + currency.currencyName + '</option>');
            // console.log(currency.currencyName);;
        });

        $.each(currencyJson, function (index, currency) {
            var symbol = currency.id;
            $('#newCurrencyType').append(`<option value = ${symbol}>` + currency.currencyName + '</option>');
            // console.log(currency.currencyName);;
        });
    });
}

function populateSelect(selectID) {

}



$(document).ready(function () {
    createArray("https://free.currencyconverterapi.com/api/v6/currencies", currencyJson);
});

// for(var i = 0; i < currencyJson.length; i++){
//     var symbol = currencyJson[i].id;
//     var currency = currencyJson[i].currencyName
//     $('#currentCurrencyType').append(`<option value = ${symbol}>` + currency + '</option>')
// }