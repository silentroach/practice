import tap from "tap";

/**
 * https://leetcode.com/problems/longest-palindrome/
 *
 * Given a string s which consists of lowercase or uppercase letters,
 * return the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 */

const longestPalindrome = (s: string): number => {
  const unpaired = new Set<string>();

  const length = s.split("").reduce((length, letter) => {
    if (unpaired.has(letter)) {
      unpaired.delete(letter);
      return length + 2;
    }

    unpaired.add(letter);
    return length;
  }, 0);

  return length + (unpaired.size > 0 ? 1 : 0);
};

// region tests
tap.equal(longestPalindrome("abccccdd"), 7);
tap.equal(longestPalindrome("abaa"), 3);
// endregion
