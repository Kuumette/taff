/**
 * J'utilise le localStorage pour stocker les valeurs simples
 * qui ne sont pas de haute sécurité
 */
// const INPUTRANGE = document.querySelector("#inputRange");
const valueBritnessLeft = document.querySelector(".bLeft");
const valueContrastLeft = document.querySelector(".cLeft");
const valueInvertLeft = document.querySelector(".iLeft");

const valueBritnessRight = document.querySelector(".bRight");
const valueContrastRight = document.querySelector(".cRight");
const valueInvertRight = document.querySelector(".iRight");

const displayRight = document.querySelector("#reglageDroite");
const displayLeft = document.querySelector("#reglageGauche");

function init() {
	//console.log("init");
	localStorage.setItem("init", "1");
	localStorage.setItem("display-leftSide", "none");
	localStorage.setItem("display-rightSide", "none");

	if (
		(getItem("type-leftSide") === null &&
			getItem("type-rightSide") === null) ||
		getItem("type-leftSide") != "lastImage" ||
		getItem("type-rightSide") != "lastImage"
	) {
		//console.log("if");
		localStorage.setItem("type-leftSide", "lastImage");
		localStorage.setItem("type-rightSide", "lastSubstractionImage");
	} else {
		//console.log("else");
		localStorage.setItem("type-leftSide", getItem("type-leftSide"));
		localStorage.setItem("type-rightSide", getItem("type-rightSide"));
	}

	if (
		(getItem("brightnessUser-leftSide") === null &&
			getItem("contrastUser-leftSide") === null &&
			getItem("invertUser-leftSide") === null) ||
		(getItem("brightnessUser-leftSide") === 2.5 &&
			getItem("contrastUser-leftSide") === 2.5 &&
			getItem("invertUser-leftSide") === 0.5)
	) {
		localStorage.setItem("brightnessUser-leftSide", 1);
		localStorage.setItem("contrastUser-leftSide", 1);
		localStorage.setItem("invertUser-leftSide", 0);
		localStorage.setItem("brightness-leftSide", 1);
		localStorage.setItem("contrast-leftSide", 1);
		localStorage.setItem("invert-leftSide", 0);
	} else {
		localStorage.setItem("brightness-leftSide", 1);
		localStorage.setItem("contrast-leftSide", 1);
		localStorage.setItem("invert-leftSide", 0);
	}

	if (
		(getItem("brightnessUser-rightSide") === null &&
			getItem("contrastUser-rightSide") === null &&
			getItem("invertUser-rightSide") === null) ||
		(getItem("brightnessUser-rightSide") === 2.5 &&
			getItem("contrastUser-rightSide") === 2.5 &&
			getItem("invertUser-rightSide") === 0.5)
	) {
		localStorage.setItem("brightnessUser-rightSide", 1);
		localStorage.setItem("contrastUser-rightSide", 1);
		localStorage.setItem("invertUser-rightSide", 0);
		localStorage.setItem("brightness-rightSide", 1);
		localStorage.setItem("contrast-rightSide", 1);
		localStorage.setItem("invert-rightSide", 0);
	} else {
		localStorage.setItem("brightness-rightSide", 1);
		localStorage.setItem("contrast-rightSide", 1);
		localStorage.setItem("invert-rightSide", 0);
	}

	displayRight.style.opacity = "0";
	displayLeft.style.opacity = "0";
}
init();
/** Permet d'avoir le localStorage plus rapidement */
function getItem(item) {
	return localStorage.getItem(item);
}

function setItem(item, value) {
	return localStorage.setItem(item, value);
}

/** Permet de rajouter un filter à l'image */
function addFilter(img, brightness, contrast, invert) {
	img.style.filter = `brightness(${brightness}) contrast(${contrast}) invert(${invert})`;
}

document.querySelector("#defaultLeft").addEventListener("click", function () {
	localStorage.setItem("init", "2");
	localStorage.setItem("brightness-leftSide", "1");
	localStorage.setItem("contrast-leftSide", "1");
	localStorage.setItem("invert-leftSide", "0");

	displayLeft.style.opacity = "0";

	SIDES.forEach((side) => {
		if (side.id === "leftSide") {
			reload(getItem("type-leftSide"), side.id);
		} else {
			reload(getItem("type-rightSide"), side.id);
		}
	});
});

document.querySelector("#defaultRight").addEventListener("click", function () {
	localStorage.setItem("init", "3");
	localStorage.setItem("brightness-rightSide", "1");
	localStorage.setItem("contrast-rightSide", "1");
	localStorage.setItem("invert-rightSide", "0");
	displayRight.style.opacity = "0";

	SIDES.forEach((side) => {
		if (side.id === "leftSide") {
			reload(getItem("type-leftSide"), side.id);
		} else {
			reload(getItem("type-rightSide"), side.id);
		}
	});
});

document
	.querySelector("#invertDefaultLeft")
	.addEventListener("click", function () {
		localStorage.setItem("init", "4");
		localStorage.setItem("brightness-leftSide", "1");
		localStorage.setItem("contrast-leftSide", "1");
		localStorage.setItem("invert-leftSide", "1");
		displayLeft.style.opacity = "0";

		SIDES.forEach((side) => {
			if (side.id === "leftSide") {
				reload(getItem("type-leftSide"), side.id);
			} else {
				reload(getItem("type-rightSide"), side.id);
			}
		});
	});

document
	.querySelector("#invertDefaultRight")
	.addEventListener("click", function () {
		localStorage.setItem("init", "5");
		localStorage.setItem("brightness-rightSide", "1");
		localStorage.setItem("contrast-rightSide", "1");
		localStorage.setItem("invert-rightSide", "1");
		displayRight.style.opacity = "0";

		SIDES.forEach((side) => {
			if (side.id === "leftSide") {
				reload(getItem("type-leftSide"), side.id);
			} else {
				reload(getItem("type-rightSide"), side.id);
			}
		});
	});

document.querySelector("#userLeft").addEventListener("click", function () {
	localStorage.setItem("init", "6");
	localStorage.setItem("brightness-leftSide", valueBritnessLeft.value);
	localStorage.setItem("brightnessUser-leftSide", valueBritnessLeft.value);
	localStorage.setItem("contrast-leftSide", valueContrastLeft.value);
	localStorage.setItem("contrastUser-leftSide", valueContrastLeft.value);
	localStorage.setItem("invert-leftSide", valueInvertLeft.value);
	localStorage.setItem("invertUser-leftSide", valueInvertLeft.value);
	displayLeft.style.opacity = "1";

	SIDES.forEach((side) => {
		if (side.id === "leftSide") {
			reload(getItem("type-leftSide"), side.id);
		} else {
			reload(getItem("type-rightSide"), side.id);
		}
	});
});

document.querySelector("#userRight").addEventListener("click", function () {
	localStorage.setItem("init", "7");
	localStorage.setItem("brightness-rightSide", valueBritnessRight.value);
	localStorage.setItem("brightnessUser-rightSide", valueBritnessRight.value);
	localStorage.setItem("contrast-rightSide", valueContrastRight.value);
	localStorage.setItem("contrastUser-rightSide", valueContrastRight.value);
	localStorage.setItem("invert-rightSide", valueInvertRight.value);
	localStorage.setItem("invertUser-rightSide", valueInvertRight.value);
	displayRight.style.opacity = "1";

	SIDES.forEach((side) => {
		if (side.id === "leftSide") {
			reload(getItem("type-leftSide"), side.id);
		} else {
			reload(getItem("type-rightSide"), side.id);
		}
	});
});

document
	.querySelector("#resetBrightnessLeft")
	.addEventListener("click", function () {
		let btnBLeftR = document.querySelector(".bLRange");
		let btnBLeftN = document.querySelector(".bLNumber");
		btnBLeftR.value = 1;
		btnBLeftN.value = 1;

		localStorage.setItem("init", "8");
		localStorage.setItem("brightness-leftSide", "1");
		localStorage.setItem("brightnessUser-leftSide", "1");
		localStorage.setItem("contrast-leftSide", valueContrastLeft.value);
		localStorage.setItem("contrastUser-leftSide", valueContrastLeft.value);
		localStorage.setItem("invert-leftSide", valueInvertLeft.value);
		localStorage.setItem("invertUser-leftSide", valueInvertLeft.value);
		displayLeft.style.opacity = "1";
		SIDES.forEach((side) => {
			if (side.id === "leftSide") {
				reload(getItem("type-leftSide"), side.id);
			} else {
				reload(getItem("type-rightSide"), side.id);
			}
		});
	});

document
	.querySelector("#resetContrastLeft")
	.addEventListener("click", function () {
		let btnCLeftR = document.querySelector(".cLRange");
		let btnCLeftN = document.querySelector(".cLNumber");
		btnCLeftR.value = 1;
		btnCLeftN.value = 1;

		localStorage.setItem("init", "9");
		localStorage.setItem("brightness-leftSide", valueBritnessLeft.value);
		localStorage.setItem(
			"brightnessUser-leftSide",
			valueBritnessLeft.value
		);
		localStorage.setItem("contrast-leftSide", "1");
		localStorage.setItem("contrastUser-leftSide", "1");
		localStorage.setItem("invert-leftSide", valueInvertLeft.value);
		localStorage.setItem("invertUser-leftSide", valueInvertLeft.value);
		displayLeft.style.opacity = "1";
		SIDES.forEach((side) => {
			if (side.id === "leftSide") {
				reload(getItem("type-leftSide"), side.id);
			} else {
				reload(getItem("type-rightSide"), side.id);
			}
		});
	});

document
	.querySelector("#resetInvertLeft")
	.addEventListener("click", function () {
		let btnILeftR = document.querySelector(".iLRange");
		let btnILeftN = document.querySelector(".iLNumber");
		btnILeftR.value = 0;
		btnILeftN.value = 0;

		localStorage.setItem("init", "10");
		localStorage.setItem("brightness-leftSide", valueBritnessLeft.value);
		localStorage.setItem(
			"brightnessUser-leftSide",
			valueBritnessLeft.value
		);
		localStorage.setItem("contrast-leftSide", valueContrastLeft.value);
		localStorage.setItem("contrastUser-leftSide", valueContrastLeft.value);
		localStorage.setItem("invert-leftSide", "0");
		localStorage.setItem("invertUser-leftSide", "0");
		displayLeft.style.opacity = "1";
		SIDES.forEach((side) => {
			if (side.id === "leftSide") {
				reload(getItem("type-leftSide"), side.id);
			} else {
				reload(getItem("type-rightSide"), side.id);
			}
		});
	});

document
	.querySelector("#resetBrightnessRight")
	.addEventListener("click", function () {
		let btnBRightR = document.querySelector(".bRRange");
		let btnBRightN = document.querySelector(".bRNumber");

		btnBRightR.value = 1;
		btnBRightN.value = 1;

		localStorage.setItem("init", "11");
		localStorage.setItem("brightness-rightSide", "1");
		localStorage.setItem("brightnessUser-rightSide", "1");
		localStorage.setItem("contrast-rightSide", valueContrastRight.value);
		localStorage.setItem(
			"contrastUser-rightSide",
			valueContrastRight.value
		);
		localStorage.setItem("invert-rightSide", valueInvertRight.value);
		localStorage.setItem("invertUser-rightSide", valueInvertRight.value);
		displayLeft.style.opacity = "1";
		SIDES.forEach((side) => {
			if (side.id === "leftSide") {
				reload(getItem("type-leftSide"), side.id);
			} else {
				reload(getItem("type-rightSide"), side.id);
			}
		});
	});

document
	.querySelector("#resetContrastRight")
	.addEventListener("click", function () {
		let cRRange = document.querySelector(".cRRange");
		let cRNumber = document.querySelector(".cRNumber");

		cRRange.value = 1;
		cRNumber.value = 1;

		localStorage.setItem("init", "12");
		localStorage.setItem("brightness-rightSide", valueBritnessRight.value);
		localStorage.setItem(
			"brightnessUser-leftSide",
			valueBritnessRight.value
		);
		localStorage.setItem("contrast-rightSide", "1");
		localStorage.setItem("contrastUser-rightSide", "1");
		localStorage.setItem("invert-rightSide", valueInvertRight.value);
		localStorage.setItem("invertUser-rightSide", valueInvertRight.value);
		displayLeft.style.opacity = "1";
		SIDES.forEach((side) => {
			if (side.id === "leftSide") {
				reload(getItem("type-leftSide"), side.id);
			} else {
				reload(getItem("type-rightSide"), side.id);
			}
		});
	});
document
	.querySelector("#resetInvertRight")
	.addEventListener("click", function () {
		let iRRange = document.querySelector(".iRRange");
		let iRNumber = document.querySelector(".iRNumber");
		iRRange.value = 0;
		iRNumber.value = 0;

		localStorage.setItem("init", "13");
		localStorage.setItem("brightness-rightSide", valueBritnessRight.value);
		localStorage.setItem(
			"brightnessUser-leftSide",
			valueBritnessRight.value
		);
		localStorage.setItem("contrast-rightSide", valueContrastRight.value);
		localStorage.setItem(
			"contrastUser-rightSide",
			valueContrastRight.value
		);
		localStorage.setItem("invert-rightSide", "0");
		localStorage.setItem("invertUser-rightSide", "0");

		displayLeft.style.opacity = "1";

		SIDES.forEach((side) => {
			if (side.id === "leftSide") {
				reload(getItem("type-leftSide"), side.id);
			} else {
				reload(getItem("type-rightSide"), side.id);
			}
		});
	});
