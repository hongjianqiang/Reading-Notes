(function() {
    /**
     * 集合
     */

    'use strict';

    function Set() {
        var items = {};

        this.has = function(value) {
            return items.hasOwnProperty(value);
        };

        this.add = function(value) {
            if (!this.has(value)) {
                items[value] = value;
                return true;
            }
            return false;
        };

        this.remove = function(value) {
            if (this.has(value)) {
                delete items[value];
                return true;
            }
            return false;
        };

        this.clear = function() {
            items = {};
        };

        this.size = function() {
            return Object.keys(items).length;
        };

        this.values = function() {
            return Object.keys(items);
        };

        // 并集
        this.union = function(otherSet) {
            var unionSet = new Set();

            var values = this.values();

            var i;
            for (i = 0; i < values.length; i++) {
                unionSet.add(values[i]);
            }

            values = otherSet.values();
            for (i = 0; i < values.length; i++) {
                unionSet.add(values[i]);
            }

            return unionSet;
        };

        // 交集
        this.intersection = function(otherSet) {
            var intersectionSet = new Set();

            var values = this.values();

            var i;
            for (i = 0; i < values.length; i++) {
                if (otherSet.has(values[i])) {
                    intersectionSet.add(values[i]);
                }
            }

            return intersectionSet;
        };

        // 差集
        this.defference = function(otherSet) {
            var defferenceSet = new Set();

            var values = this.values();

            var i;
            for (i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    defferenceSet.add(values[i]);
                }
            }

            return defferenceSet;
        };

        // 子集
        this.subset = function(otherSet) {
            if (this.size() > otherSet.size()) {
                return false;
            } else {
                var values = this.values();

                var i;
                for (i = 0; i < values.length; i++) {
                    if (!otherSet.has(values[i])) {
                        return false;
                    }
                }

                return true;
            }
        };
    }

    module.exports = Set;
})();
