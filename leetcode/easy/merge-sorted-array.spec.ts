import { merge } from "./merge-sorted-array";

it("merges two sorted arrays into first", () => {
  const num1 = [1, 2, 3, 0, 0, 0];
  merge(num1, 3, [2, 5, 6], 3);
  expect(num1).toEqual([1, 2, 2, 3, 5, 6]);
});
