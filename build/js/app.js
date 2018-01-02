(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Board(array) {
  this.array = array;
}

Board.prototype.check9 = function(set) {
  for(i=1;i<10;i++) {
    if (!set.includes(i)) {
      return false;
    }
  }
};

Board.prototype.isComplete = function() {
  return this.array.length === 81;
};

Board.prototype.rowsAndColumns = function() {
  if(!this.isComplete()) {
    return false;
  }
  
  for(j=0;j<9;j++) {
    var column = [];
    var row = [];

    for(i=0;i<9;i++) {
      column.push(this.array[ (i*9)+j ]);
      row.push(this.array[ (j*9)+i ]);
    }

    if (this.check9(column) === false || this.check9(row) === false) {
      return false;
    }
  }
  return true;
};

exports.boardModule = Board;

},{}],2:[function(require,module,exports){
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

},{"./../js/sudoku-checker.js":1}]},{},[2]);
