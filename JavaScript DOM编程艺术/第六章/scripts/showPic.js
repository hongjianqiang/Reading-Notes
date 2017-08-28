(function() {
  'use strict';

  function showPic(whichpic) {
    if (!document.getElementById('placeholder')) return false;

    var source = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');

    if (placeholder.nodeName !== 'IMG') return false;
    placeholder.setAttribute('src', source);

    if (document.getElementById('description')) {
      var text = '';

      if (whichpic.getAttribute('title')) {
        text = whichpic.getAttribute('title');
      }

      var description = document.getElementById('description');
      if (description.firstChild.nodeType === 3) {
        description.firstChild.nodeValue = text;
      }
    }

    return true;
  }

  function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById('imagegallery')) return false;

    var gallery = document.getElementById('imagegallery');
    var links = gallery.getElementsByTagName('a');

    for (var i = 0; i < links.length; i++) {
      links[i].onclick = function() {
        return !showPic(this);
      };
      links[i].onkeypress = links[i].onclick;
    }
  }

  window.onload = prepareGallery;

  // window.name跨域测试
  window.name = '这里是http://localhost:8082/gallery.html页面的数据';
})();
