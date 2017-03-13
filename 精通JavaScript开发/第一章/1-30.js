(function(){
  'use strict';

  // ECMAScript 5 中的 filter 方法
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
      monthsContainingR = months.filter(function(value, index, fullArray) {
        return value.indexOf('r') >= 0;
      });

      console.log(monthsContainingR.join(', '));
})();
