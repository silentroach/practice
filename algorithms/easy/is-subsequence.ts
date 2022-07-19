import tap from "tap";

/**
 * https://leetcode.com/problems/is-subsequence/
 *
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original
 * string by deleting some (can be none) of the characters without disturbing
 * the relative positions of the remaining characters. (i.e., "ace" is a
 * subsequence of "abcde" while "aec" is not).
 */

const isSubsequence = (s: string, t: string): boolean => {
  if (s.length === 0) {
    return true;
  }

  if (t.length === 0) {
    return false;
  }

  if (s.length === t.length) {
    return s === t;
  }

  let position = -1;
  return s.split("").every((letter) => {
    position = t.indexOf(letter, position + 1);
    return position >= 0;
  });
};

// region tests
tap.equal(isSubsequence("", "anything"), true);
tap.equal(isSubsequence("fastcheck", "fastcheck"), true);
tap.equal(isSubsequence("abc", "ahbgdc"), true);
tap.equal(isSubsequence("axc", "ahbgdc"), false);
// endregion
