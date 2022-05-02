import tap from "tap";

/**
 * Given an integer array nums, move all the even integers at
 * the beginning of the array followed by all the odd integers.
 *
 * Return any array that satisfies this condition.
 */

const sortArrayByParity = (nums: number[]): number[] => {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;

  for (const num of nums) {
    if (num % 2 === 0) {
      result[left++] = num;
    } else {
      result[right--] = num;
    }
  }

  return result;
};

tap.same(sortArrayByParity([3, 1, 2, 4]), [2, 4, 1, 3]);
tap.same(sortArrayByParity([0]), [0]);
