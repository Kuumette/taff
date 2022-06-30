// var elem = document.getElementById("img");
// if (elem.requestFullscreen) {
// 	elem.requestFullscreen();
// }
document.addEventListener(
	"keydown",
	function (e) {
		if (e.keyCode == 122) {
			toggleFullScreen();
		}
	},
	false
);
let disa = document.getElementById("d2");
let reglage = document.querySelector(".reglage");
let d2 = document.querySelector(".d2");
function toggleFullScreen() {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
		//disa.style.display = "none";
		//reglage.style.display = "none";
		//d2.style.display = "none";
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
			//disa.style.display = "block";
			//reglage.style.display = "block";
			//d2.style.display = "block";
		}
	}
}
