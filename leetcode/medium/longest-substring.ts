/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 */

export const lengthOfLongestSubstring = (s: string): number => {
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
