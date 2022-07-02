import tap from "tap";

/**
 * https://leetcode.com/problems/valid-perfect-square/
 *
 * Given a positive integer num, write a function which returns
 * True if num is a perfect square else False.
 *
 * Follow up: Do not use any built-in library function such as sqrt.
 */

const isPerfectSquare = (num: number): boolean => {
  if (num === 1) {
    return true;
  }

  let start = 0;
  let end = Math.trunc(num / 2);

  while (start <= end) {
    let middle = Math.trunc(end - (end - start) / 2);
    const sq = middle * middle;

    if (sq === num) {
      return true;
    }

    if (sq < num) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return false;
};

tap.equal(isPerfectSquare(1), true);

tap.equal(isPerfectSquare(16), true);
tap.equal(isPerfectSquare(14), false);
