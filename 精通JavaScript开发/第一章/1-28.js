(function(){
  'use strict';

  // ECMAScript 5 中的 every 和 some 方法
  var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      everyItemContainsR = months.every(function(value, index, fullArray) {
        return value.indexOf('r') >= 0;
      }),
      someItemContainsR = months.some(function(value, index, fullArray) {
        return value.indexOf('r') >= 0;
      });

  console.log(everyItemContainsR);
  console.log(someItemContainsR);

})();
