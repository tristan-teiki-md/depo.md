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



// Banner Swiper
let bannerSwiper = new Swiper(".banner-swiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Products Swiper
var productsSwiper = new Swiper(".products-swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
});