import tap from "tap";

/**
 * https://leetcode.com/problems/palindrome-number/
 *
 * Given an integer x, return true if x is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward as forward.
 *
 * For example, 121 is a palindrome while 123 is not.
 */

const isPalindrome = (x: number): boolean => {
  // minus can be only leading
  if (x < 0) {
    return false;
  }

  // leading zero is impossible
  if (x % 10 === 0) {
    return x === 0;
  }

  // trying to calculate reversed value
  let reversed = 0;
  let processing = x;

  while (processing > 0) {
    const last = processing % 10;
    reversed = reversed * 10 + last;

    processing = (processing / 10) | 0;
  }

  return reversed === x;
};

tap.equal(isPalindrome(0), true);
tap.equal(isPalindrome(-606), false);
tap.equal(isPalindrome(130), false);
tap.equal(isPalindrome(121), true);
