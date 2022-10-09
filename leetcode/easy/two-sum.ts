/**
 * https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.

 * You can return the answer in any order.
 */

export const twoSum = (nums: number[], target: number): number[] => {
  const length = nums.length;
  if (length < 2) {
    return [];
  }

  // number => position in nums array
  const hash = new Map<number, number>([[nums[0], 0]]);

  for (let i = 1; i < length; ++i) {
    const number = nums[i];
    const check = target - number;

    const idx = hash.get(check);
    if (idx !== undefined) {
      return [idx, i];
    }

    hash.set(number, i);
  }

  return [];
};
