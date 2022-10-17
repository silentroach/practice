/**
 * https://leetcode.com/problems/fizz-buzz/
 *
 * Given an integer n, return a string array answer (1-indexed) where:
 *
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 */

export const fizzBuzz = (n: number): string[] =>
  Array.from({ length: n }, (_, idx) => {
    const index = idx + 1;
    let result = "";

    if (index % 3 === 0) {
      result += "Fizz";
    }

    if (index % 5 === 0) {
      result += "Buzz";
    }

    return result || String(index);
  });
