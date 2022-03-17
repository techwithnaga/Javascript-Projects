
var arr =["BMW", "TOYOTA", "AUDI"]
var txt = ""

for (i=0; i<arr.length; i++){
    txt+= arr[i] + " " + "<br>"
    
}

document.getElementById("cars").innerHTML = txt;