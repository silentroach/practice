import { uniqueOccurrences } from "./unique-occurrences";

it("returns true if occurences count is unique", () => {
  expect(uniqueOccurrences([1, 2, 1])).toBe(true);
});

it("returns false if not", () => {
  expect(uniqueOccurrences([1, 2])).toBe(false);
});
