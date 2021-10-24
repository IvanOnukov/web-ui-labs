$( document ).ready(function() {
  $('.slider').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    responsive:[
      {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
  });
});
