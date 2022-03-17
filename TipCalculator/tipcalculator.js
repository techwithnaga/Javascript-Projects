
var result = 0;

function calculate (){
    var total = document.getElementById("bill").value;
    var tipPercent = document.getElementById("percent").value;
    var people = document.getElementById("people").value;
    result = (total*tipPercent/100/people).toFixed(2); 
    document.getElementById("tipAmount").innerHTML = "$ "+ result;
    document.getElementById("result").style.display = "block";

}