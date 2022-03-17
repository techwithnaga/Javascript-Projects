var hour = new Date().getHours();
if (hour<12){
    document.getElementById("greeting").innerHTML = "Good Morning!";
    document.getElementById("picture").src ="picture/morning.jpg";
    document.body.style.backgroundColor = "#cceeff";
} else if (hour >= 12 && hour <18){
    document.getElementById("greeting").innerHTML = "Good Afternoon!";
    document.getElementById("picture").src ="picture/afternoon.jpg";
    document.body.style.backgroundColor = "#ffffb3";
} else if (hour >= 18 && hour <=21){
    document.getElementById("greeting").innerHTML = "Good Evening!";
    document.getElementById("picture").src ="picture/evening.jpg";
    document.body.style.backgroundColor = "#ffd480";
} else {
    document.getElementById("greeting").innerHTML = "Good Night!";
    document.getElementById("picture").src ="picture/night.jpg";
    document.body.style.backgroundColor = "#a366ff";
}