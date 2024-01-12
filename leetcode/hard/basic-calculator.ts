/**
 * https://leetcode.com/problems/basic-calculator
 *
 * Given a string s representing a valid expression, implement a basic
 * calculator to evaluate it, and return the result of the evaluation.
 */

const TokensRegex = /[+\-()]|\d+/g;

const TokenOpenBrackets = "(";
const TokenClosingBrackets = ")";
const TokenPlus = "+";
const TokenMinus = "-";

export const calculate = (s: string): number => {
  let stack: number[] = []; // value, sign, ...
  let accumulator = 0;
  let sign = 1;

  for (const { "0": value, index } of s.matchAll(TokensRegex)) {
    switch (value) {
      case TokenOpenBrackets:
        stack.push(accumulator, sign);
        accumulator = 0;
        sign = 1;
        break;
      case TokenClosingBrackets:
        if (stack.length === 0) {
          throw new Error(`Unexpected closing brackets at ${index}`);
        }
        accumulator *= stack.pop()!; // sign
        accumulator += stack.pop()!; // value
        break;
      case TokenPlus:
        break;
      case TokenMinus:
        sign = -1;
        break;
      default:
        const normalized = parseInt(value, 10) * sign;
        if (!Number.isFinite(normalized)) {
          throw new Error(`Unknown number at ${index}`);
        }
        sign = 1;
        accumulator += normalized;
        break;
    }
  }

  if (stack.length > 0) {
    throw new Error("Unexpected end of input string");
  }

  return accumulator;
};
