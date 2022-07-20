import tap from "tap";

/**
 * https://leetcode.com/problems/ransom-note/
 *
 * Given two strings ransomNote and magazine, return true if ransomNote
 * can be constructed by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 */

const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const counter = magazine
    .split("")
    .reduce(
      (counter, letter) => counter.set(letter, (counter.get(letter) ?? 0) + 1),
      new Map<string, number>()
    );

  return ransomNote.split("").every((letter) => {
    const count = counter.get(letter) ?? 0;
    if (count === 0) {
      return false;
    }

    counter.set(letter, count - 1);
    return true;
  });
};

// region tests
tap.equal(canConstruct("a", "b"), false);
tap.equal(canConstruct("aa", "ab"), false);
tap.equal(canConstruct("aa", "aab"), true);
// endregion
