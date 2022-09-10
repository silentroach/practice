import tap from "tap";

/**
 * https://leetcode.com/problems/isomorphic-strings/
 *
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character, but a character may map to itself.
 */

const isIsomorphic = (s: string, t: string): boolean => {
  const map = new Map<string, string>();
  const used = new Set<string>();

  return s.split("").every((first, idx) => {
    const second = t[idx];
    let mapped = map.get(first);

    if (mapped === undefined) {
      if (used.has(second)) {
        return false;
      } else {
        used.add(second);
      }

      mapped = second;
      map.set(first, second);
    }

    return mapped === second;
  });
};

// region tests
tap.equal(isIsomorphic("badc", "baba"), false);
tap.equal(isIsomorphic("egg", "add"), true);
tap.equal(isIsomorphic("paper", "title"), true);
tap.equal(isIsomorphic("foo", "bar"), false);
// endregion
