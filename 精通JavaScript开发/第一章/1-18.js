(function(){
  'use strict';

  var Accommodation = (function(){
    function Accommodation() {}

    var _isLocked = true,
        _isAlarmed = false,
        _alarmMessage = 'Alarm activated!';

    function _alarm() {
      _isAlarmed = true;
      console.log(_alarmMessage);
    }

    function _disableAlarm() {
      _isAlarmed = false;
    }

    Accommodation.prototype.lock = function() {
      _isLocked = true;
      _alarm();
    };

    Accommodation.prototype.unlock = function() {
      _isLocked = false;
      _disableAlarm();
    };

    Accommodation.prototype.getIsLocked = function() {
      return _isLocked;
    };

    Accommodation.prototype.setAlarmMessage = function(message) {
      _alarmMessage = message;
    };

    return Accommodation;
  })();

  var house = new Accommodation();
  house.lock();
  // house._alarm(); // 错误！ _alarm 函数从未被公开暴露
  // console.log(house._isLocked); // undefined
  house.getIsLocked();
  house.setAlarmMessage('The alarm is new activated!');
  house.lock();

})();
