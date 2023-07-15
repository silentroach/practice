import tap from "tap";

/**
 * https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
 *
 * Given two integer arrays arr1 and arr2, and the integer d,
 * return the distance value between the two arrays.
 *
 * The distance value is defined as the number of elements
 * arr1[i] such that there is not any element arr2[j] where
 * |arr1[i]-arr2[j]| <= d.
 */

const findTheDistanceValue = (
  arr1: number[],
  arr2: number[],
  d: number,
): number => {
  arr2.sort((a, b) => a - b);

  return arr1.reduce((count, value) => {
    let start = 0;
    let end = arr2.length - 1;

    while (start <= end) {
      const pos = start + Math.trunc((end - start) / 2);
      const middle = arr2[pos];

      if (Math.abs(value - middle) <= d) {
        return count;
      } else if (value > middle) {
        start = pos + 1;
      } else {
        end = pos - 1;
      }
    }

    return count + 1;
  }, 0);
};

tap.equal(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2), 2);
tap.equal(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3), 2);
tap.equal(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6), 1);
tap.equal(findTheDistanceValue([-3, -3, 4, -1, -10], [7, 10], 12), 1);
