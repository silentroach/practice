import { coinChange } from "./coin-change";

it("-1 on empty coins list", () => {
  expect(coinChange([], 10)).toBe(-1);
});

it("0 on empty amount", () => {
  expect(coinChange([100, 123], 0)).toBe(0);
});

it("uses maximum coin first", () => {
  // 100 + 100 + 100 -> 3
  expect(coinChange([5, 10, 100], 300)).toBe(3);
});

it("uses maximum coin first and then try to add other", () => {
  // 10 + 10 + 10 + 10 + 5 -> 5
  expect(coinChange([5, 10, 100], 45)).toBe(5);
});

it("returns -1 on fail", () => {
  expect(coinChange([5, 10, 100], 43)).toBe(-1);
});

it.failing("failed example", () => {
  expect(coinChange([186, 419, 83, 408], 6249)).toBe(20);
});
