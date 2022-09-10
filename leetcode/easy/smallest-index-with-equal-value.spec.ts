import { smallestEqual } from "./smallest-index-with-equal-value";

it("-1 on empty", () => {
  expect(smallestEqual([])).toBe(-1);
});

it("examples", () => {
  expect(smallestEqual([0, 1, 2])).toBe(0);
  expect(smallestEqual([4, 3, 2, 1])).toBe(2);
  expect(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(-1);
});
