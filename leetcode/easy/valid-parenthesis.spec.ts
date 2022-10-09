import { isValid } from "./valid-parenthesis";

it.each([
  ["()", true],
  ["()[]{}", true],
  ["(]", false],
  ["[", false],
  ["]", false],
])("%s is %p", (input, expected) => {
  expect(isValid(input)).toBe(expected);
});
