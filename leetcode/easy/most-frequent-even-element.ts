/**
 * https://leetcode.com/problems/most-frequent-even-element/
 *
 * Given an integer array nums, return the most frequent even element.
 *
 * If there is a tie, return the smallest one. If there is no such element, return -1.
 */

export const mostFrequentEven = (nums: readonly number[]): number => {
  const frequencies = new Map<number, number>();
  let maxFrequency = -Infinity;
  let result = -1;

  for (const num of nums) {
    if (num % 2 !== 0) {
      continue;
    }

    let numFrequency = frequencies.get(num) ?? 0;
    ++numFrequency;
    frequencies.set(num, numFrequency);

    if (numFrequency === maxFrequency) {
      if (num < result) {
        result = num;
      }
    } else if (numFrequency > maxFrequency) {
      maxFrequency = numFrequency;
      result = num;
    }
  }

  return result;
};
