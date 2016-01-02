var ConvertCurrencyButton = document.getElementById('ConvertCurrencyButton');
function ConvertCurrencyFromSekToDollarAndPund() {


var sek = document.getElementById('inputSek').value;
var pund = Number(sek) * Number(12);
var dollar = Number(sek) * Number(6);

document.getElementById('Pund');
document.getElementById('dollar');
}
ConvertCurrencyButton.addEventListener('click', ConvertCurrencyFromSekToDollarAndPund, false);
