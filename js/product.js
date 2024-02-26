var smallSwiper = new Swiper(".product-images-pagination-swiper", {
    slidesPerView: "auto",
    spaceBetween: 10
})

var mainSwiper = new Swiper(".product-images-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: smallSwiper
    }
});