import tap from "tap";

/**
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 *
 * Given a characters array letters that is sorted in non-decreasing order
 * and a character target, return the smallest character in the array that
 * is larger than target.
 *
 * Note that the letters wrap around.
 */

const nextGreatestLetter = (
  letters: readonly string[],
  target: string
): string => {
  let start = 0;
  let end = letters.length;

  while (start < end) {
    const middle = Math.trunc(start + (end - start) / 2);

    if (letters[middle] <= target) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }

  return letters[start % letters.length];
};

tap.equal(nextGreatestLetter(["c", "f", "j"], "a"), "c");
tap.equal(nextGreatestLetter(["c", "f", "j"], "j"), "c");
