$(document).ready(function() {
  $('.main-gallery').slick({
      dots: false,
      infinite: true,
      centerMode: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      pauseOnFocus: true,
      respondTo: 'window',
      draggable: true,
      swipeToSlide: true,
      responsive: [
        // {
        //   breakpoint: 1000,
        //   settings: {
        //     slidesToShow: 4
        //   }
        // },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  });
});