/**
 * On récupere les données du la navigation
 */

const BUTTONS = document.querySelectorAll("button");

BUTTONS.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    setItem("type-main", type);
    reload(type);
  });
});
