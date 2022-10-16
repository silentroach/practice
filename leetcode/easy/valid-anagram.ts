/**
 * https://leetcode.com/problems/valid-anagram/
 *
 * Given two strings s and t, return true if t is an anagram of s,
 * and false otherwise.
 */

export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    return false;
  }

  const counter = new Map<string, number>();
  for (let char of s) {
    counter.set(char, (counter.get(char) ?? 0) + 1);
  }

  for (let char of t) {
    const count = counter.get(char);
    if (count === undefined) {
      return false;
    }

    if (count === 1) {
      counter.delete(char);
    } else {
      counter.set(char, count - 1);
    }
  }

  return counter.size === 0;
};
