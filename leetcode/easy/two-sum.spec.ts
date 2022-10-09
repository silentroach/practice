import { twoSum } from "./two-sum";

it.each([
  [[], 10, []],
  [[1, 2], 10, []],
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 3], 6, [0, 1]],
  [[2, 5, 5, 11], 10, [1, 2]],
])("searching in %p for %d", (input, sum, expected) => {
  expect(twoSum(input, sum)).toEqual(expected);
});
