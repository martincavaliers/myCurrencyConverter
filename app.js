'use strict';

// Breaks down object nesting to access 
const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

// Gets current transfer rate from API
function $getTransferRate(currency1, currency2){
    const transferSelector = currency1+"_"+currency2;
    console.log(transferSelector);
    $.get( "https://free.currencyconverterapi.com/api/v6/convert?q="+transferSelector , function( data ) {
         transfer = getNestedObject(data.results, [transferSelector, 'val']);
      });
}

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

const transferInput = document.querySelector('#transferRate');
let currentCurrency;
let currentAmount;
let newCurrency;
let transfer;
let transferRate;
let newValue;


// Document ready wrapper
$(document).ready(function(){
    // Calculate button event handler
    $('#calculateBtn').click(function(){
        
        // Get current currency
        currentCurrency = $('#currentCurrencyType').val();

        // Get current amount
        currentAmount = $('#currentMoney').val();

        // Get desired currency
        newCurrency = $('#newCurrencyType').val();

        // Get transfer rate
         $getTransferRate(currentCurrency, newCurrency);

         transferInput.value = transfer;
    });

});