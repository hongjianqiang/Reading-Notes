(function(){
  'use strict';

  // 函数的bind方法
  var header = document.createElement('header'),
      mouseState = 'up',
      eventHandlers = {
        onClick: function() {
          this.onMouseDown();
          this.onMouseUp();
        },
        onMouseDown: function() {
          mouseState = 'down';
        },
        onMouseUp: function() {
          mouseState = 'up';
        }
      };

      header.addEventListener('click', eventHandlers.onClick.bind(eventHandlers), false);

      document.body.appendChild(header);
})();
