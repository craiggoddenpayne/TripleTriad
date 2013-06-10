describe("ArrayExtensions", function () {

	describe("Where", function () {
    	var items;

        beforeEach(function () {
            items = ["1", "2", 3, 4];
        });

        it("should execute criteria correctly", function () {
            expect(items.where(function(x){ return typeof x == "string"})).toEqual(["1", "2"]);
        });
	});
    
    describe("First", function () {
    	var items;

        beforeEach(function () {
            items = ["1", "2", 3, 4];
        });

        it("should execute correctly with no criteria", function () {
            expect(items.first()).toEqual("1");
        });

        it("should execute correctly with criteria", function () {
            expect(items.first(function(x){ return typeof x == "number"})).toEqual(3);
        });
    });
});