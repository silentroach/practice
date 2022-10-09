import { moveZeroes } from "./move-zeroes";

it("moves zeros to the end of array", () => {
  const data = [1, 2, 0, 3, 4, 0, 5, 6];

  moveZeroes(data);
  expect(data).toEqual([1, 2, 3, 4, 5, 6, 0, 0]);
});
