/**
 * Je créer une function qui m'affiche chaque x seconde mon dernier élément
 * setInterval de timer qui m'appel afficheImage.js
 * AfficheImage.js prend en paramètre le tableau de mes images avec comme clé
 * lastImage / lastSubstractionImage / lastAnimation / lastSubstractionAnimation
 * qui ont tous comme data
 * - "img": "./ressources/lastImage.jpg",
	 -	"desc": "last picture",
	 -	"date": "2020-02-16",
	 -	"heure": "03:48 UT"
*/

/**
 *
 * @param {string} type
 * @param {string} side default value is main
 * @description reload la vue demandé par l'utilisateur
 */
let refreshTime;
async function reload(type, side = "main") {
	//console.log("reload");
	/** Je fetch les information dont j'ai besoins */
	let tmp = new Date();
	const response = await fetch(
		//"https://live.neos360.com/eso/paranal/apicam/assets/config/config.json"
		//"http://127.0.0.1:5503/assets/config/config.json"
		"https://live.neos360.com/apical/test/apicam/assets/config/config.json"
	);

	const { json, serveur } = await response.json();
	//console.log(json);
	let urlImg = "";
	if (serveur.isProd === false) {
		urlImg = serveur.urlDev + json.images;
	} else {
		urlImg = serveur.urlProd + json.images;
	}
	let urlCoords = "";
	if (serveur.isProd === false) {
		urlCoords = serveur.urlDev + json.coords;
	} else {
		urlCoords = serveur.urlProd + json.coords;
	}

	const images = await fetch(urlImg);
	const coords = await fetch(urlCoords);

	/** Je les transformes en JSON */
	const displayImage = await images.json();

	const tcs = await coords.json();

	//console.log(displayImage);
	// Je load la 1er image avec les paramètres par défaut.
	const view = loadView(
		getItem(`type-${side}`),
		side,
		displayImage,
		getItem(`brightness-${side}`),
		getItem(`contrast-${side}`),
		getItem(`invert-${side}`),
		getItem(`reglage-${side}`)
	);

	if (type === "lastImage" || type === "lastSubstractionImage") {
		const viewCoords = loadCoords(tcs.img, side);
	}

	const date = dateImage(getItem(`type-${side}`), side);

	/**
	 * Ici, en plus de load mon composant IMAGE
	 * je dois aussi ajouter les filtres
	 */
	if (
		type === "lastImage" ||
		type === "lastSubstractionImage" ||
		type === "panorama"
	) {
		const IMG = document.querySelectorAll("#img");
		IMG.forEach((img) => {
			if (img.name === `img-${side}`) {
				addFilter(
					img,
					getItem(`brightness-${side}`),
					getItem(`contrast-${side}`),
					getItem(`invert-${side}`)
				);
			}
		});
	}
	/** Get TIMER */
	// const refresh = json.timer;
	let refreshEnabled = document.querySelector(`#${side} #checkbox-${side}`);
	// /** Get event if button changed */
	console.log(refreshEnabled);
	console.log(displayImage);
	const createInterval = () => {
		clearInterval(window.refreshTime);
		window.refreshTime = setInterval(changeOnInterval, 10000);
	};
	const changeOnInterval = () => {
		//console.log(`je reload ${side}`);
		if (side === "rightSide") {
			console.log("rightSide");
			//console.log(displayImage);
		} else if (side === "leftSide") {
			console.log("leftSide");
			//console.log(displayImage);
		}

		loadView(
			getItem(`type-${side}`),
			side,
			displayImage,
			getItem(`brightness-${side}`),
			getItem(`contrast-${side}`),
			getItem(`invert-${side}`)
		);
		//console.log(displayImage);
		if (type === "lastImage" || type === "lastSubstractionImage") {
			loadCoords(tcs.img, side);
		}
		dateImage(getItem(`type-${side}`), side);
	};
	// //console.log(side);

	if (refreshEnabled.checked) {
		createInterval();
	}
	//else {
	//clearInterval(window.refreshTime);
	//}

	// const refresh = json.timer;
	// let refreshEnabled = document.querySelector(`#${side} #checkbox-${side}`);
	// let refreshTime = null;
	// //console.log(refreshEnabled);
	// /** Get event if button changed */

	// if (refreshEnabled.checked) {
	// 	refreshTime = setInterval(function () {
	// 		console.log("reload");
	// 		loadView(
	// 			getItem(`type-${side}`),
	// 			side,
	// 			displayImage,
	// 			getItem(`brightness-${side}`),
	// 			getItem(`contrast-${side}`),
	// 			getItem(`invert-${side}`)
	// 		);

	// 		loadCoords(tcs.img, side);

	// 		dateImage(getItem(`type-${side}`), side);
	// 	}, 10000);
	// }
	//  else {
	// 	clearInterval(refreshTime);
	// }
}

const SIDES = document.querySelectorAll(".side");
//console.log(SIDES);
if (SIDES.length === 0) {
	//console.log("main");
	reload(getItem("type-main"));
} else {
	SIDES.forEach((side) => {
		//console.log(side);
		if (side.id === "leftSide") {
			//console.log(side.id);
			reload(getItem("type-leftSide"), side.id);
		} else {
			//console.log("rightSide");
			reload(getItem("type-rightSide"), side.id);
		}
	});
}
