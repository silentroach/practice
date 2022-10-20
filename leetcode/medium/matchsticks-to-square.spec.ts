import { makesquare } from "./matchsticks-to-square";

it("returns false on elements count less than 4", () => {
  expect(makesquare([])).toBe(false);
  expect(makesquare([1, 2, 3])).toBe(false);
});

it("returns false if perimeter is not dividable by 4", () => {
  expect(makesquare([1, 2, 3, 4])).toBe(false);
});

it("returns false if one of sticks length greater than side length", () => {
  expect(makesquare([5 /* > 2 */, 1, 1, 1])).toBe(false);
});

it("returns true if we can make a square with matches", () => {
  expect(makesquare([2, 4, 2, 4, 2, 4, 2, 4])).toBe(true);
  expect(makesquare([2, 2, 1, 1, 2])).toBe(true);
});
