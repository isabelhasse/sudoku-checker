var Board = require('./../js/sudoku-checker.js').boardModule;

describe("Board", function() {
  var correctArray = [3,9,1,2,8,6,5,7,4,4,8,7,3,5,9,1,2,6,6,5,2,7,1,4,8,3,9,8,7,5,4,3,1,6,9,2,2,1,3,9,6,7,4,8,5,9,6,4,5,2,8,7,1,3,1,4,9,6,7,3,2,5,8,5,3,8,1,4,2,9,6,7,7,2,6,8,9,5,3,4,1];

  var correctBoard = new Board(correctArray);

  var completeArray = [];
  for (i=0;i<81;i++) {
    completeArray.push(1)
  }
  var completeBoard = new Board(completeArray);

  it("determines whether array has 81 numbers", function() {
    var incompleteArray = [1];
    var incompleteBoard = new Board(incompleteArray);

    expect(completeBoard.isComplete()).toBe(true);
    expect(incompleteBoard.isComplete()).toBe(false);
  });

  it("determines whether all rows and columns are legal", function() {
    expect(correctBoard.rowsAndColumns()).toBe(true);
    expect(completeBoard.rowsAndColumns()).toBe(false);
  });
});
