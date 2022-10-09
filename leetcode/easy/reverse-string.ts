/**
 * https://leetcode.com/problems/reverse-string/
 *
 * Write a function that reverses a string. The input string is given as an array of characters s.
 *
 * You must do this by modifying the input array in-place with O(1) extra memory.
 */

export const reverseString = (s: string[]): void => {
  const length = s.length;
  let idx = Math.trunc(length / 2) - 1;

  while (idx >= 0) {
    const right = length - 1 - idx;
    const b = s[idx];
    s[idx] = s[right];
    s[right] = b;

    --idx;
  }
};
