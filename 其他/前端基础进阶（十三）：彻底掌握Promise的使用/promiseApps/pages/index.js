requirejs.config({
    baseUrl: './',
    paths: {
        jquery: './libs/jquery-3.2.1',
        API: './libs/API',
        request: './libs/request',
        calendar: './components/calendar',
        imageCenter: './components/imageCenter',
        dialog: './components/Dialog'
    }
});

define(function(require) {
    'use strict';

    var $ = require('jquery');
    var imageCenter = require('imageCenter');

    require('calendar');
    require('./components/button');

    var imageWrapList = document.querySelectorAll('.img-center');

    // 传入image的warp标签list，将其中的image标签设置为居中
    imageCenter(imageWrapList, 'wspectFill');
});