(function(){
  'use strict';

  // 通过原型继承创建一个子类

  function Accommodation() {
  }

  Accommodation.prototype.lock = function() {
    console.log('locked.');
  };

  Accommodation.prototype.unlock = function() {
    console.log('unlocked.');
  };

  function House(defaults) {
    defaults = defaults || {};
    this.floors = 2;
    this.rooms = defaults.rooms || 7;
  }

  House.prototype = new Accommodation();
  House.prototype.constructor = House;

  var myHouse = new House();
  var myNeighborsHouse = new House({ rooms: 8 });

  console.log(myHouse.rooms);
  console.log(myNeighborsHouse.rooms);

  myHouse.lock();
  myNeighborsHouse.unlock();

  console.log(myHouse.constructor === House);
  console.log(myHouse.constructor === Accommodation);

  console.log(myNeighborsHouse instanceof House);
  console.log(myNeighborsHouse instanceof Accommodation);
})();
