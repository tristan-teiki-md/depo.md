// Burger Menu
const burgerBtn = document.getElementById("burger-btn");
const burgerMenu = document.getElementById("burger-menu");
const menuIcon = burgerBtn.querySelector("i.fa-bars");
const closeMenuIcon = burgerBtn.querySelector("i.fa-xmark");

burgerBtn.addEventListener("click", () => {
  if (burgerMenu.style.left === "0px") {
    burgerMenu.style.left = "-100%";
    menuIcon.style.display = "inline-block";
    closeMenuIcon.style.display = "none";
  } else {
    burgerMenu.style.left = "0px";
    menuIcon.style.display = "none";
    closeMenuIcon.style.display = "inline-block";
  }
});

// Categories Menu
const categoriesBtn = document.getElementById("categories-btn");
const categoriesMenu = document.getElementById("categories-menu");

categoriesMenu.style.left = "-100svw";

categoriesMenu.addEventListener("click", (event) => {
  if (event.target === categoriesMenu) {
    categoriesMenu.style.backgroundColor = "rgba(0, 0, 0, 0)";
    categoriesMenu.style.left = "-100svw";
  }
})

categoriesBtn.addEventListener("click", () => {
  if (categoriesMenu.style.left === "-100svw") {
    categoriesMenu.style.left = "0px";
    categoriesMenu.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
  }
});