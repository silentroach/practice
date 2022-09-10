/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 */

import tap from "tap";

const intersection = (nums1: number[], nums2: number[]): number[] => {
  const [smaller, bigger] = [nums1, nums2].sort(
    (n1, n2) => n1.length - n2.length
  );

  if (smaller.length === 0) {
    return [];
  }

  const smallerSet = new Set(smaller);
  const uniqueSet = bigger.reduce((unique, value) => {
    if (smallerSet.has(value)) {
      unique.add(value);
    }
    return unique;
  }, new Set<number>());

  return Array.from(uniqueSet);
};

// region tests
tap.same(intersection([1, 2, 2, 1], [2, 2]), [2]);
tap.same(intersection([4, 9, 5], [9, 4, 9, 8, 4]), [9, 4]);
// endregion
