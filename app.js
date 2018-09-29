'use strict'

const currencyJson = [];
let currentCurrency;
let newCurrency;
let transferSelector;
let transferRate;

// function getList(){
//     $.get('https://free.currencyconverterapi.com/api/v6/currencies');
//     c
// }

function getCurrencyData(api, array) {
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



$(document).ready(function () {
    getCurrencyData("https://free.currencyconverterapi.com/api/v6/currencies", currencyJson);
    
    // Calculate Button Event Handler
    $('#calculateBtn').on('click', function(){
        currentCurrency = $('#currentCurrencyType').val();
        newCurrency = $('#newCurrencyType').val();
        transferSelector = currentCurrency+'_'+newCurrency;
        // console.log(currentCurrency, newCurrency);

        $.get('https://free.currencyconverterapi.com/api/v6/convert?q='+transferSelector, function(data){
            $.each(data.results, function(index, option){
                transferRate = option.val;
                console.log(transferRate);
            });
        });
    });

});
