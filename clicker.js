let clicks = 0;
const counter = document.getElementById("clickcount");
const button = document.getElementById("cakeclicker");

function clickCake() {
    clicks += 1;
    counter.innerHTML = "Clicks: " + (clicks).toLocaleString();
    // alert("You clicked the cake! Total clicks: " + (clicks).toLocaleString());
}

// document.getElementById("clickcount").onclick = clickCake;

document.addEventListener("DOMContentLoaded", function () {
    button.addEventListener("click", clickCake); // Attach the function to the 'click' event
});

document.body.onkeyup = function (e) {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
        clickCake();
    }
}