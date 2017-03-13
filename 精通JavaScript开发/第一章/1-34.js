(function() {
  'use strict';

  // ECMAScript 5 中的属性定义
  var personalDetails = {
    name: 'Den Odell',
    email: 'den.odell@me.com'
  };

  Object.defineProperty(personalDetails, 'age', {
    value: 25,
    writable: false,
    enumerable: true,
    configurable: true
  });

})();
