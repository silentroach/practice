import tap from "tap";

/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * You are given an array prices where prices[i] is the price of a
 * given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy
 * one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you
 * cannot achieve any profit, return 0.
 */

const maxProfit = (prices: number[]): number => {
  let minimum = Infinity;

  return prices.reduce((max, price) => {
    if (price < minimum) {
      minimum = price;
    }

    return Math.max(max, price - minimum);
  }, 0);
};

// region tests
tap.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
tap.equal(maxProfit([7, 6, 4, 3, 1]), 0);
tap.equal(maxProfit([]), 0);
// endregion
