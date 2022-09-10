import tap from "tap";

/**
 * https://leetcode.com/problems/reverse-integer/
 *
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer
 * range [-231, 231 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers
 * (signed or unsigned).
 */

const MinValue = -Math.pow(2, 31);
const MaxValue = Math.pow(2, 31) - 1;

const reverse = (x: number): number => {
  let result = 0;
  while (x != 0) {
    const rem = x % 10;
    x = (x - rem) / 10;
    result = result * 10 + rem;

    if (result > MaxValue || result < MinValue) {
      return 0;
    }
  }

  return result;
};

// region tests
tap.equal(reverse(-1299934), -4399921);
tap.equal(reverse(-123), -321);
tap.equal(reverse(120), 21);
tap.equal(reverse(1534236469), 0); // out of bounds
// endregion
