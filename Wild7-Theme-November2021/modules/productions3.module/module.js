document.addEventListener('DOMContentLoaded', function() {
  
  // Variables
  var prodContainer = document.querySelector('#production-posts-container');
  var sideNavContainer = document.querySelector('.side-navigation-container');

  
  // if higher than mobile view and elements exist
  if (prodContainer && sideNavContainer) {
    
    window.addEventListener("scroll", event => {
      let fromTop = window.scrollY;
  
      if ( fromTop > prodContainer.offsetTop) {
        sideNavContainer.classList.add('slideLeft');
      } else {
        sideNavContainer.classList.remove('slideLeft');
      }
    });

  }
  
});


// Flickity Mobile Carousel

var flkty = new Flickity( '.main-gallery', {
  // options
  cellAlign: 'center',
  autoPlay: true,
  contain: true,
  draggable: true,
  wrapAround: true,
  imagesLoaded: true,
  lazyLoad: true,
  prevNextButtons: false
});
