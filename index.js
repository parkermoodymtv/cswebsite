let happyCustomers = Math.floor(Math.random() * 5000);
let cakesEaten = Math.floor(Math.random() * 7500);
let sprinklesUsed = Math.floor(Math.random() * 10000000);

function updateStats() {
	let newHappyCustomers = Math.floor(Math.random() * 10);
	happyCustomers += newHappyCustomers;
	document.getElementById("happycustomersstat").innerHTML =
		happyCustomers.toLocaleString() + " Happy Customers";

	let newCakesEaten = Math.floor(Math.random() * 10);
	cakesEaten += newCakesEaten;
	document.getElementById("cakeseatenstat").innerHTML =
		cakesEaten.toLocaleString() + " Cakes Eaten";

	let newSprinklesUsed = Math.floor(Math.random() * 100);
	sprinklesUsed += newSprinklesUsed;
	document.getElementById("sprinklesusedstat").innerHTML =
		sprinklesUsed.toLocaleString() + " Sprinkles Used";

	setTimeout(updateStats, 250);
}

updateStats();