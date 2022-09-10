import tap from "tap";

/**
 * https://leetcode.com/problems/counting-words-with-a-given-prefix/submissions/
 *
 * You are given an array of strings words and a string pref.
 *
 * Return the number of strings in words that contain pref as a prefix.
 *
 * A prefix of a string s is any leading contiguous substring of s.
 */

const prefixCount = (words: readonly string[], pref: string): number =>
  words.reduce((count, word) => (word.startsWith(pref) ? count + 1 : count), 0);

tap.equal(prefixCount(["pay", "attention", "practice", "attend"], "at"), 2);
tap.equal(prefixCount(["leetcode", "win", "loops", "success"], "code"), 0);
