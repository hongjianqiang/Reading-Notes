(function() {
  'use strict';

  // 多态

  function Accommodation() {
    this.isLocked = false;
    this.isAlarmed = false;
  }

  Accommodation.prototype.lock = function() {
    this.isLocked = true;
  };

  Accommodation.prototype.unlock = function() {
    this.isLocked = false;
  };

  Accommodation.prototype.alarm = function() {
    this.isAlarmed = true;
    console.log('Alarm deactivated');
  };

  function House() {
  }

  House.prototype = new Accommodation();
  House.prototype.constructor = House;

  House.prototype.lock = function() {
    Accommodation.prototype.lock.call(this);
    console.log(this.isLocked);
    this.alarm();
  };

  House.prototype.unlock = function() {
    Accommodation.prototype.unlock.call(this);
    console.log(this.isLocked);
    this.alarm();
  };

  var myHouse = new House();

  myHouse.lock();
  myHouse.unlock();
})();
