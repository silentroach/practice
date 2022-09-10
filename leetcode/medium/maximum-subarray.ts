import tap from "tap";

/**
 * https://leetcode.com/problems/maximum-subarray/
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 *
 * A subarray is a contiguous part of an array.
 */

const maxSubArray = (nums: readonly number[]): number => {
  let max = -Infinity;
  let result = -Infinity;

  for (const num of nums) {
    max = Math.max(num, max + num);
    if (max > result) {
      result = max;
    }
  }

  return result;
};

tap.equal(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
tap.equal(maxSubArray([1]), 1);
tap.equal(maxSubArray([5, 4, -1, 7, 8]), 23);
