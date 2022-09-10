/**
 * https://leetcode.com/problems/island-perimeter/
 *
 * You are given row x col grid representing a map where grid[i][j] = 1
 * represents land and grid[i][j] = 0 represents water.
 *
 * Grid cells are connected horizontally/vertically (not diagonally).
 * The grid is completely surrounded by water, and there is exactly one
 * island (i.e., one or more connected land cells).
 *
 * The island doesn't have "lakes", meaning the water inside isn't connected
 * to the water around the island. One cell is a square with side length 1.
 * The grid is rectangular, width and height don't exceed 100. Determine the
 * perimeter of the island.
 */

import tap from "tap";

const islandPerimeter = (grid: readonly number[][]): number => {
  const maxY = grid.length - 1;
  const maxX = grid[0].length - 1;

  return grid.reduce(
    (result, row, y) =>
      row.reduce((count, item, x) => {
        if (item === 0) {
          return count;
        }

        if (x === 0 || row[x - 1] === 0) ++count;
        if (x === maxX || row[x + 1] === 0) ++count;

        if (y === 0 || grid[y - 1][x] === 0) ++count;
        if (y === maxY || grid[y + 1][x] === 0) ++count;

        return count;
      }, result),
    0
  );
};

// region tests
tap.equal(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
  16
);

tap.equal(islandPerimeter([[1]]), 4);
tap.equal(islandPerimeter([[1, 0]]), 4);
// endregion
