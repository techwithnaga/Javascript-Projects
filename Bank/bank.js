
var currentBal = 100;
var savedUsername = "naga";
var savedPassword = "password";
document.getElementById("balance").innerHTML = currentBal;

function login (){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == savedUsername && password == savedPassword){
        alert ("Welcome to Naga Bank!");
        document.getElementById("loginDiv").style.display= "none";
        document.getElementById("actionDiv").style.display= "block";
    }
}

function deposit (){
    var depositAmount = parseInt(document.getElementById("depositAmount").value);
    currentBal += depositAmount;
    document.getElementById("balance").innerHTML = currentBal;
}

function withdraw(){
    var withdrawAmount = parseInt (document.getElementById("withdrawAmount").value);
    if (withdrawAmount > currentBal){
        alert ("insufficient fund!")
    } else{
        currentBal -= withdrawAmount;
        document.getElementById("balance").innerHTML = currentBal;
    }
}