import { myAtoi } from "./string-to-integer";

it("works", () => {
  expect(myAtoi("42")).toBe(42);
});

it("spaces skipped", () => {
  expect(myAtoi("      -42")).toBe(-42);
});

it("with words", () => {
  expect(myAtoi("4193 with words")).toBe(4193);
});

it("out of bounds", () => {
  expect(myAtoi("-91283472332")).toBe(-2147483648);
  expect(myAtoi("91283472332")).toBe(2147483647);
});
