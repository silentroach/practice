/**
 * https://leetcode.com/problems/plus-one/
 *
 * You are given a large integer represented as an integer array digits,
 * where each digits[i] is the ith digit of the integer. The digits are
 * ordered from most significant to least significant in left-to-right
 * order. The large integer does not contain any leading 0's.
 *
 * Increment the large integer by one and return the resulting array of digits.
 */

const plusOne = (digits: number[]): number[] => {
  const result = ([] as number[]).concat(digits);
  let pos = digits.length - 1;

  let add = 1;
  while (pos >= 0 && add > 0) {
    if (result[pos] < 9) {
      ++result[pos];
      add = 0;
    } else {
      result[pos] = 0;
    }

    --pos;
  }

  if (add > 0) {
    result.unshift(add);
  }

  return result;
};

console.log(plusOne([9, 9, 9, 9]));
