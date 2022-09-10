import tap from "tap";

/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.

 * You can return the answer in any order.
 */

const twoSum = (nums: number[], target: number): number[] => {
  const length = nums.length;

  // number => position in nums array
  const hash = new Map<number, number>([[nums[0], 0]]);

  for (let i = 1; i < length; ++i) {
    const number = nums[i];
    const check = target - number;

    if (check !== number && hash.has(number)) {
      continue;
    }

    const idx = hash.get(check);
    if (idx !== undefined) {
      return [idx, i];
    }

    hash.set(number, i);
  }

  return [];
};

tap.same(twoSum([2, 7, 11, 15], 9), [0, 1]);
tap.same(twoSum([3, 2, 4], 6), [1, 2]);
tap.same(twoSum([3, 3], 6), [0, 1]);
tap.same(twoSum([2, 5, 5, 11], 10), [1, 2]);
