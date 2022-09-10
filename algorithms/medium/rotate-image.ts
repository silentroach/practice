/**
 * https://leetcode.com/problems/rotate-image/
 *
 * You are given an n x n 2D matrix representing an image, rotate the image
 * by 90 degrees (clockwise).
 *
 * You have to rotate the image in-place, which means you have to modify the input
 * 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 */

import tap from "tap";

const rotate = (matrix: number[][]): void => {
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

// region tests
const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

rotate(matrix);

tap.same(matrix, [
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
]);
// endregion
