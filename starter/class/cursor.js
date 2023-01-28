const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    this.row = Math.max(this.row - 1, 0);
  }

  down() {
    this.row = Math.min(this.row + 1, this.numRows - 1);
  }

  left() {
    this.col = Math.max(this.col - 1, 0);
  }

  right() {
    this.col = Math.min(this.col + 1, this.numCols - 1);
  }

}


module.exports = Cursor;
