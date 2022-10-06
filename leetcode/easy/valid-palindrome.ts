/**
 * https://leetcode.com/problems/valid-palindrome/
 *
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads the same
 * forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

const normalizeCode = (charCode: number): number | undefined => {
  if (
    // numeric
    (charCode >= 48 && charCode <= 57) ||
    // lowercase
    (charCode >= 97 && charCode <= 122)
  ) {
    return charCode;
  }

  // converting uppercase to lowercase
  if (charCode >= 65 && charCode <= 90) {
    return charCode + 32;
  }
};

export const isPalindrome = (s: string): boolean => {
  // comparing letters using two pointers from both ends
  let start = -1;
  let end = s.length + 1;

  while (start + 1 < end) {
    let startCode: number | undefined;
    while (startCode === undefined && start < end) {
      startCode = normalizeCode(s.charCodeAt(++start));
    }

    let endCode: number | undefined;
    while (endCode === undefined && start < end) {
      endCode = normalizeCode(s.charCodeAt(--end));
    }

    if (start >= end) {
      return true;
    }

    if (startCode !== endCode) {
      return false;
    }
  }

  return true;
};
