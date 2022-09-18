/**
 * https://leetcode.com/problems/decoded-string-at-index/
 *
 * You are given an encoded string s. To decode the string to a tape, the encoded
 * string is read one character at a time and the following steps are taken:
 *
 * If the character read is a letter, that letter is written onto the tape.
 * If the character read is a digit d, the entire current tape is repeatedly
 * written d - 1 more times in total.
 * Given an integer k, return the kth letter (1-indexed) in the decoded string.
 */

const PartsRegex = /[a-z]+|\d/g;

export const decodeAtIndex = (s: string, k: number): string => {
  let tape = "";
  if (k < 0) {
    return "";
  }

  const matches = s.match(PartsRegex);
  if (matches === null) {
    return "";
  }

  for (const part of matches) {
    const digit = part.length === 1 && Number(part);
    if (!digit) {
      tape += part;
    } else {
      tape = tape.repeat(digit);
    }

    if (tape.length >= k) {
      return tape[k - 1];
    }
  }

  return "";
};
