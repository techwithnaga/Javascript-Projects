var count = 0
var arr = ["#ffffff","#e6f7ff","#cceeff","#b3e6ff","#99ddff","#80d4ff","#66ccff","#4dc3ff","#33bbff","#1ab2ff"]

function countUp (){
    count +=1
    document.getElementById("count").innerHTML = "Count : "+count
    document.body.style.backgroundColor = arr[Math.abs(count)%10]
}

function countDown(){
    count -=1
    document.getElementById("count").innerHTML = "Count : "+count
    document.body.style.backgroundColor = arr[Math.abs(count)%10]
}