(function() {
    /**
     * 测试代码
     */

    'use strict';

    var BinarySearchTree = require('./BinarySearchTree');

    var tree = new BinarySearchTree();

    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(3);
    tree.insert(9);
    tree.insert(8);
    tree.insert(10);
    tree.insert(13);
    tree.insert(12);
    tree.insert(14);
    tree.insert(20);
    tree.insert(18);
    tree.insert(25);
    tree.insert(6);

    var out = [];
    var push = function(value) {
        out.push(value);
    };

    // 中序遍历
    out = [];
    tree.inOrderTraverse(push);
    console.log('中序遍历：', out);

    // 先序遍历
    out = [];
    tree.preOrderTraverse(push);
    console.log('先序遍历：', out);

    // 后序遍历
    out = [];
    tree.postOrderTraverse(push);
    console.log('后序遍历：', out);

    console.log('最小值：' + tree.min());
    console.log('最大值：' + tree.max());

    console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
    console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');

    // 移除一个叶节点
    tree.remove(6);
    out = [];
    tree.preOrderTraverse(push);
    console.log('移除一个叶节点(先序遍历)：', out);

    // 移除有一个左侧或右侧子节点的节点
    tree.remove(5);
    out = [];
    tree.preOrderTraverse(push);
    console.log('移除有一个左侧或右侧子节点的节点(先序遍历)：', out);

    // 移除有两个子节点的节点
    tree.remove(15);
    out = [];
    tree.preOrderTraverse(push);
    console.log('移除有两个子节点的节点(先序遍历)：', out);
})();




























