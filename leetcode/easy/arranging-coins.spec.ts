import { arrangeCoins } from "./arranging-coins";

it.each([
  [5, 2],
  [8, 3],
  [123456, 496],
])("%d => %d", (coins, expected) => {
  expect(arrangeCoins(coins)).toBe(expected);
});
