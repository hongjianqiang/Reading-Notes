(function(){
  'use strict';

  var add = function() {
    var total = 0;

    for(var i = 0, len = arguments.length; i < len; i++) {
      total += arguments[i];
    }

    return total;
  };

  console.log( add(1, 1) );
  console.log( add(1, 2, 3) );
  console.log( add(17, 19, 12, 25, 182, 42, 2) );
})();
