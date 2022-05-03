import tap from "tap";

/**
 * https://leetcode.com/problems/sqrtx/
 *
 * Given a non-negative integer x, compute and return the square root of x.
 *
 * Since the return type is an integer, the decimal digits are truncated,
 * and only the integer part of the result is returned.
 *
 * Note: You are not allowed to use any built-in exponent function or
 * operator, such as pow(x, 0.5) or x ** 0.5.
 */

const mySqrt = (x: number): number => {
  if (x === 1) {
    return 1;
  }

  let start = 0;
  let end = Math.trunc(x / 2);

  while (start <= end) {
    let middle = Math.trunc(end - (end - start) / 2);
    const sq = middle * middle;

    if (sq === x) {
      return middle;
    }

    if (sq < x) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return end;
};

tap.equal(mySqrt(4), 2);
tap.equal(mySqrt(8), 2);
