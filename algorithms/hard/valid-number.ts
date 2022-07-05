import tap from "tap";

/**
 * https://leetcode.com/problems/valid-number/
 *
 * A valid number can be split up into these components (in order):
 *
 * A decimal number or an integer.
 * (Optional) An 'e' or 'E', followed by an integer.
 * A decimal number can be split up into these components (in order):
 *
 * (Optional) A sign character (either '+' or '-').
 * One of the following formats:
 * One or more digits, followed by a dot '.'.
 * One or more digits, followed by a dot '.', followed by one or more digits.
 * A dot '.', followed by one or more digits.
 * An integer can be split up into these components (in order):
 *
 * (Optional) A sign character (either '+' or '-').
 * One or more digits.
 */

const Digits = new Set("0123456789".split(""));
const Signs = new Set(["-", "+"]);

const isValidComponent = (s: string, allowPoint = false): boolean => {
  const length = s.length;
  if (length === 0) {
    return false;
  }

  let index = Signs.has(s[0]) ? 1 : 0;

  let hasPoint = false;
  let hasDigits = false;
  while (index < length) {
    const char = s[index];

    if (allowPoint && char === ".") {
      if (hasPoint) {
        return false;
      }

      hasPoint = true;
    } else if (!Digits.has(char)) {
      return false;
    } else {
      hasDigits = true;
    }

    ++index;
  }

  return hasDigits;
};

const isNumber = (s: string): boolean => {
  const components = s.split(/e/i);
  if (components.length > 2) {
    return false;
  }

  return (
    isValidComponent(components[0], true) &&
    (components.length === 1 || isValidComponent(components[1]))
  );
};

tap.equal(isNumber("2"), true);
tap.equal(isNumber("0089"), true);
tap.equal(isNumber("-0.1"), true);
tap.equal(isNumber("+3.14"), true);
tap.equal(isNumber("4."), true);
tap.equal(isNumber("-.9"), true);
tap.equal(isNumber("2e10"), true);
tap.equal(isNumber("-90E3"), true);
tap.equal(isNumber("3e+7"), true);
tap.equal(isNumber("+6e-1"), true);
tap.equal(isNumber("53.5e93"), true);
tap.equal(isNumber("-123.456e789"), true);

tap.equal(isNumber("."), false);
tap.equal(isNumber("abc"), false);
tap.equal(isNumber("1a"), false);
tap.equal(isNumber("1e"), false);
tap.equal(isNumber("e3"), false);
tap.equal(isNumber("99e2.5"), false);
tap.equal(isNumber("--6"), false);
tap.equal(isNumber("-+3"), false);
tap.equal(isNumber("95a54e53"), false);
