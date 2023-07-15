/**
 * https://leetcode.com/problems/to-lower-case/
 *
 * Given a string s, return the string after replacing every
 * uppercase letter with the same lowercase letter.
 *
 * String consists of printable ASCII characters.
 */

// A (65) -> Z (90)
// a (97) -> z (122)

const UpperCaseRegex = /[A-Z]/g;

export const toLowerCase = (s: string): string =>
  s.replace(UpperCaseRegex, (value) =>
    String.fromCharCode(value.charCodeAt(0) + 32),
  );
