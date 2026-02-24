let clicks = 0;
const counter = document.getElementById("clickcount");
const button = document.getElementById("cakeclicker");
const audio1 = document.getElementById("boing64");
const audio2 = document.getElementById("boingsound");

function clickCake() {
    clicks += 1;
    counter.innerHTML = "Clicks: " + (clicks).toLocaleString();
    if (Math.random() >= 0.9) {
        audio1.currentTime = 0;
        audio1.play();
    } else {
        audio2.currentTime = 0;
        audio2.play();
    }
}

document.addEventListener("DOMContentLoaded", function () { //Connect the click to the image
    button.addEventListener("click", clickCake);
});

document.body.onkeyup = function (e) { //Connect the click to the space bar
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
        clickCake();
    }
}