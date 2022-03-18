let count = 0;
let arr = ["#ffffff","#e6f7ff","#cceeff","#b3e6ff","#99ddff","#80d4ff","#66ccff","#4dc3ff","#33bbff","#1ab2ff"]

const increaseBtn = document.getElementById ("increaseBtn");
const decreaseBtn = document.getElementById ("decreaseBtn");
const  resetBtn = document.getElementById ("resetBtn");
const countDisplay = document.getElementById ("count");

increaseBtn.addEventListener ('click', function (){
    count +=1;
    setBackgroundColor();
});

decreaseBtn.addEventListener ('click', function () {
    count -=1;
    setBackgroundColor();
});

resetBtn.addEventListener ('click', function (){
    count = 0;
    setBackgroundColor();
});

function setBackgroundColor(){
    countDisplay.innerHTML = count;
    document.body.style.backgroundColor = arr[Math.abs(count)%10]; 
}