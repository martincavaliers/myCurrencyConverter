'use strict';

const GBP = {
        name: "British Pounds",
        symbol: "£",
        code: "GBP"
    };

    const USD = {
        name: "American Dollars",
        symbol: "$",
        code: "USD"
    };

    const EUR = {
        name: "Euros",
        symbol: "€",
        code: "EUR"
    };

    const JPY = {
        name: "Japanese Yen",
        symbol: "¥",
        code: "JPY"
    };
    
    const CAD = {
        name: "Canadian Dollars",
        symbol: "$",
        code: "CAD"
    };

    const CHF = {
        name: "Swiss Franc",
        symbol: "CHF",
        code: "CHF"
    };

let originalCurrency;



// Document ready wrapper
$(document).ready(function(){

    $.get( "https://free.currencyconverterapi.com/api/v6/convert?q=USD_PHP", function( data ) {
        console.log(data.results);
      });


});