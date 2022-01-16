(function () {
  // Polyfill for NodeList.prototype.forEach() in IE
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  // Variables
  var emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');
  var mobileToggle = document.querySelector('.header__hamburger');
  var mobileMenu = document.querySelector('.menu__main-menu');
  var frostedGlassMain = document.querySelector('.frosted-glass--mobile-main');
  var frostedGlassSecondary = document.querySelector('.frosted-glass--mobile-categories');
  var headerContainer = document.querySelector('.header__container');
  var redDot = document.querySelector('#dot');
  var blueDot = document.querySelector('#dot-blue');

  // Functions

  // Function for executing code on document ready
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  // Helper function to get length of main mobile menu
  function mobileMenuLength() {
    return mobileMenu.offsetHeight + headerContainer.offsetHeight;
  }

  // Function for toggling mobile navigation
  function toggleNav() {

    mobileToggle.classList.toggle('is-active');
    
    mobileMenu.classList.toggle('moved-up');
    
    frostedGlassMain.classList.toggle('frosted-glass__animation');

    // If there's a post feed
    if (document.querySelector('.menu__feed-categories')) {

      var mobileCategoriesMenu = document.querySelector('.menu__feed-categories');
      mobileCategoriesMenu.style.paddingTop = mobileMenuLength() + 'px';
      
      setTimeout(() => {
        mobileCategoriesMenu.classList.toggle('moved-up2');
        frostedGlassSecondary.classList.toggle('frosted-glass__animation2');
      }, 100);
    } 

  }

  // Function to move red and blue dots with mouse
  function flareMove(e) {
    redDot.style.setProperty('--mouse-x', e.clientX + "px");
    blueDot.style.setProperty('--mouse-x', e.clientX + "px");
    redDot.style.setProperty('--mouse-y', e.clientY + "px");
    blueDot.style.setProperty('--mouse-y', e.clientY + "px");
  }

  // Function to change location of lense flare
  function flareMovement() {
    let top = Math.floor(Math.random() * 81) + 10; 
    let left = Math.floor(Math.random() * 81) + 10;

    let topDiff = Math.floor(Math.random() * 30) + 5; 
    let leftDiff = Math.floor(Math.random() * 30) + 5;

    document.getElementById("dot").style.top = top + "%";
    document.getElementById("dot").style.left = left + "%";

    void document.getElementById("dot").offsetWidth;
    void document.getElementById("dot").offsetHeight;

    document.getElementById("dot-blue").style.top = top + topDiff + "%";
    document.getElementById("dot-blue").style.left = left + leftDiff + "%";

    void document.getElementById("dot-blue").offsetWidth;
    void document.getElementById("dot-blue").offsetHeight;
  }

  // Function to disable the other checkbox inputs on the email subscription system page template
  function toggleDisabled() {
    var emailSubItem = document.querySelectorAll('#email-prefs-form .item');

    emailSubItem.forEach(function (item) {
      var emailSubItemInput = item.querySelector('input');

      if (emailGlobalUnsub.checked) {
        item.classList.add('disabled');
        emailSubItemInput.setAttribute('disabled', 'disabled');
        emailSubItemInput.checked = false;
      } else {
        item.classList.remove('disabled');
        emailSubItemInput.removeAttribute('disabled');
      }
    });
  }

  // Execute JavaScript on document ready
  domReady(function () {
    if (!document.body) {
      return;
    } else {
      let root = document.documentElement;
      let fromTop = window.scrollY;
      // Lense flare animation
      // setInterval(flareMovement, 3000);
      root.addEventListener("mousemove", e => {
        root.style.setProperty('--mouse-x', e.clientX + fromTop + "px");
        root.style.setProperty('--mouse-y', e.clientY + "px");
        // redDot.classList.toggle('animation');
      });

      // Function dependent on mobile toggle
      if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleNav);
      }

      // Function dependent on email unsubscribe from all input
      if (emailGlobalUnsub) {
        emailGlobalUnsub.addEventListener('change', toggleDisabled);
      }
    }
  });
})();
