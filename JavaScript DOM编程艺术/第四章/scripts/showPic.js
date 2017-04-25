(function() {
  'use strict';

  function showPic(whichpic) {
    var source = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    var text = whichpic.getAttribute('title');
    var description = document.getElementById('description');

    placeholder.setAttribute('src', source);
    description.childNodes[0].nodeValue = text;
    console.log(description.firstChild.nodeValue);  // 与上面 description.childNodes[0].nodeValue 等价
  }

  window.showPic = showPic;

  // 4.4 对这个函数进行扩展
  function countBodyChildren() {
    var body_element = document.getElementsByTagName('body')[0];

    console.log(body_element.childNodes);
    console.log(body_element.childNodes.length);
    console.log(body_element.nodeType);
  }
  window.onload = countBodyChildren;

  $('ul').append(`
    <li>
      <a href="/images/mm.jpg"
        title="A beauty girl."
        onmouseover="showPic(this);"
        onclick="showPic(this); return false;">
        girl
      </a>
    </li>
  `);

  // 平稳退化
  function popUp(winURL) {
    window.open(winURL, 'popup', 'with=320, height=480');
  }
  window.popUp = popUp;
})();
