/**
 * https://leetcode.com/problems/number-of-islands/
 *
 * Given an m x n 2D binary grid grid which represents a map of '1's (land)
 * and '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent
 * lands horizontally or vertically. You may assume all four edges of the
 * grid are all surrounded by water.
 */

const enum ItemType {
  Land = "1",
  Water = "0",
}

type Grid = string[][];

const removeIsland = (
  grid: Grid,
  rowIndex: number,
  columnIndex: number,
): void => {
  grid[rowIndex][columnIndex] = ItemType.Water;

  if (rowIndex > 0 && grid[rowIndex - 1][columnIndex] === ItemType.Land) {
    removeIsland(grid, rowIndex - 1, columnIndex);
  }

  if (columnIndex > 0 && grid[rowIndex][columnIndex - 1] === ItemType.Land) {
    removeIsland(grid, rowIndex, columnIndex - 1);
  }

  if (
    rowIndex < grid.length - 1 &&
    grid[rowIndex + 1][columnIndex] === ItemType.Land
  ) {
    removeIsland(grid, rowIndex + 1, columnIndex);
  }

  if (
    columnIndex < grid[0].length - 1 &&
    grid[rowIndex][columnIndex + 1] === ItemType.Land
  ) {
    removeIsland(grid, rowIndex, columnIndex + 1);
  }
};

export const numIslands = (grid: Grid): number => {
  let count = 0;

  // searching for island, count it and remove
  grid.forEach((row, rowIndex) => {
    row.forEach((item, columnIndex) => {
      if (item === ItemType.Land) {
        ++count;
        removeIsland(grid, rowIndex, columnIndex);
      }
    });
  });

  return count;
};
