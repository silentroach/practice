import tap from "tap";

/**
 * https://leetcode.com/problems/contains-duplicate/
 *
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 */

const containsDuplicate = (nums: readonly number[]): boolean => {
  const uniq = new Set<number>();

  for (const num of nums) {
    if (uniq.has(num)) {
      return true;
    }

    uniq.add(num);
  }

  return false;
};

tap.equal(containsDuplicate([1, 2, 3, 1]), true);
tap.equal(containsDuplicate([1, 2, 3, 4]), false);
tap.equal(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
