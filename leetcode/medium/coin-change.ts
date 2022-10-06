/**
 * https://leetcode.com/problems/coin-change/
 *
 * You are given an integer array coins representing coins of different
 * denominations and an integer amount representing a total amount of money.
 *
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 */

export const coinChange = (
  coins: readonly number[],
  amount: number
): number => {
  let result = -1;

  if (coins.length === 0) {
    return result;
  }

  if (amount === 0) {
    return 0;
  }

  for (const coin of [...coins].sort((coin1, coin2) => coin2 - coin1)) {
    const count = amount / coin;
    if (count < 1) {
      continue;
    }

    if (result === -1) {
      result = 0;
    }

    const coinCount = Math.trunc(count);
    amount -= coinCount * coin;

    result += coinCount;

    if (amount === 0) {
      break;
    }
  }

  return amount > 0 ? -1 : result;
};
