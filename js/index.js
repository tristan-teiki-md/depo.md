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