import { romanToInt } from "./roman-to-integer";

it.each([
  ["MMMDDDCCCLLLXXXIII", 4983],
  ["MCMXCIV", 1994],
  ["LVIII", 58],
  ["III", 3],
])("%s => %d", (roman, expected) => {
  expect(romanToInt(roman)).toBe(expected);
});
