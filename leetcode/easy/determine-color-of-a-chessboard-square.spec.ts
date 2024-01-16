import { squareIsWhite } from "./determine-color-of-a-chessboard-square";

it.each([
  ["a1", false],
  ["h3", true],
  ["c7", false],
])("Detects color for %s", (coordinates: string, expected: boolean) => {
  expect(squareIsWhite(coordinates)).toBe(expected);
});
