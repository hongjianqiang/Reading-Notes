(function(){
  'use strict';

  // ECMAScript 5 中的 isArray 方法
  var months = ['January', 'February', 'March', 'April', 'May'],
      items = {
        '0': 'January',
        '1': 'February',
        '2': 'March',
        '3': 'April',
        '4': 'May'
      };

  console.log(Array.isArray(months));
  console.log(Array.isArray(items));

})();
