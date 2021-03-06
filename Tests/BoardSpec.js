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

	describe("__getIndexBy", function(){
		var board;
		beforeEach(function () {
            board = new Board();
        });

        it("should get correct Index for A1", function(){
        	expect(board.__getIndexBy("A1", "N")).toEqual(null);
         	expect(board.__getIndexBy("A1", "E")).toEqual("A2");
         	expect(board.__getIndexBy("A1", "S")).toEqual("B1");
         	expect(board.__getIndexBy("A1", "W")).toEqual(null);
        });

        it("should get correct Index for A2", function(){
        	expect(board.__getIndexBy("A2", "N")).toEqual(null);
         	expect(board.__getIndexBy("A2", "E")).toEqual("A3");
         	expect(board.__getIndexBy("A2", "S")).toEqual("B2");
         	expect(board.__getIndexBy("A2", "W")).toEqual("A1");
        });

        it("should get correct Index for A3", function(){
        	expect(board.__getIndexBy("A3", "N")).toEqual(null);
         	expect(board.__getIndexBy("A3", "E")).toEqual(null);
         	expect(board.__getIndexBy("A3", "S")).toEqual("B3");
         	expect(board.__getIndexBy("A3", "W")).toEqual("A2");
        });

        it("should get correct Index for B1", function(){
        	expect(board.__getIndexBy("B1", "N")).toEqual("A1");
         	expect(board.__getIndexBy("B1", "E")).toEqual("B2");
         	expect(board.__getIndexBy("B1", "S")).toEqual("C1");
         	expect(board.__getIndexBy("B1", "W")).toEqual(null);
        });

        it("should get correct Index for B2", function(){
        	expect(board.__getIndexBy("B2", "N")).toEqual("A2");
         	expect(board.__getIndexBy("B2", "E")).toEqual("B3");
         	expect(board.__getIndexBy("B2", "S")).toEqual("C2");
         	expect(board.__getIndexBy("B2", "W")).toEqual("B1");
        });

        it("should get correct Index for B3", function(){
        	expect(board.__getIndexBy("B3", "N")).toEqual("A3");
         	expect(board.__getIndexBy("B3", "E")).toEqual(null);
         	expect(board.__getIndexBy("B3", "S")).toEqual("C3");
         	expect(board.__getIndexBy("B3", "W")).toEqual("B2");
        });

        it("should get correct Index for C1", function(){
        	expect(board.__getIndexBy("C1", "N")).toEqual("B1");
         	expect(board.__getIndexBy("C1", "E")).toEqual("C2");
         	expect(board.__getIndexBy("C1", "S")).toEqual(null);
         	expect(board.__getIndexBy("C1", "W")).toEqual(null);
        });

        it("should get correct Index for C2", function(){
        	expect(board.__getIndexBy("C2", "N")).toEqual("B2");
         	expect(board.__getIndexBy("C2", "E")).toEqual("C3");
         	expect(board.__getIndexBy("C2", "S")).toEqual(null);
         	expect(board.__getIndexBy("C2", "W")).toEqual("C1");
        });

        it("should get correct Index for B3", function(){
        	expect(board.__getIndexBy("C3", "N")).toEqual("B3");
         	expect(board.__getIndexBy("C3", "E")).toEqual(null);
         	expect(board.__getIndexBy("C3", "S")).toEqual(null);
         	expect(board.__getIndexBy("C3", "W")).toEqual("C2");
        });
	});

	describe("CanPlaceCard", function(){
		var board;
		beforeEach(function () {
            board = new Board();
            board.__cards[3].value = {};    
        });

		it("should return true for empty slot", function(){
			expect(board.CanPlaceCard("A1")).toEqual(true);
		});

		it("should return false for none empty slot", function(){
			expect(board.CanPlaceCard("A2")).toEqual(false);
		});
	});

	describe("PlaceCard", function(){

		describe("and CanPlaceCard is false", function(){
			var board;
			var result;
			beforeEach(function () {
	            board = new Board();
	            spyOn(board, "CanPlaceCard").andCallFake(function(){return false;});
	            result = board.PlaceCard();    
	        });

			it("should check if CanPlaceCard", function(){
				expect(board.CanPlaceCard).toHaveBeenCalled();
			});

			it("should return false", function(){
				expect(result).toEqual(false);
			});
		});

		describe("and CanPlaceCard is true", function(){
			var board;
			var result;
			beforeEach(function () {
	            board = new Board();
	            spyOn(board, "CanPlaceCard").andCallFake(function(){return true;});
	            result = board.PlaceCard();    
	        });

			it("should check if CanPlaceCard", function(){
				expect(board.CanPlaceCard).toHaveBeenCalled();
			});

			it("should return true", function(){
				expect(result).toEqual(true);
			});
		});

	});
});