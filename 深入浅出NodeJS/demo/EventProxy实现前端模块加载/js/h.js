setTimeout(function() {
    'use strict';
    var _h = '好';
    window.h = _h;

    eventProxy.emit('H', window.h);
}, Math.random()*1000);