/**
 * https://leetcode.com/problems/rotate-array/
 *
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 */

export type RotateFunction = (nums: number[], k: number) => void;

export const rotateByReverse: RotateFunction = (
  nums: number[],
  k: number,
): void => {
  const length = nums.length;
  k %= length; // reduce extra steps if it is bigger than nums length
  if (length < 2 || k === 0) {
    return;
  }

  // reversing all
  nums.reverse();

  // reversing first k elements
  nums
    .slice(0, k)
    .reverse()
    .forEach((element, idx) => {
      nums[idx] = element;
    });

  // reversing elements after k
  nums
    .slice(k)
    .reverse()
    .forEach((element, idx) => {
      nums[idx + k] = element;
    });
};
