(function() {
  'use strict';

  // ECMAScript 5 中对象的create方法
  var personalDetails = {
        firstName: 'Den',
        lastName: 'Odell'
      },
      fathersDetails = Object.create(personalDetails);

      fathersDetails.firstName = 'John';

      console.log(fathersDetails.lastName);
})();
