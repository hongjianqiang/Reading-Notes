setTimeout(function() {
    'use strict';
    var _d = '的';
    window.d = _d;

    eventProxy.emit('D', window.d);
}, Math.random()*1000);