let date = new Date();

document.getElementById("date-holder").innerHTML = date.toDateString();

setInterval(() => {
    var time = new Date();
    document.getElementById("time-holder").innerHTML = time.toLocaleTimeString();
}, 1000);
