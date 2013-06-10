describe("Board", function () {
    
    describe("ValidIndexes", function () {
        var board;

        beforeEach(function () {
            board = new Board();
        });

        it("should have 9 indexes", function () {
            expect(board.ValidIndexes.length).toEqual(9);
        });

    });


    describe("__cards", function(){
		var board;

        beforeEach(function () {
            board = new Board();
        });

        it("should have 9 items", function () {
            expect(board.__cards.length).toEqual(9);
        });

        it("should have correct indexes", function () {
            expect(board.__cards[0].key).toEqual("A1");
            expect(board.__cards[1].key).toEqual("B1");
            expect(board.__cards[2].key).toEqual("C1");
            expect(board.__cards[3].key).toEqual("A2");
            expect(board.__cards[4].key).toEqual("B2");
            expect(board.__cards[5].key).toEqual("C2");
            expect(board.__cards[6].key).toEqual("A3");
            expect(board.__cards[7].key).toEqual("B3");
            expect(board.__cards[8].key).toEqual("C3");
        });
    });

    describe("GetByIndex", function(){
		var board;

        beforeEach(function () {
            board = new Board();
        });

        it("should get for A1", function () {
            expect(board.GetByIndex("A1").key).toEqual("A1");
			expect(board.GetByIndex("A1")).toEqual(board.__cards[0]);
        });
        it("should get for B1", function () {
            expect(board.GetByIndex("B1").key).toEqual("B1");
			expect(board.GetByIndex("B1")).toEqual(board.__cards[1]);
        });
        it("should get for C1", function () {
            expect(board.GetByIndex("C1").key).toEqual("C1");
			expect(board.GetByIndex("C1")).toEqual(board.__cards[2]);
        });
        it("should get for A2", function () {
            expect(board.GetByIndex("A2").key).toEqual("A2");
			expect(board.GetByIndex("A2")).toEqual(board.__cards[3]);
        });
        it("should get for B2", function () {
            expect(board.GetByIndex("B2").key).toEqual("B2");
			expect(board.GetByIndex("B2")).toEqual(board.__cards[4]);
        });
        it("should get for C2", function () {
            expect(board.GetByIndex("C2").key).toEqual("C2");
			expect(board.GetByIndex("C2")).toEqual(board.__cards[5]);
        });
        it("should get for A3", function () {
            expect(board.GetByIndex("A3").key).toEqual("A3");
			expect(board.GetByIndex("A3")).toEqual(board.__cards[6]);
        });
        it("should get for B3", function () {
            expect(board.GetByIndex("B3").key).toEqual("B3");
			expect(board.GetByIndex("B3")).toEqual(board.__cards[7]);
        });
        it("should get for C3", function () {
            expect(board.GetByIndex("C3").key).toEqual("C3");
			expect(board.GetByIndex("C3")).toEqual(board.__cards[8]);
        });
    });


	describe("GetEmptySlots", function(){
		var board;
        beforeEach(function () {
            board = new Board();
            board.__cards[3].value = {};
            board.__cards[4].value = {};
            board.__cards[5].value = {};
            board.__cards[6].value = {};
            board.__cards[7].value = {};
            board.__cards[8].value = {};
        });

        it("should return all empty slots", function(){
        	//A2:C3 have been assigned a value, so are no longer empty
    		expect(board.GetEmptySlots()).toEqual(["A1","B1","C1"]);
        });

	});

});