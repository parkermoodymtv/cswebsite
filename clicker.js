let clicks = 0;
const counter = document.getElementById("clickcount");
const button = document.getElementById("cakeclicker");

function clickCake() {
    clicks += 1;
    counter.innerHTML = "Clicks: " + (clicks).toLocaleString();
}

document.addEventListener("DOMContentLoaded", function () { //Connect the click to the image
    button.addEventListener("click", clickCake);
});

document.body.onkeyup = function (e) { //Connect the click to the space bar
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
        clickCake();
    }
}