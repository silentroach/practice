/**
 * https://leetcode.com/problems/implement-strstr/
 *
 * Implement strStr().
 *
 * Given two strings needle and haystack, return the index of the first occurrence of needle
 * in haystack, or -1 if needle is not part of haystack.
 *
 * Clarification:
 *
 * What should we return when needle is an empty string? This is a great question
 * to ask during an interview.
 *
 * For the purpose of this problem, we will return 0 when needle is an empty string.
 * This is consistent to C's strstr() and Java's indexOf().
 */

import tap from "tap";

const strStr = (haystack: string, needle: string): number => {
  if (needle === "") {
    return 0;
  }

  const needleLength = needle.length;
  const upperBound = haystack.length - needleLength + 1;

  let result = 0;
  let pos = 0;
  while (result < upperBound) {
    if (haystack[result + pos] !== needle[pos]) {
      pos = 0;
      ++result;
    } else if (++pos === needleLength) {
      return result;
    }
  }

  return -1;
};

// region tests
tap.equal(strStr("something", ""), 0, "returns 0 when needle is empty");
tap.equal(strStr("hello", "ll"), 2);
tap.equal(strStr("aaaaaaa", "bba"), -1);
// endregion
