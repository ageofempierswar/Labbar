var calculateTimeButton = document.getElementById('calculateTidButton');

function CalculateTime() {
    var Hours = document.getElementById('timmar').value;
    var minutes = Number(Hours) * Number(60);
    var seconds = Number(Hours) * Number(3600);
    document.getElementById('minuter').innerHTML = minutes;
    document.getElementById('secunder').innerHTML = seconds;
}
calculateTimeButton.addEventListener('click', CalculateTime, false);