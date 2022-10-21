/**
 * https://leetcode.com/problems/arranging-coins/
 *
 * You have n coins and you want to build a staircase with these coins.
 * The staircase consists of k rows where the ith row has exactly i coins.
 * The last row of the staircase may be incomplete.
 *
 * Given the integer n, return the number of complete rows of the
 * staircase you will build.
 */

export const arrangeCoins = (n: number): number => {
  let row = 1;

  while (n > row + 1) {
    ++row;
    n -= row;
  }

  return row;
};

// @todo binary search?
