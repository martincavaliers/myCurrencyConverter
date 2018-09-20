'use strict'

var currencyJson = [];
var currencyList;
var currencyType;

// function getList(){
//     $.get('https://free.currencyconverterapi.com/api/v6/currencies');
//     c
// }

function createArray(api, array){
    $.getJSON( api, function( data ) {
        // console.log(data);
        for(var i in data.results)
            array.push([i, data.results [i]]);
            JSON.stringify(array);
    });
}



$(document).ready(function () {
    createArray("https://free.currencyconverterapi.com/api/v6/currencies", currencyJson);
});