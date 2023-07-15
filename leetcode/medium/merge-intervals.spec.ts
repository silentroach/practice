import { merge } from "./merge-intervals";

it("returns on empty list", () => {
  expect(merge([])).toEqual([]);
});

it("merges consecutive intervals", () => {
  expect(
    merge([
      [1, 2],
      [2, 3],
    ]),
  ).toEqual([[1, 3]]);
});

it("merges overlapping intervals", () => {
  expect(
    merge([
      [1, 3],
      [15, 18],
      [2, 6],
      [8, 10],
    ]),
  ).toEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
});
