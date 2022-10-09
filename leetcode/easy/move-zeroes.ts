/**
 * https://leetcode.com/problems/move-zeroes/
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining the
 * relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 */

export const moveZeroes = (nums: number[]): void => {
  const length = nums.length;
  let lastIdx = 0;
  let idx = 0;

  // move non-zero
  while (idx < length) {
    const num = nums[idx];
    if (num !== 0) {
      nums[lastIdx++] = num;
    }

    ++idx;
  }

  // fill the rest with zeros
  while (lastIdx < length) {
    nums[lastIdx++] = 0;
  }
};
