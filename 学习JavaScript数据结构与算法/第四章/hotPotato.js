(function() {
  'use strict';

  /**
   *  循环队列 —— 击鼓传花
   */
  var Queue = require('./Queue');

  function hotPotato (nameList, num) {
    var i;
    var queue = new Queue();

    for (i=0; i<nameList.length; i++) {
      queue.enqueue(nameList[i]);
    }

    var eliminated = '';
    while (queue.size()>1) {
      for (i=0; i<num; i++) {
        queue.enqueue(queue.dequeue());
      }
      eliminated = queue.dequeue();
      console.log(eliminated + '在击鼓传花游戏中被淘汰。');
    }

    return queue.dequeue();
  }

  var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
  var winner = hotPotato(names, 7);
  console.log('胜利者：' + winner);

  module.exports = hotPotato;
})();
