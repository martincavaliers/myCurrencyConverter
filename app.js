'use strict'

const currencyJson = [];
let currentCurrency;
let currentAmount;
let newCurrency;
let transferSelector;
let transferRate;
let newAmount;

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
    // Get request to API for all required data
    getCurrencyData("https://free.currencyconverterapi.com/api/v6/currencies", currencyJson);
    
    // Calculate Button Event Handler
    $('#calculateBtn').on('click', function(){
        
        currentCurrency = $('#currentCurrencyType').val();
        newCurrency = $('#newCurrencyType').val();
        currentAmount = $('#currentMoney').val();
        transferSelector = currentCurrency+'_'+newCurrency;
        // console.log(currentCurrency, newCurrency);

        if(currentAmount === ""){
            alert("Please input your current amount");
            $('#currentMoney').addClass( "wrong" );
        }else if(isNaN(currentAmount)){
            alert("Current amount must be a number");
            $('#currentMoney').addClass( "wrong" );
        }else{
            $('#currentMoney').removeClass( "wrong" );
            // Gets API data for transfer selector and fills the transfer rate and new value inputs
            $.get('https://free.currencyconverterapi.com/api/v6/convert?q='+transferSelector, function(data){
                $.each(data.results, function(index, option){
                    transferRate = option.val;
                    $('#transferRate').val(transferRate);
                    newAmount = currentAmount * transferRate;
                    newAmount = newAmount.toFixed(2);
                    return newAmount;
                });
            }).then(data => {
                $('#newValue').val(newAmount);
                // Prints value to previous values div
                $('#arrayDiv').append(newAmount + ', ');
            })
    }
    });


    // Clear button event listener
    $('#clearBtn').click(function() {
        location.reload();
    });

});
