/*
Sources:
https://stackoverflow.com/a/55668864
*/

let clicks = 0;
const counter = document.getElementById("clickcount");
const button = document.getElementById("cakeclicker");

function clickCake() {
    clicks += 1;
    counter.innerHTML = "Clicks: " + (clicks).toLocaleString();

    button.style.position = 'absolute';
    button.style.top = document.body.clientHeight * Math.random() * 0.9 + 'px';
    button.style.left = document.body.clientWidth * Math.random() * 0.9 + 'px';
}

document.addEventListener("DOMContentLoaded", function () { //Connect the click to the image
    button.addEventListener("click", clickCake);
});