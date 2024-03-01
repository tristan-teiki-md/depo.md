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
    disableScroll(false);
  } else {
    burgerMenu.style.left = "0px";
    menuIcon.style.display = "none";
    closeMenuIcon.style.display = "inline-block";
    disableScroll(true);
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
    disableScroll(false);
  }
})

categoriesBtn.addEventListener("click", () => {
  if (categoriesMenu.style.left === "-100svw") {
    categoriesMenu.style.left = "0px";
    categoriesMenu.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    disableScroll(true);
  }
});

function disableScroll(disable) {
  if (disable) {
    document.body.dataset.scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = '100%';
  } else {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(document.body.dataset.scrollY || '0', 10));
  }
}

// Header hide and show on scroll
let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  console.log(currentScroll)

  if (currentScroll >= 200 && currentScroll > lastScrollTop) {
      header.style.top = "-170px";
  } else {
      header.style.top = "0px";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});