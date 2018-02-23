(function() {
    /**
     * 散列表
     */

    'use strict';

    function HashTable() {
        var table = [];

        this.put = function(key, value) {
            var position = loseloseHashCode(key);

            if (table[position] === undefined) {
                table[position] = new ValuePair(key, value);
            } else {
                var index = ++position;

                while (table[index] !== undefined) {
                    index++;
                }
                table[index] = new ValuePair(key, value);
            }
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
        };

        var ValuePair = function(key, value) {
            this.key = key;
            this.value = value;

            this.toString = function() {
                return '[' + this.key + ' - ' + this.value + ']';
            };
        };
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