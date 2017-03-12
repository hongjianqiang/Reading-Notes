(function() {
  'use strict';

  var Class = require('./1-19');

  var Accommodation = Class.create({
    isLocked: true,
    isAlarmed: true,
    lock: function() {
      this.isLocked = true;
    },
    unlock: function() {
      this.isLocked = false;
    },
    initialize: function() {
      this.unlock();
    }
  });

  var House = Accommodation.extend({
    floors: 2,
    lock: function() {
      this._parent();
      console.log('Number of floors locked: ' + this.floors);
    }
  });

  var myAccommodation = new Accommodation();
  console.log(myAccommodation instanceof Accommodation);
  console.log(myAccommodation instanceof House);

  var myHouse = new House();
  console.log(myHouse.isLocked);
  myHouse.lock();
  console.log(myHouse.isLocked);
  console.log(myHouse instanceof House);
  console.log(myHouse instanceof Accommodation);

})();
