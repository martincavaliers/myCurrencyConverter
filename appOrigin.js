//Executes on page load.
document.addEventListener('DOMContentLoaded', (e) => {
const calculateBtn = document.getElementById('calculateBtn');
//Create array to store values
});

let valueArray = new Array();

//Calculate value function
function calculateValue(valueOne, valueTwo){
	const value = (valueOne * valueTwo).toFixed(2);
	return value;
}
//Adds value onto an array
function pushToArray(value, array){
    array.push(value);
    return newValue
}

//Executes when calculate button is clicked
calculateBtn.addEventListener('click', (e) => {
    //Take value of current currency input and type selection and assign it to variable
    const currentCurrencyType = document.getElementById("currentCurrencyType").value;
    const currentMoney = document.getElementById('currentMoney').value;

    //Take value of current transfer rate and currency type store it as variable
    const newCurrencyType = document.getElementById("newCurrencyType").value;
    const transferRate = document.getElementById('transferRate').value;

    //Check that inputs are numbers
    	//If false displays error
    	//If true executes code
	if(isNaN(currentMoney) || isNaN(transferRate)){
		alert('One of your submissions is not a number, please try again');
	}else{
    //Mutliply the two variables
    const newValue = calculateValue(currentMoney, transferRate);

    //Display result in third input field
    document.getElementById('newValue').value = newCurrencyType + " " + newValue;
    //Adds displayed value to array
    pushToArray(newCurrencyType + newValue, valueArray);
	}
    // Write array to page
    document.getElementById('arrayDiv').innerHTML = valueArray.toString();
    document.getElementById('arrayDiv').style.fontSize = "x-large";
});


//Reload the page when clear button hit
clearBtn.addEventListener('click', (e) => {
  location.reload();
});
