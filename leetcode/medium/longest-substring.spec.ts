import { lengthOfLongestSubstring } from "./longest-substring";

it.each([
  ["", 0],
  ["abcabcbb", 3],
  ["bbbbb", 1],
  ["pwwkew", 3],
  [" ", 1],
  ["au", 2],
  ["cdd", 2],
  ["dvdf", 3],
  ["anviaj", 5],
  ["bpfbhmipx", 7],
  ["ggububgvfk", 6],
])("%s => %d", (input, expected) => {
  expect(lengthOfLongestSubstring(input)).toBe(expected);
});
