function lastModified(file) {
	let xmlObj = !window.XMLHttpRequest
		? new ActiveXObject("Microsoft.XMLHTTP")
		: new XMLHttpRequest();
	xmlObj.open("GET", file, false);
	try {
		xmlObj.send();
	} catch (y) {}
	let dt = xmlObj.getResponseHeader("Last-Modified");
	let e = new Date(dt);

	return e;
}

function dateDiff(date1, date2) {
	var diff = {}; // Initialisation du retour
	var tmp = date2 - date1;
	tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
	diff.sec = tmp % 60; // Extraction du nombre de secondes
	tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
	diff.min = tmp % 60; // Extraction du nombre de minutes
	tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
	diff.hour = tmp % 24; // Extraction du nombre d'heures
	tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
	diff.day = tmp;

	return diff;
}

function dateImage(type, side = "main") {
	const miseAJour = document.querySelector(`#${side} #warning`);
	//console.log(miseAJour);
	let mj = "";

	fetch(
		//"http://127.0.0.1:5503/assets/config/image.json"
		"https://live.neos360.com/apical/test/apicam/assets/config/image.json"
	)
		.then((response) => {
			return response.json();
		})
		.then((myJson) => {
			//console.log(side);
			if (type === "lastImage") {
				let dte = lastModified(
					`http://127.0.0.1:5503/${myJson[type].img}`
				);
				let h = new Date();
				date1 = new Date(dte);
				date2 = new Date();
				diff = dateDiff(date1, date2);
				mj = `
					derniere mise à jour de l'image ${type} depuis : ${diff.day}d ${diff.hour}h ${diff.min}m ${diff.sec}s
					`;
				miseAJour.innerHTML = mj;
				//console.log(mj);
				//console.log(miseAJour);
			} else if (type === "lastSubstractionImage") {
				let dte = lastModified(
					`http://127.0.0.1:5503/${myJson[type].img}`
				);
				let h = new Date();
				date1 = new Date(dte);
				date2 = new Date();
				diff = dateDiff(date1, date2);

				mj = `
				<p >derniere mise à jour de l'image ${type} depuis : ${diff.day}d ${diff.hour}h ${diff.min}m ${diff.sec}s</p>
				`;
				miseAJour.innerHTML = mj;
			} else if (type === "lastAnimation") {
				let dte = lastModified(
					`http://127.0.0.1:5503/${myJson[type].img}`
				);
				let h = new Date();
				date1 = new Date(dte);
				date2 = new Date();
				diff = dateDiff(date1, date2);

				let mj = `
				<p >derniere mise à jour de l'image ${type} depuis : ${diff.day}d ${diff.hour}h ${diff.min}m ${diff.sec}s</p>
				`;
				miseAJour.innerHTML = mj;
			} else if (type === "lastSubstractionAnimation") {
				let dte = lastModified(
					`http://127.0.0.1:5503/${myJson[type].img}`
				);
				let h = new Date();
				date1 = new Date(dte);
				date2 = new Date();
				diff = dateDiff(date1, date2);

				mj = `
				<p >derniere mise à jour de l'image ${type} depuis : ${diff.day}d ${diff.hour}h ${diff.min}m ${diff.sec}s</p>
				`;
				miseAJour.innerHTML = mj;
			} else if (type === "panorama") {
				let dte = lastModified(
					`http://127.0.0.1:5503/${myJson[type].img}`
				);
				let h = new Date();
				date1 = new Date(dte);
				date2 = new Date();
				diff = dateDiff(date1, date2);

				mj = `
				<p >derniere mise à jour de l'image ${type} depuis : ${diff.day}d ${diff.hour}h ${diff.min}m ${diff.sec}s</p>
				`;
				miseAJour.innerHTML = mj;
			} else if (type === "attenuation") {
				let dte = lastModified(
					`http://127.0.0.1:5503/${myJson[type].img}`
				);
				let h = new Date();
				date1 = new Date(dte);
				date2 = new Date();
				diff = dateDiff(date1, date2);

				mj = `
				<p >derniere mise à jour de l'image ${type} depuis : ${diff.day}d ${diff.hour}h ${diff.min}m ${diff.sec}s</p>
				`;
				miseAJour.innerHTML = mj;
			}
			//miseAJour.innerHTML = mj;
			//console.log(miseAJour);
		});
}
