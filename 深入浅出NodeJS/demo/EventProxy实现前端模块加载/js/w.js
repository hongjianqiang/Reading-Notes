setTimeout(function() {
    'use strict';
    var _w = '我';
    window.w = _w;

    eventProxy.emit('W', window.w);
}, Math.random()*1000);