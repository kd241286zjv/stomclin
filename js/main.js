$(document).ready(function() {
  var promoSwiper = new Swiper('.promoSliderSection .swiper-container', {
      navigation: {
        nextEl: '.promoSliderSection .swiper-button-next',
        prevEl: '.promoSliderSection .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

    var portfolioSwiper = new Swiper('.portfolioSection .swiper-container', {
        navigation: {
          nextEl: '.portfolioSection .swiper-button-next',
          prevEl: '.portfolioSection .swiper-button-prev',
        },
      });
})
