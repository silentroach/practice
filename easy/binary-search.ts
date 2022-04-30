import tap from "tap";

/**
 * Given an array of integers nums which is sorted in ascending order,
 * and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

const search = (nums: number[], target: number): number => {
  let start = 0;
  let end = nums.length - 1;

  while (end >= start) {
    const middle = Math.trunc(end - (end - start) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
};

tap.equal(search([2, 5], 0), -1);
tap.equal(search([2, 5], 5), 1);
tap.equal(search([9], 9), 0);
tap.equal(search([-1, 0, 3, 5, 9, 12], 9), 4);
tap.equal(search([-1, 0, 3, 5, 9, 12], 2), -1);
