(function() {
  'use strict';

  setTimeout(function() {
    function showPic(whichpic) {
      var source = whichpic.getAttribute('href');
      var placeholder = document.getElementById('placeholder');

      placeholder.setAttribute('src', source);
    }

    window.showPic = showPic;
  }, 10*1000);
})();
