import tap from "tap";

/**
 * https://leetcode.com/problems/word-pattern/
 *
 * Given a pattern and a string s, find if s follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between
 * a letter in pattern and a non-empty word in s.
 */

const wordPattern = (pattern: string, s: string): boolean => {
  const words = s.split(" ");
  if (words.length !== pattern.length) {
    return false;
  }

  const links = new Map<string, string>();
  const usedWords = new Set<string>();

  return words.every((word, index) => {
    const letter = pattern.at(index)!;
    const link = links.get(letter);

    if (link === undefined) {
      if (usedWords.has(word)) {
        return false;
      }

      links.set(letter, word);
      usedWords.add(word);

      return true;
    }

    return link === word;
  });
};

// region tests
tap.equal(wordPattern("abba", "dog cat cat dog"), true);
tap.equal(wordPattern("abba", "dog dog dog dog"), false);
tap.equal(wordPattern("abba", "dog cat cat fish"), false);
tap.equal(wordPattern("aaaa", "dog cat cat dog"), false);
tap.equal(wordPattern("jquery", "jquery"), false);
// endregion
