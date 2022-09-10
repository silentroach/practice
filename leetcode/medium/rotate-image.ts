/**
 * https://leetcode.com/problems/rotate-image/
 *
 * You are given an n x n 2D matrix representing an image, rotate the image
 * by 90 degrees (clockwise).
 *
 * You have to rotate the image in-place, which means you have to modify the input
 * 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 */

export const rotate = (matrix: number[][]): void => {
  const maxY = matrix.length - 1;
  const maxX = matrix[0].length - 1;
  const middleX = Math.trunc(matrix[0].length / 2);

  // transpose
  for (let y = 0; y < maxY; ++y) {
    for (let x = y; x < maxX + 1; ++x) {
      [matrix[y][x], matrix[x][y]] = [matrix[x][y], matrix[y][x]];
    }
  }

  // reflect
  for (const row of matrix) {
    for (let x = 0; x < middleX; ++x) {
      [row[x], row[maxX - x]] = [row[maxX - x], row[x]];
    }
  }
};
