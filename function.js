let date = new Date();

document.getElementById("date-holder").innerHTML = date.toDateString();

setInterval(() => {
    var time = new Date();
    document.getElementById("time-holder").innerHTML = time.toLocaleTimeString();
}, 1000);

const menuDivHolder = document.querySelector(".menu-drop-side-holder");
const menuDiv = document.querySelector(".menu-wrapper");

menuDivHolder.onclick = function () {
    let displayDivMenu = menuDiv.style.display;

    if(displayDivMenu == "none"){
        menuDiv.style.display = "block";
    }else{
        menuDiv.style.display = "none";
    }
}