/**
 * https://leetcode.com/problems/set-matrix-zeroes/
 *
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * You must do it in place.
 */

export const setZeroes = (matrix: number[][]): void => {
  if (matrix.length < 2) {
    return;
  }

  const zeroColumns = new Set<number>();
  const zeroRows = new Set<number>();

  matrix.forEach((row, rowIdx) => {
    row.forEach((element, columnIdx) => {
      if (element === 0) {
        zeroColumns.add(columnIdx);
        zeroRows.add(rowIdx);
      }
    });
  });

  matrix.forEach((row, rowIdx) => {
    if (zeroRows.has(rowIdx)) {
      row.fill(0);
      return;
    }

    for (let idx of zeroColumns) {
      row[idx] = 0;
    }
  });
};
