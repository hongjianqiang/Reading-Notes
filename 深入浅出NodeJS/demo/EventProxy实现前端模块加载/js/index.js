eventProxy.all('jQuery', 'lodash', function($, _) {
  'use strict';

  console.log('jQuery 的版本是：'+$.fn.jquery);
  console.log(_.partition([1, 2, 3, 4], n => n % 2));
});
