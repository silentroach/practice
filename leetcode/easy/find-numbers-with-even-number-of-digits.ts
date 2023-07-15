import tap from "tap";

/**
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 *
 * Given an array nums of integers, return how many of them contain an even number of digits.
 */

// constraint -> num > 0
const getNumberOfDigits = (num: number): number => {
  let count = 0;
  while (num > 0) {
    num = (num / 10) | 0;
    ++count;
  }

  return count;
};

tap.equal(getNumberOfDigits(10), 2);
tap.equal(getNumberOfDigits(1234), 4);
tap.equal(getNumberOfDigits(12345), 5);

const findNumbers = (nums: readonly number[]): number =>
  nums.reduce(
    (count, num) => (getNumberOfDigits(num) % 2 === 0 ? count + 1 : count),
    0,
  );

tap.equal(findNumbers([12, 345, 2, 6, 7896]), 2);
tap.equal(findNumbers([555, 901, 482, 1771]), 1);
