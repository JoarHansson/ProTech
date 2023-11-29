const swiperTestimonialsMobile = new Swiper(".swiper-testimonials-mobile", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperProductsMobile = new Swiper(".swiper-products-mobile", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperProductsDesktop = new Swiper(".swiper-products-desktop", {
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
