import { largeGroupPositions } from "./positions-of-large-groups";

it("works fine with empty input", () => {
  expect(largeGroupPositions("")).toEqual([]);
});

it("real test case example", () => {
  expect(largeGroupPositions("abcdddeeeeaabbbcd")).toEqual([
    [3, 5],
    [6, 9],
    [12, 14],
  ]);
});
