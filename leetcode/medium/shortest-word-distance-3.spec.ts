import { shortestWordDistance } from "./shortest-word-distance-3";

it("returns -1 if there is no occurences", () => {
  expect(shortestWordDistance([], "test", "test2")).toBe(-1);
});

it("example 1", () => {
  expect(
    shortestWordDistance(
      ["practice", "makes", "perfect", "coding", "makes"],
      "makes",
      "coding"
    )
  ).toBe(1);
});

it("example 2", () => {
  expect(
    shortestWordDistance(
      ["practice", "makes", "perfect", "coding", "makes"],
      "makes",
      "makes"
    )
  ).toBe(3);
});
