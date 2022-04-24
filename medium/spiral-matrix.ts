import tap from "tap";

/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 */

const spiralOrder = (matrix: number[][]): number[] => {
  let columnStart = 0;
  let columnEnd = matrix[0].length - 1;

  let rowStart = 0;
  let rowEnd = matrix.length - 1;

  const result: number[] = [];

  while (columnStart <= columnEnd && rowStart <= rowEnd) {
    // right
    for (let idx = columnStart; idx <= columnEnd; ++idx) {
      result.push(matrix[rowStart][idx]);
    }

    // down
    for (let idx = rowStart + 1; idx <= rowEnd; ++idx) {
      result.push(matrix[idx][columnEnd]);
    }

    if (rowStart !== rowEnd) {
      // left
      for (let idx = columnEnd - 1; idx > columnStart; --idx) {
        result.push(matrix[rowEnd][idx]);
      }
    }

    if (columnStart !== columnEnd) {
      // up
      for (let idx = rowEnd; idx > rowStart; --idx) {
        result.push(matrix[idx][columnStart]);
      }
    }

    ++rowStart;
    --rowEnd;
    ++columnStart;
    --columnEnd;
  }

  return result;
};

tap.same(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [1, 2, 3, 6, 9, 8, 7, 4, 5]
);

tap.same(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
  [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
);

tap.same(spiralOrder([[3], [2]]), [3, 2]);
