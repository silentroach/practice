/**
 * https://leetcode.com/problems/valid-sudoku/
 *
 * Determine if a 9 x 9 Sudoku board is valid
 */

export const isValidSudoku = (board: string[][]): boolean => {
  const colHashes: Array<Set<string>> = Array.from(
    { length: 9 },
    () => new Set()
  );
  const boxHashes: Array<Set<string>> = Array.from(
    { length: 9 },
    () => new Set()
  );

  return board.every((row, rowIdx) => {
    const lineHash: Set<string> = new Set();

    return row.every((entry, colIdx) => {
      if (entry === ".") {
        return true;
      }

      if (lineHash.has(entry)) {
        return false;
      }
      lineHash.add(entry);

      const colHash = colHashes[colIdx];
      if (colHash.has(entry)) {
        return false;
      }
      colHash.add(entry);

      const boxHash =
        boxHashes[Math.trunc(rowIdx / 3) * 3 + Math.trunc(colIdx / 3)];
      if (boxHash.has(entry)) {
        return false;
      }
      boxHash.add(entry);

      return true;
    });
  });
};
