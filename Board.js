function Board() { }
Board.prototype.ValidIndexes = ["A1","A2","A3","B1","B2","B3","C1","C2","C3"];

Board.prototype.__cards = [
{ key: "A1", value: null }, { key: "B1", value: null }, { key: "C1", value: null },
{ key: "A2", value: null }, { key: "B2", value: null }, { key: "C2", value: null },
{ key: "A3", value: null }, { key: "B3", value: null }, { key: "C3", value: null }];

Board.prototype.GetByIndex = function (index) {
    return this.__cards.first(function (x) { return x.key === index });
};

Board.prototype.GetEmptySlots = function () {
    var result = [];
    for (var i = 0; i < this.ValidIndexes.length; i++) {
        var index = this.ValidIndexes[i];
        var selectedSlot = this.GetByIndex(index);
        if (selectedSlot.value == null) {
            result.push(index);
        }
    }
    return result;
};