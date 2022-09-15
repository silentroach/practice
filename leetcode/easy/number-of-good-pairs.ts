/**
 * https://leetcode.com/problems/number-of-good-pairs/submissions/
 *
 * Given an array of integers nums, return the number of good pairs.
 *
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 */

export const numIdenticalPairs = (nums: readonly number[]): number => {
  if (nums.length < 2) {
    // nothing to find here
    return 0;
  }

  // here we will store the number of occurences count
  const numsCount = new Map<number, number>();

  // for every number in the array we add to result
  // the amount of times we met it before
  return nums.reduce((pairsCount, num) => {
    const collectedCount = numsCount.get(num) ?? 0;

    numsCount.set(num, collectedCount + 1);

    return pairsCount + collectedCount;
  }, 0);
};
