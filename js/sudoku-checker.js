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
