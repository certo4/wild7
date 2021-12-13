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

  function setMobileFrostedGlassLength() {

    frostedGlassMain.style.height = mobileMenuLength() + 'px';

    if (document.querySelector('.menu__feed-categories')) {
      var mobileCategoriesMenu = document.querySelector('.menu__feed-categories');
      var newLength = mobileMenuLength() + mobileCategoriesMenu.offsetHeight;
      frostedGlassSecondary.style.height = newLength + 'px';
    }
  };

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
        mobileCategoriesMenu.classList.toggle('moved-up');
        frostedGlassSecondary.classList.toggle('frosted-glass__animation2');
      }, 100);
    } 

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

      // Set mobile frosted glass lengths
      // setMobileFrostedGlassLength();

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
