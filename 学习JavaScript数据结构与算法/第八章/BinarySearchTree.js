(function() {
    /**
     * 二叉搜索树
     */

    'use strict';

    function BinarySearchTree() {
        
        var Root = null;

        var Node = function (key) {
            this.key   = key;
            this.left  = null;
            this.right = null;
        };

        // 移除一个节点
        this.remove = function(key) {
            Root = removeNode(Root, key);
        };

        var removeNode = function(node, key) {
            if (null === node) {
                return null;
            }
            if (key < node.key) {
                node.left = removeNode(node.left, key);
                return node;

            } else if (key > node.key) {
                node.right = removeNode(node.right, key);
                return node;
            } else {
                if (node.left === null && node.right === null) {
                    node = null;
                    return node;
                }

                if (node.left === null) {
                    node = node.right;
                    return node;
                } else if (node.right === null) {
                    node = node.left;
                    return node;
                }

                var aux = findMinNode(node.right);
                node.key = aux.key;
                node.right = removeNode(node.right, aux.key);
                return node;
            }
        };

        var findMinNode = function(node) {
            if (node) {
                while (node && node.left !== null) {
                    node = node.left;
                }
                return node;
            }
            return null;
        };

        // 插入一个键
        this.insert = function(key) {
            var newNode = new Node(key);

            if (null === Root) {
                Root = newNode;
            } else {
                insertNode(Root, newNode);
            }
        };

        var insertNode = function(node, newNode) {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        };

        // 获取最小值
        this.min = function() {
            return minNode(Root);
        };

        var minNode = function(node) {
            if (node){
                while (node && node.left !== null) {
                    node = node.left;
                }
                return node.key;
            }
            return null;
        };

        // 获取最大值
        this.max = function() {
            return maxNode(Root);
        };

        var maxNode = function(node) {
            if (node) {
                while (node && node.right !== null) {
                    node = node.right;
                }
                return node.key;
            }
        };

        // 搜索一个特定的值
        this.search = function(key) {
            return searchNode(Root, key);
        };

        var searchNode = function(node, key) {
            if (node === null) {
                return false;
            }

            if (key < node.key) {
                return searchNode(node.left, key);
            } else if (key > node.key) {
                return searchNode(node.right, key);
            } else {
                return true;
            }
        };

        // 中序遍历
        this.inOrderTraverse = function(callback) {
            inOrderTraverseNode(Root, callback);
        };

        var inOrderTraverseNode = function(node, callback) {
            if (null !== node) {
                inOrderTraverseNode(node.left, callback);
                callback(node.key);
                inOrderTraverseNode(node.right, callback);
            }
        };

        // 先序遍历
        this.preOrderTraverse = function(callback) {
            preOrderTraverseNode(Root, callback);
        };

        var preOrderTraverseNode = function(node, callback) {
            if (node !== null) {
                callback(node.key);
                preOrderTraverseNode(node.left, callback);
                preOrderTraverseNode(node.right, callback);
            }
        };

        // 后序遍历
        this.postOrderTraverse = function(callback) {
            postOrderTraverseNode(Root, callback);
        };

        var postOrderTraverseNode = function(node, callback) {
            if (node !== null) {
                postOrderTraverseNode(node.left, callback);
                postOrderTraverseNode(node.right, callback);
                callback(node.key);
            }
        };
    }

    module.exports = BinarySearchTree;
})();