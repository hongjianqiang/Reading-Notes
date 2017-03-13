(function() {
  'use strict';

  // ECMAScript 5 中对象的keys方法
  var personalDetails = {
        name: 'Den Odell',
        email: 'den.odell@me.com'
      },
      keys = Object.keys(personalDetails);

  console.log(keys.join(', '));

})();
