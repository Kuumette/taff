const BRIGHTNESS = document.querySelectorAll(".rangeBrightness");
const CONTRASTS = document.querySelectorAll(".rangeContrast");

localStorage.clear();

/** Init contrast et brightness ainsi que l'overlay */
localStorage.setItem("init", "1");
localStorage.setItem("brightness-main", "1");
localStorage.setItem("contrast-main", "1");
localStorage.setItem("display-main", "none");

function getItem(item) {
	return localStorage.getItem(item);
}

// Sur mon tableau de BRIGHTNESS, je parcours chaque élément
BRIGHTNESS.forEach((range) => {
	// J'attend que l'élément change
	range.addEventListener("input", () => {
		// Je récupère la valeur de l'élément
		localStorage.setItem(`brightness-${range.id}`, range.value);
		// synchronisation des valeurs
		synchro(range);
		// Je reload l'image
		reload(getItem("type"));
	});
	// J'initialise la valeur de l'élément
	range.setAttribute("value", getItem("init"));
});

/** La même chose qu'au dessus */
CONTRASTS.forEach((range) => {
	range.addEventListener("change", () => {
		localStorage.setItem(`contrast-${range.id}`, range.value);
		synchro(range);
		reload(getItem("type"));
	});
	range.setAttribute("value", getItem("init"));
});

/** Permet de synchroniser les valeurs entre eux */
function synchro(range) {
	// synchronisation des valeurs
	if (range.name === "amountRange") {
		range.nextElementSibling.value = range.value;
	} else {
		range.previousElementSibling.value = range.value;
	}
}

/** Permet de rajouter un filter à l'image */
function addFilter(img, brightness, contrast) {
	img.style.filter = `brightness(${brightness}) contrast(${contrast})`;
}
