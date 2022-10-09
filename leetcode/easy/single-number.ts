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
export const singleNumber = (nums: number[]): number =>
  nums.reduce((result, num) => result ^ num);
