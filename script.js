const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination-bullets",
    typeof: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
