import { isAnagram } from "./valid-anagram";

it("returns false on different length strings", () => {
  expect(isAnagram("test", "me")).toBe(false);
});

it("returns is it anagram", () => {
  expect(isAnagram("test", "sett")).toBe(true);
});

it("returns false if not anagram", () => {
  expect(isAnagram("test", "popo")).toBe(false);
  expect(isAnagram("test", "setts")).toBe(false);
});
