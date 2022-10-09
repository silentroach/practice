import { removeDuplicates } from "./remove-duplicates-from-sorted-array";

it("works fine on empty/one-element input", () => {
  expect(removeDuplicates([])).toBe(0);
  expect(removeDuplicates([2])).toBe(1);
});

it("works if when nothing to remove", () => {
  expect(removeDuplicates([1, 2, 3, 4, 5])).toBe(5);
});

it("removes duplicates inline", () => {
  const data = [1, 1, 1, 1, 2, 3, 4, 4, 4, 4, 4, 5];

  expect(removeDuplicates(data)).toBe(5);
  expect(data.slice(0, 5)).toMatchInlineSnapshot(`
    [
      1,
      2,
      3,
      4,
      5,
    ]
  `);
});
