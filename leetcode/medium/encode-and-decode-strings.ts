/**
 * https://leetcode.com/problems/encode-and-decode-strings/
 *
 * Design an algorithm to encode a list of strings to a string. The encoded string
 * is then sent over the network and is decoded back to the original list of strings.
 */

const encodeString = (str: string): string =>
  String.fromCharCode(1 + str.length) + str;

export const encode = (strs: string[]): string =>
  strs.map((string) => encodeString(string)).join("");

export const decode = (s: string): string[] => {
  const result: string[] = [];
  const length = s.length;

  if (length === 0) {
    return result;
  }

  let idx = 0;
  while (idx < length) {
    const chunkLength = s[idx++].charCodeAt(0) - 1;
    result.push(s.substring(idx, idx + chunkLength));
    idx += chunkLength;
  }

  return result;
};
