import { fizzBuzz } from "./fizz-buzz";

it("just works", () => {
  expect(fizzBuzz(15)).toMatchInlineSnapshot(`
    [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ]
  `);
});