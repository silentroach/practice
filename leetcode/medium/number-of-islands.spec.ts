import { numIslands } from "./number-of-islands";

it("works with no islands", () => {
  expect(numIslands([])).toBe(0);

  expect(numIslands([["0"]])).toBe(0);

  expect(
    numIslands([
      ["0", "0"],
      ["0", "0"],
    ]),
  ).toBe(0);
});

it("works with example 1", () => {
  expect(
    numIslands([
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ]),
  ).toBe(1);
});

it("works with example 1", () => {
  expect(
    numIslands([
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "1"],
      ["0", "0", "0", "1", "1"],
    ]),
  ).toBe(3);
});
