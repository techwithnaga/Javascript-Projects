const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("mainBtn")
const color = document.querySelector("#color") 

btn.addEventListener ( "click", function(){
    let random = getRandomNumber() 
    color.innerHTML = colors[random]
    document.body.style.backgroundColor = colors[random]
    color.style.color = colors[random]
})

function getRandomNumber (){
    return Math.floor(Math.random()* colors.length)
}