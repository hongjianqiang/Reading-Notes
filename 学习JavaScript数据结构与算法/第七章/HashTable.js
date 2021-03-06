(function() {
    /**
     * 散列表
     */

    'use strict';

    function HashTable() {
        var table = [];

        this.put = function(key, value) {
            var position = loseloseHashCode(key);

            table[position] = value;
            console.log(position + ' - ' + key);
        };

        this.get = function(key) {
            return table[loseloseHashCode(key)];
        };

        this.remove = function(key) {
            table[loseloseHashCode(key)] = undefined;
        };

        this.print = function() {
            for (var i = 0; i < table.length; ++i) {
                if (table[i] !== undefined) {
                    console.log(i + ': ' + table[i]);
                }
            }
        }
    }

    var loseloseHashCode = function(key) {
        var hash = 0;

        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % 37;
    };

    module.exports = HashTable;
})();