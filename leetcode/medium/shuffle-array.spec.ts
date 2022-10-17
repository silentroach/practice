import { Solution } from "./shuffle-array";

it("works with empty array", () => {
  const solution = new Solution([]);
  expect(solution.shuffle()).toEqual([]);
  expect(solution.reset()).toEqual([]);
});

it("works with single element array", () => {
  const solution = new Solution([1]);
  expect(solution.shuffle()).toEqual([1]);
  expect(solution.reset()).toEqual([1]);
});

it("shuffles an array", () => {
  const input = [1, 2, 3, 4, 5];
  const sorter = (a: number, b: number) => a - b;

  const solution = new Solution(input);
  expect(solution.shuffle().sort(sorter)).toEqual(input.sort(sorter));
  expect(solution.reset()).toEqual(input);
});
