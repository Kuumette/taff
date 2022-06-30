let temps,
	secondes = 0;

let FOOTER_G = document.getElementById("footerGauche");
let FOOTER_D = document.getElementById("footerDroite");

const NAV_G = document.getElementById("leftNav");
const NAV_D = document.getElementById("rightNav");

const TOOGLE_G = document.getElementById("d2");
const TOOGLE_D = document.getElementById("toogle_d");

const DISPLAYLEFT = document.getElementById("menuLeft");
const DISPLAYRIGHT = document.getElementById("menuRight");

function resetTemps() {
	document.querySelector(".delai").style.display = "none";
	clearInterval(temps);
	secondes = 0;

	temps = setInterval(startTemps, 50000);
	FOOTER_G.style.opacity = "1";
	FOOTER_D.style.opacity = "1";

	NAV_G.style.opacity = "1";
	NAV_D.style.opacity = "1";

	TOOGLE_G.style.opacity = "1";
	TOOGLE_D.style.opacity = "1";
	DISPLAYLEFT.style.opacity = "1";
	DISPLAYRIGHT.style.opacity = "1";
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
	FOOTER_G.style.opacity = "0";
	FOOTER_D.style.opacity = "0";

	NAV_G.style.opacity = "0";
	NAV_D.style.opacity = "0";

	TOOGLE_G.style.opacity = "0";
	TOOGLE_D.style.opacity = "0";
	DISPLAYLEFT.style.opacity = "0";
	DISPLAYRIGHT.style.opacity = "0";
}
