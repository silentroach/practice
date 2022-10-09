/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates
 * in-place such that each unique element appears only once. The relative order of
 * the elements should be kept the same.
 */

export const removeDuplicates = (nums: number[]): number => {
  const length = nums.length;
  if (length <= 1) {
    return length;
  }

  let lastIdx = 0;
  let last = nums[lastIdx];
  let idx = 1;

  while (idx < length) {
    if (last !== nums[idx]) {
      last = nums[++lastIdx] = nums[idx];
    }

    ++idx;
  }

  return lastIdx + 1;
};
