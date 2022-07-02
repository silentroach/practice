import tap from "tap";

/**
 * https://leetcode.com/problems/triangle/
 *
 * Given a triangle array, return the minimum path sum from top to bottom.
 *
 * For each step, you may move to an adjacent number of the row below. More formally,
 * if you are on index i on the current row, you may move to either index i or
 * index i + 1 on the next row.
 */

const reduceRow = (row: readonly number[]): readonly number[] => {
  const length = row.length;
  if (length < 2) {
    return row;
  }

  const result: number[] = [];
  for (let i = 0; i < length - 1; ++i) {
    result.push(Math.min(row[i], row[i + 1]));
  }

  return result;
};

const minimumTotal = (triangle: readonly number[][]): number =>
  triangle.reduceRight(
    (totals, row) =>
      reduceRow(row.map((element, idx) => element + (totals[idx] ?? 0))),
    [] as readonly number[]
  )[0] ?? 0;

tap.same(reduceRow([]), []);
tap.same(reduceRow([1]), [1]);
tap.same(reduceRow([4, 1, 8, 3]), [1, 1, 3]);

tap.equal(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]), 11);
tap.equal(minimumTotal([[-10]]), -10);
