document.addEventListener('DOMContentLoaded', function() {
  
    // Variables
    var perspectives = document.querySelector('.coming-soon__perspectives');
    var comingSoon = document.querySelector('.coming-soon__title');
    

    if (perspectives && comingSoon) {
      perspectives.classList.add('coming-soon__rotated');
      comingSoon.classList.add('coming-soon__blur-out');
      // setTimeout(() => {
      //   comingSoon.classList.add('coming-soon__blur-out');
      // }, 500);
    }
  });