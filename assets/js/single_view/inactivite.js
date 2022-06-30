let temps,
	secondes = 0;

let display = document.getElementById("reglage");
let toogle = document.getElementById("d2");
let display1 = document.getElementById("nav");
let menu = document.getElementById("menu");

function resetTemps() {
	document.querySelector(".delai").style.display = "none";
	clearInterval(temps);
	secondes = 0;
	//5000
	temps = setInterval(startTemps, 5000000);
	display.style.opacity = "1";
	toogle.style.opacity = "1";
	display1.style.opacity = "1";
	menu.style.opacity = "1";
}
window.onload = resetTemps;
window.ontouchstart = resetTemps;
window.onclick = resetTemps;
window.onkeypress = resetTemps;
window.onmousemove = resetTemps;
window.onmousedown = resetTemps;

function startTemps() {
	secondes++;
	document.querySelector(".secondes").textContent = secondes;
	document.querySelector(".delai").style.display = "none";
	display.style.opacity = "0";
	toogle.style.opacity = "0";
	display1.style.opacity = "0";
	menu.style.opacity = "0";
}
