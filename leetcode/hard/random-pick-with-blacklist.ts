/**
 * https://leetcode.com/problems/random-pick-with-blacklist/
 *
 * You are given an integer n and an array of unique integers blacklist.
 * Design an algorithm to pick a random integer in the range [0, n - 1] that is not
 * in blacklist. Any integer that is in the mentioned range and not in blacklist
 * should be equally likely to be returned.
 *
 * Optimize your algorithm such that it minimizes the number of calls to the built-in
 * random function of your language.
 */

import tap from "tap";

class Solution {
  // pool of ranges with blacklisted numbers as holes
  private readonly pool: Array<[number, number]>;

  constructor(n: number, blacklist: number[]) {
    let lower = 0;
    const upper = n - 1;

    this.pool = blacklist
      .filter((value) => value >= 0 && value <= upper)
      .sort((a, b) => a - b)
      .reduce((pools, value) => {
        if (value > lower) {
          pools.push([lower, value - 1]);
        }

        lower = value + 1;

        return pools;
      }, [] as Array<[number, number]>);

    if (blacklist.length === 0) {
      this.pool.push([0, upper]);
    }

    if (lower <= upper) {
      this.pool.push([lower, upper]);
    }
  }

  pick(): number {
    const idx = Math.trunc(Math.random() * this.pool.length);
    const [lower, upper] = this.pool[idx];
    const diff = upper - lower;

    return lower + Math.trunc(Math.random() * (diff + 1));
  }
}

// region tests
const zero = new Solution(0, []);
tap.equal(zero.pick(), 0);
tap.equal(zero.pick(), 0);
tap.equal(zero.pick(), 0);

const twoRanges = new Solution(3, [1]);
tap.equal(
  [twoRanges.pick(), twoRanges.pick(), twoRanges.pick()].filter(
    (value) => value !== 0 && value !== 2
  ).length,
  0
);
// endregion
