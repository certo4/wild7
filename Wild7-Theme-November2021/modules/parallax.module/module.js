document.addEventListener('DOMContentLoaded', function() {
  
    // Variables
    var headerElement = document.querySelector('.header');
    var parallaxText = document.querySelector('#parallax-text');
    var frostedGlass = document.querySelector('.frosted-glass');
  
    
    // if higher than mobile view and elements exist
    if (headerElement && parallaxText && frostedGlass) {
      
      window.addEventListener("scroll", event => {
        let fromTop = window.scrollY;
    
        if ( fromTop > parallaxText.offsetTop) {
          headerElement.classList.remove('home-slideUp');
          frostedGlass.classList.remove('frosted-glass__home-animation');
        } else {
          headerElement.classList.add('home-slideUp');
          frostedGlass.classList.add('frosted-glass__home-animation');
        }
      });
  
    }
    
  });