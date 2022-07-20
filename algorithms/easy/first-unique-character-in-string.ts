import tap from "tap";

/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 *
 * Given a string s, find the first non-repeating character in it and return its
 * index. If it does not exist, return -1.
 */

const firstUniqChar = (s: string): number => {
  const letters = s.split("");

  const counter = letters.reduce(
    (counter, letter) => counter.set(letter, (counter.get(letter) ?? 0) + 1),
    new Map<string, number>()
  );

  return letters.findIndex((letter) => counter.get(letter) === 1);
};

// region tests
tap.equal(firstUniqChar("leetcode"), 0);
tap.equal(firstUniqChar("loveleetcode"), 2);
tap.equal(firstUniqChar("aabb"), -1);
tap.equal(firstUniqChar("dddccdbba"), 8);
// endregion
