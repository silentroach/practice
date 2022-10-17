/**
 * https://leetcode.com/problems/shuffle-an-array/
 *
 * Given an integer array nums, design an algorithm to randomly
 * shuffle the array. All permutations of the array should be
 * equally likely as a result of the shuffling.
 */

interface ISolution {
  reset(): number[];
  shuffle(): number[];
}

export class Solution implements ISolution {
  private readonly length: number;

  constructor(private readonly nums: number[]) {
    this.length = nums.length;
  }

  public reset(): number[] {
    return this.nums;
  }

  public shuffle(): number[] {
    // Using Fisher-Yates Algorithm (swap element to begin)

    const data = structuredClone(this.nums);

    for (let idx = 0; idx < this.length - 1; ++idx) {
      const randomIdx =
        Math.ceil(Math.random() * (this.length - idx) + idx) - 1;

      const tmp = data[randomIdx];
      data[randomIdx] = data[idx];
      data[idx] = tmp;
    }

    return data;
  }
}
