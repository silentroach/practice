import tap from "tap";

/**
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found. If not, return the
 * index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

const searchInsert = (nums: number[], target: number): number => {
  let start = 0;
  let end = nums.length - 1;

  if (end < 0) {
    // empty
    return 0;
  }

  while (end >= start) {
    const position = Math.trunc(end - (end - start) / 2);
    const value = nums[position];

    if (value === target) {
      return position;
    }

    if (value < target) {
      start = position + 1;
    } else {
      end = position - 1;
    }
  }

  return start;
};

tap.equal(searchInsert([1, 3, 5, 6], 5), 2);
tap.equal(searchInsert([1, 3, 5, 6], 2), 1);
tap.equal(searchInsert([1, 3, 5, 6], 7), 4);
