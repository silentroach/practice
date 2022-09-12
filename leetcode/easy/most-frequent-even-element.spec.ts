import { mostFrequentEven } from "./most-frequent-even-element";

it("-1 on empty", () => {
  expect(mostFrequentEven([])).toBe(-1);
});

it("-1 on no even numbers", () => {
  expect(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7])).toBe(-1);
});

it("returns minimal value on tie", () => {
  expect(mostFrequentEven([4, 4, 4, 9, 2, 4, 2, 2, 2])).toBe(2);
  expect(mostFrequentEven([0, 1, 2, 2, 4, 4, 1])).toBe(2);
});
