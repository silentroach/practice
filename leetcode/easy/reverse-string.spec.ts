import { reverseString } from "./reverse-string";

it("reverses string in-place", () => {
  const data = "hello".split("").reverse();

  expect(data.join("")).toMatchInlineSnapshot(`"olleh"`); // original
  reverseString(data);
  expect(data.join("")).toMatchInlineSnapshot(`"hello"`); // result
});

it("works fine with just 1 symbol size string", () => {
  const data = ["t"];

  expect(data.join("")).toMatchInlineSnapshot(`"t"`); // original
  reverseString(data);
  expect(data.join("")).toMatchInlineSnapshot(`"t"`); // result
});

it("works fine with just 2 symbol size string", () => {
  const data = ["t", "o"];

  expect(data.join("")).toMatchInlineSnapshot(`"to"`); // original
  reverseString(data);
  expect(data.join("")).toMatchInlineSnapshot(`"ot"`); // result
});
