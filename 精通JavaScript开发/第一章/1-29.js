(function(){
  'use strict';

  // ECMAScript 5 中的 map 方法
  var daysOfTheWeek = ['Monday', 'Tuesday', 'Webnesday'],
      daysFirstLetters = daysOfTheWeek.map(function(value, index, fullArray) {
        return value + ' starts with ' + value.charAt(0);
      });

  console.log(daysFirstLetters.join(', '));

})();
