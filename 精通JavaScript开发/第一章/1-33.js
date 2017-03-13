(function() {
  'use strict';

  // ECMAScript 5 中对象的 getOwnPropertyDescriptor 方法
  var personalDetails = {
    name: 'Den Odell',
    email: 'den.odell@me.com'
  };

  console.log(Object.getOwnPropertyDescriptor(personalDetails, 'name'));

})();
