window.onload= setShape();
var start;
var timeElapse;

function getTime(){
    //record time 
    timeElapse = (Date.now() - start)/1000;
    document.getElementById("reactionTime").innerHTML= timeElapse+" sec";

    //disappear
    document.getElementById("shape").style.display= "none";

    //set new shape 
    setShape();
    

}

function setShape(){
    var top= Math.floor((Math.random() * 500));
    var left = Math.floor((Math.random() * 500));
    var radius = Math.round(Math.random())*50;
    var color = "#" + ((1<<24)*Math.random() | 0).toString(16);
    document.getElementById("shape").style.marginTop = top.toString()+"px";
    document.getElementById("shape").style.marginLeft= left.toString()+"px";
    document.getElementById("shape").style.borderRadius = radius.toString()+"px";
    document.getElementById("shape").style.backgroundColor = color;
    document.getElementById("shape").style.display= "block";
    start = Date.now();
}