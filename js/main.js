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

    $('a.js-anchor').click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
})
