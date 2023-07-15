/**
 * Implement the myAtoi(string s) function, which converts a
 * string to a 32-bit signed integer (similar to C/C++'s atoi function).
 *
 * The algorithm for myAtoi(string s) is as follows:
 * 1. Read in and ignore any leading whitespace.
 * 2. Check if the next character (if not already at the end of the string)
 *    is '-' or '+'. Read this character in if it is either. This
 *    determines if the final result is negative or positive respectively.
 *    Assume the result is positive if neither is present.
 * 3. Read in next the characters until the next non-digit character or the
 *    end of the input is reached. The rest of the string is ignored.
 * 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32).
 *    If no digits were read, then the integer is 0. Change the sign as
 *    necessary (from step 2).
 *
 * If the integer is out of the 32-bit signed integer range [-231, 231 - 1],
 * then clamp the integer so that it remains in the range. Specifically,
 * integers less than -231 should be clamped to -231, and integers greater
 * than 231 - 1 should be clamped to 231 - 1.
 * Return the integer as the final result.
 */

const IntegerMin = -Math.pow(2, 31);
const IntegerMax = Math.pow(2, 31) - 1;

const DigitsMap = new Map(
  Array(10)
    .fill(0)
    .map((_, idx) => [String(idx), idx]),
);

export const myAtoi = (s: string): number => {
  const length = s.length;
  let n = 0;
  let sign = 1;

  // 1. skipping whitespaces
  while (s.charAt(n) === " " && n++ < length) {}

  // 2. parsing sign
  switch (s.charAt(n)) {
    case "-":
      sign = -1;
    // no break (need to ++n)
    case "+":
      ++n;
      break;
  }

  // 3. read digits until non-digit
  let result = 0;
  while (n < length) {
    const digit = DigitsMap.get(s.charAt(n));
    if (digit === undefined) {
      break;
    }

    result = result * 10 + digit;

    ++n;
  }

  const signed = result * sign;
  if (signed < IntegerMin) {
    return IntegerMin;
  }

  if (signed > IntegerMax) {
    return IntegerMax;
  }

  return signed;
};
