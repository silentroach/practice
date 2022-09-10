/**
 * https://leetcode.com/problems/contains-duplicate-ii/
 *
 * Given an integer array nums and an integer k, return true if
 * there are two distinct indices i and j in the array such that
 * nums[i] == nums[j] and abs(i - j) <= k.
 */

import tap from "tap";

const containsNearbyDuplicate = (
  nums: readonly number[],
  k: number
): boolean => {
  const pos = new Map<number, number>();

  return nums.some((value, idx) => {
    const previousIdx = pos.get(value);
    if (previousIdx !== undefined && idx - previousIdx <= k) {
      return true;
    }

    pos.set(value, idx);

    return false;
  });
};

// region tests
tap.equal(containsNearbyDuplicate([1, 2, 3, 1], 3), true);
tap.equal(containsNearbyDuplicate([1, 0, 1, 1], 1), true);
tap.equal(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2), false);
// endregion
