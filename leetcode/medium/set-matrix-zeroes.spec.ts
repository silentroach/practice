import { setZeroes } from "./set-matrix-zeroes";

it("works on empty input", () => {
  const data: number[][] = [];
  setZeroes(data);
  expect(data).toEqual([]);
});

it("marks entire column and row with zeroes if element is zero", () => {
  const data = [
    [0, 1],
    [1, 1],
  ];
  setZeroes(data);
  expect(data).toEqual([
    [0, 0],
    [0, 1],
  ]);
});

it("also fill to the left and above", () => {
  const data = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 0, 1],
  ];

  setZeroes(data);
  expect(data).toEqual([
    [1, 0, 1],
    [1, 0, 1],
    [0, 0, 0],
  ]);
});
