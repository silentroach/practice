import { plusOne } from "./plus-one";

it("works on simple input", () => {
  expect(plusOne([0])).toEqual([1]);
});

it("adds into previous element on overflow", () => {
  expect(plusOne([1, 9])).toEqual([2, 0]);
});

it("adds extra element if needed", () => {
  expect(plusOne([9])).toEqual([1, 0]);
});
