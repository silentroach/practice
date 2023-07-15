import { numIdenticalPairs } from "./number-of-good-pairs";

it("returns zero if there is nothing to find", () => {
  expect(numIdenticalPairs([])).toBe(0);
  expect(numIdenticalPairs([1])).toBe(0);
});

it("zero on no pairs found", () => {
  expect(numIdenticalPairs([1, 2, 3, 4, 5])).toBe(0);
});

it("works find", () => {
  expect(numIdenticalPairs([1, 2, 3, 1])).toBe(1);

  expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4);
  expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6);
});
