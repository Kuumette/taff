function loadCoords(img, side) {
	/** Je récupére l'info du DOM */
	const CENTER = document.querySelector(`#center-${side}`);
	const TOGGLE_COORDS = document.querySelector(`#checkbox_coord-${side}`);
	const HTML = `<img src="${img}" class="mx-auto d-block" alt="overlay" id="overlay" />`;

	/**
	 * Toggle buttons for coordinates
	 */

	TOGGLE_COORDS.addEventListener("click", () => {
		if (TOGGLE_COORDS.checked) {
			CENTER.style.display = "block";
			setItem(`display-${side}`, "block");
		} else {
			CENTER.style.display = "none";
			setItem(`display-${side}`, "none");
		}
	});
	CENTER.innerHTML = HTML;
}
