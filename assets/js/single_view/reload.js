/**
 * 
 * Je créer une function qui m'affiche chaque x seconde mon dernier élément
 * 
 * setInterval de timer qui m'appel afficheImage.js
 * 
 * AfficheImage.js prend en paramètre le tableau de mes images avec comme clé
 * lastImage / lastSubstractionImage / lastAnimation / lastSubstractionAnimation
 * qui ont tous comme data 
 * - "img": "./ressources/lastImage.jpg",
	 -	"desc": "last picture",
	 -	"date": "2020-02-16",
	 -	"heure": "03:48 UT"
 * 
 * 
 * */

/**
 *
 * @param {string} type
 * @param {string} side
 * @description reload la vue demandé par l'utilisateur
 */
async function reload(type, side = "main") {
  // console.log(`reload ${type} on ${side}`);
  /** Je fetch les information dont j'ai besoins */
  const response = await fetch("../config/config.json");
  const images = await fetch("../config/image.json");
  const coords = await fetch("../config/pointCoord_overlay.json");

  /** Je les transformes en JSON */
  const { dev, prod } = await response.json();
  const displayImage = await images.json();
  const tcs = await coords.json();

  /** Si c'est le premier chargement alors */

  // Je load la 1er image avec les paramètres par défaut.
  const view = loadView(
    type,
    side,
    displayImage,
    localStorage.getItem("brightness"),
    localStorage.getItem("contrast")
  );
  const viewCoords = loadCoords(tcs.img);

  /**
   * Ici, en plus de reload mon composant IMAGE
   * je dois aussi ajouter les filtres
   */
  if (type === "lastImage" || type === "lastSubstractionImage") {
    const IMG = document.querySelectorAll("#img");

    IMG.forEach((img) => {
      if (img.name === `img-${side}`) {
        addFilter(
          img,
          localStorage.getItem(`brightness-${side}`),
          localStorage.getItem(`contrast-${side}`)
        );
      }
    });
  }

  /** Get TIMER */
  const refresh = dev.timer;
  let refreshEnabled = document.querySelector(`#${side} #checkbox-${side}`);
  let refreshTime = null;

  /** Get event if button changed */
  refreshEnabled.addEventListener("change", function () {
    if (refreshEnabled.checked) {
      refreshTime = setInterval(() => {
        loadView(
          type,
          side,
          displayImage,
          localStorage.getItem("brightness"),
          localStorage.getItem("contrast")
        );
        loadCoords(tcs.img);
      }, refresh);
    } else {
      clearInterval(refreshTime);
    }
  });
}
