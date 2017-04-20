setTimeout(function() {
    'use strict';
    var _z = '真';
    window.z = _z;

    eventProxy.emit('Z', window.z);
}, Math.random()*1000);