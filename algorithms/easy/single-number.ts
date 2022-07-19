import tap from "tap";

/**
 * https://leetcode.com/problems/single-number/
 *
 * Given a non-empty array of integers nums, every element appears twice
 * except for one. Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use
 * only constant extra space.
 */

// xor works only for this specific case
const singleNumber = (nums: number[]): number =>
  nums.reduce((result, num) => result ^ num);

// region tests
tap.equal(singleNumber([1, 1, 2, 3, 3]), 2);
tap.equal(singleNumber([1, 6, 2, 1, 2, 3, 3]), 6);
// endregion
