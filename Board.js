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

Board.prototype.__getIndexBy = function(index, direction){
    if(direction === "N")
        return index[0] === "A" ? null : index[0] == "B" ? "A"+index[1] : index[0] == "C" ? "B"+index[1] : null; 
    
    if(direction === "E")
        return index[1] === "3" ? null : index[1] == "2" ? index[0]+"3" : index[1] == "1" ? index[0]+"2": null;
    
    if(direction === "S")
        return index[0] === "C" ? null : index[0] == "B" ? "C"+index[1] : index[0] == "A" ? "B"+index[1]: null;
    
    if(direction === "W")
        return index[1] === "1" ? null : index[1] == "2" ? index[0]+"1" : index[1] == "3" ? index[0]+"2": null;
    
    return null;
};