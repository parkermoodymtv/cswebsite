const submit = document.querySelector('input[type="submit"]');
const form = document.querySelector("form");
const thanks = document.getElementById("thanks");
const home = document.getElementById("returnhome");
const footer = document.querySelector("footer");

submit.addEventListener("click", function () {
    if (form && thanks && home && footer) {
        form.remove();
        footer.remove();
        thanks.innerHTML = "Thanks for signing up for all you can eat CAKE! See you soon!";
        home.hidden = false;
    }
});