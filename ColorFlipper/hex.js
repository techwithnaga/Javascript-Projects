const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.getElementById("color")
const btn = document.querySelector("#mainBtn") 

let colorhexa = "#"

btn.addEventListener ('click',function () {
    for (i=0; i<6; i++){
        colorhexa += hex[getRandomNumber()];
    }
    color.innerHTML = colorhexa;
    btn.style.color = colorhexa;
    document.body.style.backgroundColor = colorhexa;
    colorhexa="#"
})





function getRandomNumber (){
    return Math.floor(Math.random()*hex.length);
}