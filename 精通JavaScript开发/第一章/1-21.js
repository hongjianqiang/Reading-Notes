(function(){
  'use strict';

  // 代码块和作用域
  function myFunction() {
    var myArray = ['January', 'February', 'March', 'April', 'May'],
        myArrayLength = myArray.length,
        counter = 0;

    for (var index = 0; index < myArrayLength; index++) {
      counter = index + 1;
    }

    console.log(counter);
    console.log(index);
    console.log(myArrayLength);

    if (myArrayLength > 0) {
      var counter,
          index = 0,
          myArrayLength;

      counter = 0;
    }

    console.log(counter);
    console.log(index);
    console.log(myArrayLength);
  }

  myFunction();
})();
