/**
 * On récupere les données du la navigation
 */

const LEFT_BUTTONS = document.querySelectorAll("#leftSide button");
const RIGHT_BUTTONS = document.querySelectorAll("#rightSide button");
const LEFT_REGLAGE = document.querySelectorAll("#leftSide a");

LEFT_BUTTONS.forEach((button) => {
	button.addEventListener("click", () => {
		const type = button.dataset.type;
		localStorage.setItem("type-leftSide", type);
		reload(type, "leftSide");
	});
});

RIGHT_BUTTONS.forEach((button) => {
	button.addEventListener("click", () => {
		const type = button.dataset.type;
		localStorage.setItem("type-rightSide", type);
		reload(type, "rightSide");
	});
});
