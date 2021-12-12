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
  var mobileCategoriesMenu = document.querySelector('.menu__feed-categories');
  var frostedGlass = document.querySelector('.frosted-glass');
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

  function mobileMenuLength() {
    return mobileMenu.offsetHeight + headerContainer.offsetHeight;
  }

  // Function for toggling mobile navigation
  function toggleNav() {

    mobileToggle.classList.toggle('is-active');
    mobileMenu.classList.toggle('moved-up');
    setTimeout(() => {mobileCategoriesMenu.classList.toggle('moved-up');}, 50);
    frostedGlass.style.height = mobileMenuLength() + 'px';
    var test = mobileMenuLength();
    console.log(test);


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
