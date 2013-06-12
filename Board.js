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
    
    return undefined;
};

Board.prototype.CanPlaceCard = function(index){
    if(index === undefined)
        return false;

    var emptySlots = this.GetEmptySlots();
    for(var i=0; i < emptySlots.length; i++){
        if(index === emptySlots[i]){
            return true;
        }
    }
    return false;
};

Board.prototype.PlaceCard = function(card, index){
    if(this.CanPlaceCard(index)){
        this.__setCard(index,card);
        var northIndex = this.__getIndexBy(index, "N");
        if(this.CanPlaceCard(northIndex)){
            this.__flipIfNeeded(northIndex, card, "N");
        }
        var eastIndex = this.__getIndexBy(index, "E");
        if(this.CanPlaceCard(eastIndex)){
            this.__flipIfNeeded(eastIndex, card, "E");
        }
        var southIndex = this.__getIndexBy(index, "S");
        if(this.CanPlaceCard(southIndex)){
            this.__flipIfNeeded(southIndex, card, "S");
        }
        var westIndex = this.__getIndexBy(index, "W");
        if(this.CanPlaceCard(westIndex)){
           this.__flipIfNeeded(westIndex, card, "W");
        }
        return true;
    }
    return false;
};

Board.prototype.__setCard = function(index, card){
    this.__cards.first(function(x){ return x.key === index}).value = card;
};

Board.prototype.__flipIfNeeded = function(index, card, direction){
    if(direction === "N"){
        //placed card is to south
        var opponentIndex = this.__getIndexBy(index, "N");
        if(card.attributes.north > this.GetByIndex(opponentIndex).attributes.south){
            this.GetByIndex(opponentIndex).SwapPlayer();
        }
    }
    if(direction === "E"){
        //placed card is to west
        var opponentIndex = this.__getIndexBy(index, "E");
        if(card.attributes.east > this.GetByIndex(opponentIndex).attributes.west){
            this.GetByIndex(opponentIndex).SwapPlayer();
        }
    }
    if(direction === "S"){
        //placed card is to north
        var opponentIndex = this.__getIndexBy(index, "S");
        if(card.attributes.south > this.GetByIndex(opponentIndex).attributes.north){
            this.GetByIndex(opponentIndex).SwapPlayer();
        }
    }
    if(direction === "W"){
        //placed card is to east
            var opponentIndex = this.__getIndexBy(index, "W");
        if(card.attributes.west > this.GetByIndex(opponentIndex).attributes.east){
            this.GetByIndex(opponentIndex).SwapPlayer();
        }
    } 
};

Board.prototype.GetScore = function(){
    var player1 = 0;
    var player2 = 0;
    for(var i = 0; i < this.ValidIndexes.length; i++){
        var card = this.GetByIndex(this.ValidIndexes[i])
        if(card.value !== null){
            if(card.playerId === 1)
                player1++;
            else if(card.playerId === 2)
                player2++;
        }    
    }
    
    return {
        player1 : player1,
        player2 : player2
    };
};


function Card(id, name, description){
    this.__id = id;
    this.__name = name;
    this.__description = description;
    this.__uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
    this.__player = 0;
};

Card.prototype.__id= null;
Card.prototype.__name= null;
Card.prototype.__description= null;
Card.prototype.__player= null;
Card.prototype.__uuid = null;
Card.prototype.__attributes = { north:0, south:0, east:0, west:0};
Card.prototype.SwapPlayer = function(){
    if(this.__player == 1){
        this.__player = 2;
    } else if(this.__player == 2){
        this.__player = 1;
    }
    return this.__player;
};

Card.prototype.SetPlayer = function(playerId){
    this.__player = playerId;
};


function CardSet(cards, player){
    this.__cards = card;
    this.__player = player;
};
CardSet.prototype.__cards = [];
CardSet.prototype.__player = 0;