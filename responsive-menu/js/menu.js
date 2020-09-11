const iconMenu = document.getElementById("icon-menu");
const mainMenu = document.getElementById("main-menu");

iconMenu.addEventListener("click", () =>
  mainMenu.classList.toggle("menu--show")
);
