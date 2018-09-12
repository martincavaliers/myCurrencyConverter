'use strict';

const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

function $getTransferRate(currency1, currency2){
    const transferSelector = currency1.code+"_"+currency2.code;
    console.log(transferSelector);
    $.get( "https://free.currencyconverterapi.com/api/v6/convert?q="+transferSelector , function( data ) {
        const transfer = getNestedObject(data.results, [transferSelector, 'val']);
        console.log(transfer);
        return transfer;
      });

}

// // pass in your object structure as array elements
// const name = getNestedObject(user, ['personalInfo', 'name']);
// // to access nested array, just pass in array index as an element the path array.
// const city = getNestedObject(user, ['personalInfo', 'addresses', 0, 'city']);
// // this will return the city from the first address item.

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

    

});