new Swiper('.swiper-container', {
  loop: false,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },

  effect: 'fade',

  fadeEffect: {
    crossFade: true
  }
})