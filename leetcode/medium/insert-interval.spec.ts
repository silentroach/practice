import { insert } from "./insert-interval";

it("appends to the end", () => {
  expect(insert([], [2, 5])).toEqual([[2, 5]]);
});

it("inserts to beginning", () => {
  expect(insert([[5, 7]], [2, 3])).toEqual([
    [2, 3],
    [5, 7],
  ]);
});

it("insert in the middle", () => {
  expect(
    insert(
      [
        [2, 3],
        [10, 11],
      ],
      [5, 6]
    )
  ).toEqual([
    [2, 3],
    [5, 6],
    [10, 11],
  ]);
});

it("merges overlapping", () => {
  expect(
    insert(
      [
        [1, 2],
        [3, 4],
        [5, 7],
        [8, 9],
      ],
      [2, 6]
    )
  ).toEqual([
    [1, 7],
    [8, 9],
  ]);
});
