import { isPalindrome } from "./valid-palindrome";

it("returns true if  palindrome", () => {
  expect(isPalindrome("aba")).toBe(true);
});

it("returns false if not palindrome", () => {
  expect(isPalindrome("abc")).toBe(false);
});

it("detects palindrome with normalization", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});

it("works with edge cases", () => {
  expect(isPalindrome(" ")).toBe(true);
  expect(isPalindrome("a a")).toBe(true);
  expect(isPalindrome("aa")).toBe(true);
});
