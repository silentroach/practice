import tap from "tap";

/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 */

const lengthOfLongestSubstring = (s: string): number => {
  const length = s.length;
  if (length === 0) {
    return 0;
  } else if (length === 1) {
    return 1;
  }

  const positions = new Map<string, number>(); // char => position
  let start = 0;
  let i = 0;
  let longest = 0;

  while (i < length) {
    const char = s.charAt(i);

    // slide start to char position + 1 if already in map
    const pos = positions.get(char);
    if (pos !== undefined) {
      start = Math.max(pos + 1, start);
    }

    longest = Math.max(longest, i - start + 1);

    positions.set(char, i++);
  }

  return longest;
};

tap.equal(lengthOfLongestSubstring("abcabcbb"), 3);
tap.equal(lengthOfLongestSubstring("bbbbb"), 1);
tap.equal(lengthOfLongestSubstring("pwwkew"), 3);
tap.equal(lengthOfLongestSubstring(" "), 1);
tap.equal(lengthOfLongestSubstring("au"), 2);
tap.equal(lengthOfLongestSubstring("cdd"), 2);
tap.equal(lengthOfLongestSubstring("dvdf"), 3);
tap.equal(lengthOfLongestSubstring("anviaj"), 5);
tap.equal(lengthOfLongestSubstring("bpfbhmipx"), 7);
tap.equal(lengthOfLongestSubstring("ggububgvfk"), 6);
