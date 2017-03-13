(function() {
  'use strict';

  // ECMAScript 5 中对象的 freeze 方法
  var personalDetails = {
    name: 'Den Odell',
    email: 'den.odell@me.com'
  };

  Object.freeze(personalDetails);

  console.log(Object.isFrozen(personalDetails));

  // personalDetails.name = 'John Odell';  // 严格模式下会报错

})();
