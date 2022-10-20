/**
 * https://leetcode.com/problems/missing-number/
 *
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 * nums are unique.
 */

type SolutionFunc = (nums: number[]) => number;

export const missingNumberBySorting: SolutionFunc = (
  nums: number[]
): number => {
  const length = nums.length;
  if (length < 1) {
    throw new TypeError("nums array should be at least 1 element");
  }

  nums.sort((a, b) => a - b);

  let previous = -1;
  const lastCorrect = nums.find((element) => {
    if (previous + 1 === element) {
      previous = element;
      return false;
    }

    return true;
  });

  if (lastCorrect === undefined) {
    return length;
  }

  return lastCorrect - 1;
};

export const missingNumberBySum: SolutionFunc = (nums: number[]): number => {
  const length = nums.length;
  if (length < 1) {
    throw new TypeError("nums array should be at least 1 element");
  }

  const sum = nums.reduce((sum, num) => sum + num);
  const correctSum = Array.from(
    { length: nums.length + 1 },
    (_, idx) => idx
  ).reduce((sum, num) => sum + num);

  return correctSum - sum;
};

export const missingNumberByReduce: SolutionFunc = (nums: number[]): number => {
  const length = nums.length;
  if (length < 1) {
    throw new TypeError("nums array should be at least 1 element");
  }

  return nums.reduce(
    (previous, element, idx) => previous - element + idx,
    length
  );
};
