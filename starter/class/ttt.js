const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    let cursor = this.cursor;

    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    Screen.addCommand('w', 'moving up', cursor.up);
    Screen.addCommand('a', 'moving down', cursor.down);
    Screen.addCommand('s', 'moving left', cursor.left);
    Screen.addCommand('d', 'moving right', cursor.right);

    Screen.addCommand('o', 'make a move', function(){
      Screen.setGrid(cursor.row, cursor.col, "O");
    })

    Screen.render();
  }

  static checkWin(grid) {

    let emptyCounter = 0;
    let counterX = 0;
    let counterO = 0;
    grid.forEach(function(row) {
      row.forEach(function(col) {
        if (col === " ") {
          emptyCounter++;
        }

        if (col === "X") {
          counterX++;
        }

        if (col === "O") {
          counterO++;
        }
      })
    })
    if (emptyCounter === 0) {
      return 'T';
    }


    if (counterX === 3) {
      return "X";
    }

    if (counterO === 3) {
      return "O";
    }

    if (emptyCounter === 9) {
      return false;
    }
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
    return false;
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
