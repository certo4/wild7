document.addEventListener('DOMContentLoaded', function() {
  
  // Variables
  var prodContainer = document.querySelector('#production-posts-container');
  var sideNav = document.querySelector('#side-navigation');

  
  // if higher than mobile view and elements exist
  if (prodContainer && sideNav) {
    
    window.addEventListener("scroll", event => {
      let fromTop = window.scrollY;
  
      if ( fromTop > prodContainer.offsetTop) {
        sideNav.classList.remove('stuck');
      } else {
        sideNav.classList.add('stuck');
      }
    });

  }
  
});
