/**
 * https://leetcode.com/problems/smallest-index-with-equal-value/
 *
 * Given a 0-indexed integer array nums, return the smallest index i
 * of nums such that i mod 10 == nums[i], or -1 if such index does not exist.
 *
 * x mod y denotes the remainder when x is divided by y.
 */

export const smallestEqual = (nums: readonly number[]): number =>
  nums.findIndex((value, idx) => idx % 10 === value);
