const VIEW_SAMPLE = document.querySelectorAll("#viewSample");

VIEW_SAMPLE.forEach((view) => {
	view.addEventListener("click", () => {
		document.location.href = "./viewSimple.html";
	});
});
