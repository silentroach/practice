import { singleNumber } from "./single-number";

it("works", () => {
  expect(singleNumber([1, 1, 2, 3, 3])).toBe(2);
  expect(singleNumber([1, 6, 2, 1, 2, 3, 3])).toBe(6);
});
