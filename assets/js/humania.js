/* HumanIA — Speakers carousel init */
document.addEventListener('DOMContentLoaded', function () {

  if (typeof Swiper === 'undefined' || !document.querySelector('.hn-speakers-swiper')) return;

  new Swiper('.hn-speakers-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: '.hn-swiper-next',
      prevEl: '.hn-swiper-prev'
    },
    breakpoints: {
      576: { slidesPerView: 1, spaceBetween: 16 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1100: { slidesPerView: 3, spaceBetween: 24 }
    },
    a11y: {
      prevSlideMessage: 'Speaker anterior',
      nextSlideMessage: 'Siguiente speaker'
    },
    on: {
      init: function (swiper) {
        updateNavState(swiper);
      },
      slideChange: function (swiper) {
        updateNavState(swiper);
      }
    }
  });

  function updateNavState(swiper) {
    var prev = document.querySelector('.hn-swiper-prev');
    var next = document.querySelector('.hn-swiper-next');
    if (!prev || !next) return;
    prev.classList.toggle('swiper-button-disabled', swiper.isBeginning);
    next.classList.toggle('swiper-button-disabled', swiper.isEnd);
  }

});
