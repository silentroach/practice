import { isPrefixOfWord } from "./check-if-word-occurs-as-prefix-of-any-word";

it("finds a prefixed word index (1-based)", () => {
  expect(isPrefixOfWord("i love eating burger", "burg")).toBe(4);
  expect(isPrefixOfWord("i love eating burger", "i")).toBe(1);
});

it("return -1 if nothing found", () => {
  expect(isPrefixOfWord("i love eating burger", "kek")).toBe(-1);
});

it("also works with empty string", () => {
  expect(isPrefixOfWord("", "kek")).toBe(-1);
});
