(function() {
  'use strict';

  // 一个用于简化其他 “类” 创建的基 “类”
  var Class = (function() {
    function create(classDefinition, parentPrototype) {
      var _NewClass = function() {
        if (this.initialize && typeof this.initialize === 'function') {
          this.initialize.apply(this, arguments);
        }
      };
      var _name;

      if (parentPrototype) {
        _NewClass.prototype = new parentPrototype.constructor();

        for (_name in parentPrototype) {
          if (parentPrototype.hasOwnProperty(_name)) {
            _NewClass.prototype[_name] = parentPrototype[_name];
          }
        }
      }

      function polymorph(thisFunction, parentFunction) {
        return function () {
          var output;

          this._parent = parentFunction;
          output = thisFunction.apply(this, arguments);
          delete this._parent;
          return output;
        };
      }

      for (_name in classDefinition) {
        if (classDefinition.hasOwnProperty(_name)) {
          if (parentPrototype && parentPrototype[_name] && typeof classDefinition[_name] === 'function') {
            _NewClass.prototype[_name] = polymorph(classDefinition[_name], parentPrototype[_name]);
          } else {
            _NewClass.prototype[_name] = classDefinition[_name];
          }
        }
      }

      _NewClass.prototype.constructor = _NewClass;
      _NewClass.extend = extend;
      return _NewClass;
    }

    function extend(classDefinition) {
      return create(classDefinition, this.prototype);
    }

    return { create: create };
  }());

  module.exports = Class;
})();
