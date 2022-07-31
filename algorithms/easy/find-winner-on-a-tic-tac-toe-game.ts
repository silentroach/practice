import tap from "tap";

/**
 * https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/
 *
 * Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith
 * move will be played on grid[rowi][coli]. return the winner of the game if it
 * exists (A or B). In case the game ends in a draw return "Draw". If there are still
 * movements to play return "Pending".
 *
 * You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe),
 * the grid is initially empty, and A will play first.
 */

const tictactoe = (moves: readonly number[][]): string => {
  const columns: number[] = new Array(3).fill(0);
  const rows: number[] = new Array(3).fill(0);
  let diagonal = 0;
  let diagonal2 = 0;

  let idx = 0;

  for (const [row, column] of moves) {
    const value = idx++ % 2 === 0 ? 1 : -1;
    columns[column] += value;
    rows[row] += value;

    if (row === column) {
      diagonal += value;
    }

    if (row + column === 2) {
      diagonal2 += value;
    }

    if ([diagonal, diagonal2, columns[column], rows[row]].includes(3)) {
      return "A";
    } else if ([diagonal, diagonal2, columns[column], rows[row]].includes(-3)) {
      return "B";
    }
  }

  if (idx === 9) {
    return "Draw";
  }

  return "Pending";
};

// region tests
tap.equal(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ]),
  "A"
);

tap.equal(
  tictactoe([
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
  ]),
  "B"
);

tap.equal(
  tictactoe([
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2],
  ]),
  "Draw"
);
// endregion
