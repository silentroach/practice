import { mergeAlternately } from "./merge-strings-alternately";

it("example 1", () => {
  expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
});

it("example 2", () => {
  expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
});

it("example 3", () => {
  expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
});

it("uses shortcuts", () => {
  expect(mergeAlternately("", "test")).toEqual("test");
  expect(mergeAlternately("test", "")).toEqual("test");
});
