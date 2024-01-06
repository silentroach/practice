/**
 * https://leetcode.com/problems/unique-number-of-occurrences
 *
 * Given an array of integers arr, return true if the number of occurrences
 * of each value in the array is unique or false otherwise.
 */
export const uniqueOccurrences = (arr: number[]): boolean => {
  const occurrences = arr.reduce(
    (all, value) => all.set(value, (all.get(value) ?? 0) + 1),
    new Map<number, number>(),
  );

  const unique = new Set<number>();

  for (const count of occurrences.values()) {
    if (unique.has(count)) {
      return false;
    }

    unique.add(count);
  }

  return true;
};
