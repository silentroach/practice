import tap from "tap";

/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 *
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must appear as many times as it shows in both arrays,
 * and you may return the result in any order.
 */

const intersect = (nums1: number[], nums2: number[]): number[] => {
  const [smaller, bigger] = [nums1, nums2].sort(
    (n1, n2) => n1.length - n2.length,
  );

  if (smaller.length === 0) {
    return [];
  }

  const smallerCount = smaller.reduce(
    (map, num) => map.set(num, (map.get(num) ?? 0) + 1),
    new Map<number, number>(),
  );

  return bigger.filter((number) => {
    const count = smallerCount.get(number);
    if (count !== undefined) {
      if (count > 1) {
        smallerCount.set(number, count - 1);
      } else {
        smallerCount.delete(number);
      }

      return true;
    }
  });
};

// region tests
tap.same(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
tap.same(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [9, 4]);
// endregion
