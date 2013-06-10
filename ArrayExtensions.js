Array.prototype.where = function (criteria) {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        var item = this[i];
        if (criteria(item)) {
            result.push(item);
        }
    }
    return result;
};

Array.prototype.first = function (criteria) {
    if (criteria == null)
        return this[0];

    for (var i = 0; i < this.length; i++) {
        var item = this[i];
        if (criteria(item)) {
            return item;
        }
    }
    return null;
};