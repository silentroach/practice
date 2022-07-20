import tap from "tap";

/**
 * https://leetcode.com/problems/pascals-triangle/
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 */

const createFromPrevious = (row: number[]): number[] => {
  const result = [1];

  for (let i = 0; i < row.length - 1; ++i) {
    result.push(row[i] + row[i + 1]);
  }

  result.push(1);

  return result;
};

const generate = (numRows: number): number[][] => {
  let row = [1];
  const result = [row];

  if (numRows === 1) {
    return result;
  }

  while (--numRows > 0) {
    row = createFromPrevious(row);
    result.push(row);
  }

  return result;
};

// region tests
tap.same(generate(1), [[1]]);
tap.same(generate(2), [[1], [1, 1]]);
tap.same(generate(3), [[1], [1, 1], [1, 2, 1]]);
tap.same(generate(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
// endregion
