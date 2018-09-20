'use strict';

let currentCurrency;
let currentAmount;
let newCurrency;
let transfer;
let transferRate;
let newValue;

// Breaks down object nesting to access 
const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

// Gets current transfer rate from API
function $getTransferRate(currency1, currency2){
    const transferSelector = currency1+"_"+currency2;
    // console.log(transferSelector);
    $.get( "https://free.currencyconverterapi.com/api/v6/convert?q="+transferSelector , function( data ) {
         transfer = getNestedObject(data.results, [transferSelector, 'val']);
        //  console.log(transfer);
      });
}

function $getVal(selector){
     return $(selector).val();
}

function calculateValue(a, b){
    let newAmount = a * b;
    let newVal = toString(newAmount);
    return newVal;
}

// Document ready wrapper
$(document).ready(function(){
    
    // Calculate button event handler
    $('#calculateBtn').click(function(){

        
        currentCurrency = $getVal('#currentCurrencyType');
        newCurrency = $getVal('#newCurrencyType');

        // Get current amount
        currentAmount = $getVal('#currentMoney');

        // Get transfer rate
         $getTransferRate(currentCurrency, newCurrency);

         $('#transferRate').val(transfer);

         calculateValue(currentAmount, transfer);

         $('#newValue').val(newValue);
    });

});