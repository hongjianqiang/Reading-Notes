(function() {
  'use strict';

  // ECMAScript 5 中的对象方法
  var personalDetails = {
    name: 'Den Odell',
    email: 'den.odell@me.com'
  };

  console.log(Object.isExtensible(personalDetails));

  Object.preventExtensions(personalDetails);

  console.log(Object.isExtensible(personalDetails));

  // personalDetails.age = 35;  // 严格模式下将会报错

})();
