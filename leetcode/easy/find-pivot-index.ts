import tap from "tap";

/**
 * https://leetcode.com/problems/find-pivot-index/
 *
 * Given an array of integers nums, calculate the pivot index of this array.
 *
 * The pivot index is the index where the sum of all the numbers strictly to
 * the left of the index is equal to the sum of all the numbers strictly to the index's right.
 *
 * If the index is on the left edge of the array, then the left sum is 0 because
 * there are no elements to the left. This also applies to the right edge of the array.
 *
 * Return the leftmost pivot index. If no such index exists, return -1.
 */

const pivotIndex = (nums: readonly number[]): number => {
  let right = nums.reduce((sum, num) => sum + num);
  let left = 0;

  return nums.findIndex((num) => {
    right -= num;

    const result = left === right;

    left += num;

    return result;
  });
};

tap.equal(pivotIndex([1, 7, 3, 6, 5, 6]), 3);
tap.equal(pivotIndex([1, 2, 3]), -1);
tap.equal(pivotIndex([2, 1, -1]), 0);
