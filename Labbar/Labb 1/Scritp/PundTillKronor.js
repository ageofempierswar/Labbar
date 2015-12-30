var pund = document.getElementById('Pund');
var dollar = document.getElementById('dollar');

var berakningPund = calculatePundSvar(pund);
document.getElementById('PundSvar').innerHTML = berakning;

var berakningKR = calculatePundSvar(pund, kronor);
document.getElementById('dollarSvar').innerHTML = berakning;

function calculatePundSvar(pund) {
    return pund * 12 ;
}

function calculatePundSvar(dollar) {
    return dollar * 6;
}