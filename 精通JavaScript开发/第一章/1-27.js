(function(){
  'use strict';

  // ECMAScript 5 中的 forEach 方法
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
      ];

  months.forEach(function(value, index, fullArray) {
    console.log(value + ' is month number ' + (index + 1) + ' of ' + fullArray.length);
  });
})();
