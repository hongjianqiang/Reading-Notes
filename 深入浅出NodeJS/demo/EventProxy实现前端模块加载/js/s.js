setTimeout(function() {
    'use strict';
    var _s = '帅';
    window.s = _s;

    eventProxy.emit('S', window.s);
}, Math.random()*1000);