import tap from "tap";

/**
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 *
 * Given an integer array nums, you need to find one continuous
 * subarray that if you only sort this subarray in ascending
 * order, then the whole array will be sorted in ascending order.
 *
 * Return the shortest such subarray and output its length.
 */

const findUnsortedSubarray = (nums: readonly number[]): number => {
  let right = nums.length - 1;
  if (right <= 0) {
    return 0;
  }

  let left = 0;

  let min = Infinity;
  let max = -Infinity;

  // result boundaries
  let start = 0;
  let end = -1;

  while (right >= 0) {
    if (nums[left] >= max) {
      max = nums[left];
    } else {
      end = left;
    }

    if (nums[right] <= min) {
      min = nums[right];
    } else {
      start = right;
    }

    ++left;
    --right;
  }

  return end - start + 1;
};

tap.equal(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]), 5);
tap.equal(findUnsortedSubarray([1, 2, 3, 4]), 0);
tap.equal(findUnsortedSubarray([1]), 0);
