var Board = require('./../js/sudoku-checker.js').boardModule;

$(document).ready(function(){
  $("#sudoku").submit(function(event) {
    event.preventDefault();
    var inputtedArray = $("#array").val().split("");
    var numbersArray = inputtedArray.map(function(number) {
      return parseInt(number);
    });
    var inputtedBoard = new Board(numbersArray);
    if(inputtedBoard.rowsAndColumns()) {
      $("#not").text("");
    } else {
      $("#not").text("not ");
    }
    $("#output").show();
  });
});
