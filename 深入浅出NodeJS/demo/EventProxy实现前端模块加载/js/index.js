eventProxy.all('jQuery', 'lodash', 'W', 'Z', 'D', 'H', 'S', function($, _, w, z, d, h, s) {
  'use strict';

  console.log('jQuery 的版本是：'+$.fn.jquery);
  console.log(_.partition([1, 2, 3, 4], n => n % 2));
  console.log(w+z+d+h+s);

  document.write('<p>jQuery 的版本是：'+$.fn.jquery+'</p><p>'+w+z+d+h+s+'</p>');
});
