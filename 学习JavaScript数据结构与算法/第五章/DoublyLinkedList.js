(function() {
  'use strict';

  /**
   * 双向链表
   */
  function DoublyLinkedList() {
    var Node = function(element) {
      this.element = element;
      this.next = null;
      this.prev = null; // 新增的
    };

    var length = 0;
    var head = null;
    var tail = null; // 新增的

    this.insert = function(position, element) {
      // 检查越界
      if (0 <= position && position <= length) {
        var node = new Node(element),
            current = head,
            previous,
            index = 0;

        if (0 === position) {
          if (!head) { // 新增的
            head = node;
            tail = node;
          } else {
            node.next = current;
            current.prev = node; // 新增的
            head = node;
          }
        } else if (position === length) { // 最后一项，新增的
          current = tail;
          current.next = node;
          node.prev = current;
          tail = node;
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          node.next = current;
          previous.next = node;

          current.prev = node; // 新增的
          node.prev = previous; // 新增的
        }
        length++; // 更新列表的长度

        return true;
      } else {
        return false;
      }
    };

    this.removeAt = function(position) {
      // 检查越界值
      if (-1 < position && position < length) {
        var current = head,
            previous,
            index = 0;

        // 移除第一项
        if (position === 0) {
          head = current.next;

          // 如果只有一项，更新tail
          if (length === 1) {
            tail = null;
          } else {
            head.prev = null;
          }

        } else if (position === length - 1) {
          current = tail;
          tail = current.prev;
          tail.next = null;

        } else {
          while (index++ < position) {
            previous = current;
            current  = current.next;
          }

          // 将previous与current的下一项链接起来，跳过current
          previous.next = current.next;
          current.next.prev = previous;  // 新增的
        }

        length--;

        return current.element;

      } else {
        return null;
      }
    };
  }

  module.exports = DoublyLinkedList;
})();
